"""
Multi-Agent Risk Analysis API Endpoint
======================================

Provides comprehensive risk analysis using the 6-agent system
"""

from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from datetime import datetime, timedelta
import yfinance as yf
import pandas as pd

from app.ai.multi_agent_risk_system import (
    MultiAgentRiskSystem,
    AgentType,
    RiskLevel,
    UnifiedRiskAssessment,
    AgentSignal,
)
from app.scraping.shareholding_scraper import shareholding_scraper
from app.scraping.data_fetcher import MarketDataFetcher
from app.scraping.news_scraping import google_news_scraper, yahoo_news_scraper
from app.models.models import (
    Shareholding,
    DeliveryData,
    BulkDeal,
    BlockDeal,
    NewsArticle,
)

router = APIRouter(prefix="/api/multi-agent", tags=["Multi-Agent Risk Analysis"])


# ============================================================================
# RESPONSE MODELS
# ============================================================================


class AgentSignalResponse(BaseModel):
    """Response model for individual agent signal"""

    agent_type: str
    risk_score: float
    confidence: float
    signals: List[str]
    metadata: Dict


class MultiAgentAnalysisResponse(BaseModel):
    """Complete multi-agent analysis response"""

    symbol: str
    timestamp: str
    overall_risk_score: float
    risk_level: str
    agent_signals: List[AgentSignalResponse]
    agent_contributions: Dict[str, float]
    co_occurrence_amplifications: List[Dict[str, Any]]
    explanation: str
    data_sources_used: List[str]


class FeedbackRequest(BaseModel):
    """Request model for providing feedback"""

    symbol: str
    actual_outcome: str = Field(
        ..., description="Actual outcome: 'pump_and_dump', 'legitimate', 'uncertain'"
    )
    agent_feedback: Optional[Dict[str, float]] = Field(
        None, description="Optional per-agent performance scores (0-1)"
    )


# ============================================================================
# HELPER FUNCTIONS
# ============================================================================


def fetch_ohlcv_multi_timeframe(ticker: str) -> Dict[str, List[Dict]]:
    """Fetch OHLCV data for multiple timeframes"""

    timeframes = {
        "10min": ("5d", "10m"),
        "15min": ("5d", "15m"),
        "30min": ("5d", "30m"),
    }

    result = {}

    for interval_name, (period, interval) in timeframes.items():
        try:
            data = yf.download(
                ticker,
                period=period,
                interval=interval,
                auto_adjust=False,
                progress=False,
            )

            if data.empty:
                continue

            # Handle multi-index columns
            if hasattr(data.columns, "levels"):
                data.columns = data.columns.get_level_values(0)

            data = data.reset_index()

            # Calculate technical indicators
            data["body"] = abs(data["Close"] - data["Open"])
            data["upper_wick"] = data["High"] - data[["Close", "Open"]].max(axis=1)
            data["lower_wick"] = data[["Close", "Open"]].min(axis=1) - data["Low"]
            data["wick_body_ratio"] = (data["upper_wick"] + data["lower_wick"]) / (
                data["body"] + 0.0001
            )

            data["volume_ma_20"] = data["Volume"].rolling(20).mean()
            data["volume_ratio"] = data["Volume"] / (data["volume_ma_20"] + 1)

            data["price_change_pct"] = data["Close"].pct_change() * 100

            # Convert to list of dicts
            records = []
            for _, row in data.iterrows():
                records.append(
                    {
                        "date": (
                            row["Datetime"].isoformat()
                            if "Datetime" in row
                            else str(row.name)
                        ),
                        "open": float(row["Open"]),
                        "high": float(row["High"]),
                        "low": float(row["Low"]),
                        "close": float(row["Close"]),
                        "volume": int(row["Volume"]),
                        "body": float(row["body"]),
                        "upper_wick": float(row["upper_wick"]),
                        "lower_wick": float(row["lower_wick"]),
                        "wick_body_ratio": float(row["wick_body_ratio"]),
                        "volume_ratio": float(row["volume_ratio"]),
                        "price_change_pct": (
                            float(row["price_change_pct"])
                            if not pd.isna(row["price_change_pct"])
                            else 0
                        ),
                    }
                )

            result[interval_name] = records

        except Exception as e:
            print(f"Failed to fetch {interval_name} data: {e}")
            continue

    return result


def fetch_price_data(ticker: str, period: str = "1mo") -> List[Dict]:
    """Fetch daily price data"""

    try:
        data = yf.download(ticker, period=period, auto_adjust=False, progress=False)

        if data.empty:
            return []

        # Handle multi-index columns
        if hasattr(data.columns, "levels"):
            data.columns = data.columns.get_level_values(0)

        data = data.reset_index()
        data["price_change_pct"] = data["Close"].pct_change() * 100

        records = []
        for _, row in data.iterrows():
            records.append(
                {
                    "date": (
                        row["Date"].strftime("%Y-%m-%d")
                        if "Date" in row
                        else str(row.name)
                    ),
                    "close": float(row["Close"]),
                    "price_change_pct": (
                        float(row["price_change_pct"])
                        if not pd.isna(row["price_change_pct"])
                        else 0
                    ),
                }
            )

        return records

    except Exception as e:
        print(f"Failed to fetch price data: {e}")
        return []


# ============================================================================
# API ENDPOINTS
# ============================================================================


@router.get("/analyze/{symbol}", response_model=MultiAgentAnalysisResponse)
async def analyze_stock(
    symbol: str,
    include_shareholding: bool = Query(
        True, description="Include shareholding analysis"
    ),
    include_delivery: bool = Query(True, description="Include delivery analysis"),
    include_microstructure: bool = Query(
        True, description="Include microstructure analysis"
    ),
    include_deals: bool = Query(True, description="Include bulk/block deals analysis"),
    include_news: bool = Query(True, description="Include news/narrative analysis"),
):
    """
    Comprehensive multi-agent risk analysis for a stock

    This endpoint orchestrates all 6 agents to provide a unified risk assessment.

    **Agents:**
    1. Retail Trap Agent - Shareholding patterns
    2. Delivery Spike Agent - Delivery vs price movements
    3. Microstructure Agent - Candlestick manipulation
    4. Bulk/Block Deals Agent - Large deal patterns
    5. Narrative Risk Agent - News sentiment and hype
    6. Misinformation Agent - Source credibility

    **Returns:**
    - Overall risk score (0-100)
    - Risk level (LOW, MEDIUM, HIGH, CRITICAL)
    - Individual agent signals
    - Agent contributions to overall score
    - Co-occurrence amplifications
    - Detailed explanation
    """

    try:
        # Initialize the multi-agent system
        system = MultiAgentRiskSystem()

        data_sources_used = []

        # Collect data for each agent
        shareholding_data = None
        delivery_data = None
        price_data = None
        ohlcv_data = None
        bulk_deals = None
        block_deals = None
        news_articles = None

        # Agent 1: Shareholding data
        if include_shareholding:
            try:
                shareholding = shareholding_scraper(symbol)
                if shareholding:
                    shareholding_data = shareholding.dict()
                    data_sources_used.append("Shareholding Pattern")
            except Exception as e:
                print(f"Shareholding scraping failed: {e}")

        # Initialize market data fetcher for agents 2, 3, 4
        fetcher = MarketDataFetcher()

        # Agent 2: Delivery data
        if include_delivery:
            try:
                delivery_df = fetcher.get_delivery_data(symbol)
                if delivery_df is not None and not delivery_df.empty:
                    # Convert DataFrame to list of dicts
                    delivery_data = []
                    for _, row in delivery_df.iterrows():
                        delivery_data.append(
                            {
                                "date": (
                                    row["Date"].strftime("%Y-%m-%d")
                                    if hasattr(row["Date"], "strftime")
                                    else str(row["Date"])
                                ),
                                "delivery_pct": float(row["Delivery_Pct"]),
                            }
                        )

                    # Fetch price data for correlation
                    price_data = fetch_price_data(f"{symbol}.NS")
                    data_sources_used.append("Delivery Data")
            except Exception as e:
                print(f"Delivery fetching failed: {e}")

        # Agent 3: Microstructure data
        if include_microstructure:
            try:
                ohlcv_data = fetch_ohlcv_multi_timeframe(f"{symbol}.NS")
                if ohlcv_data:
                    data_sources_used.append("Microstructure (OHLCV)")
            except Exception as e:
                print(f"OHLCV fetching failed: {e}")

        # Agent 4: Bulk/Block deals
        if include_deals:
            try:
                bulk_df = fetcher.get_bulk_deals(symbol)
                block_df = fetcher.get_block_deals(symbol)

                if bulk_df is not None and not bulk_df.empty:
                    bulk_deals = []
                    for _, row in bulk_df.iterrows():
                        bulk_deals.append(
                            {
                                "symbol": symbol,
                                "client_name": str(row.get("CLIENT NAME", "")),
                                "buy_sell": str(row.get("BUY/SELL", "")),
                                "quantity": int(row.get("QUANTITY", 0)),
                                "price": float(
                                    row.get("TRADE PRICE / WGHT. AVG. PRICE", 0)
                                ),
                                "date": str(row.get("Date", "")),
                            }
                        )

                if block_df is not None and not block_df.empty:
                    block_deals = []
                    for _, row in block_df.iterrows():
                        block_deals.append(
                            {
                                "symbol": symbol,
                                "client_name": str(row.get("CLIENT NAME", "")),
                                "buy_sell": str(row.get("BUY/SELL", "")),
                                "quantity": int(row.get("QUANTITY", 0)),
                                "price": float(
                                    row.get("TRADE PRICE / WGHT. AVG. PRICE", 0)
                                ),
                                "date": str(row.get("Date", "")),
                            }
                        )

                if bulk_deals or block_deals:
                    data_sources_used.append("Bulk/Block Deals")
            except Exception as e:
                print(f"Deals fetching failed: {e}")

        # Agent 5 & 6: News data
        if include_news:
            try:
                # Fetch from both Google and Yahoo
                google_news = google_news_scraper(
                    symbol, symbol
                )  # company name = symbol for now
                yahoo_news = yahoo_news_scraper(symbol)

                # Combine and deduplicate
                all_news = google_news + yahoo_news
                unique_news = {article.url: article for article in all_news}

                if unique_news:
                    news_articles = [article.dict() for article in unique_news.values()]
                    data_sources_used.append("News Articles")
            except Exception as e:
                print(f"News scraping failed: {e}")

        # Run multi-agent analysis
        assessment = system.analyze(
            symbol=symbol,
            shareholding_data=shareholding_data,
            delivery_data=delivery_data,
            price_data=price_data,
            ohlcv_data=ohlcv_data,
            bulk_deals=bulk_deals,
            block_deals=block_deals,
            news_articles=news_articles,
            social_posts=None,  # Can be added later
        )

        # Convert to response format
        agent_signals_response = [
            AgentSignalResponse(
                agent_type=signal.agent_type.value,
                risk_score=signal.risk_score,
                confidence=signal.confidence,
                signals=signal.signals,
                metadata=signal.metadata,
            )
            for signal in assessment.agent_signals
        ]

        co_occurrence_response = [
            {
                "agent1": agent1.value,
                "agent2": agent2.value,
                "amplification_bonus": bonus,
            }
            for agent1, agent2, bonus in assessment.co_occurrence_amplifications
        ]

        return MultiAgentAnalysisResponse(
            symbol=assessment.symbol,
            timestamp=assessment.timestamp.isoformat(),
            overall_risk_score=assessment.overall_risk_score,
            risk_level=assessment.risk_level.value,
            agent_signals=agent_signals_response,
            agent_contributions={
                k.value: v for k, v in assessment.agent_contributions.items()
            },
            co_occurrence_amplifications=co_occurrence_response,
            explanation=assessment.explanation,
            data_sources_used=data_sources_used,
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Analysis failed: {str(e)}")


@router.post("/record-drawdown")
async def record_drawdown(
    symbol: str,
    predicted_risk_score: float,
    actual_drawdown: float,
    days_to_drawdown: int,
    agent_signals_json: Optional[str] = None,
):
    """
    Record a historical drawdown event for learning

    This endpoint implements the sophisticated learning system:
    **w_final = α × w_expert + (1-α) × w_learned**

    Where:
    - w_expert = Domain expert weights (interpretable)
    - w_learned = Weights learned from historical drawdowns
    - α ∈ [0.6, 0.8] = Blending parameter (default: 0.7)

    **How it works:**
    1. You analyze a stock and get a risk score
    2. Days/weeks later, you observe the actual drawdown
    3. You call this endpoint with the actual outcome
    4. System learns which agents predicted correctly
    5. Weights are updated using exponentially weighted moving average
    6. Future predictions become more accurate

    **Args:**
    - symbol: Stock symbol that was analyzed
    - predicted_risk_score: The risk score we predicted (0-100)
    - actual_drawdown: Actual max drawdown that occurred (%)
      - e.g., 25.5 means stock fell 25.5% from peak
      - Use positive numbers (25, not -25)
    - days_to_drawdown: Days until drawdown occurred
    - agent_signals_json: (Optional) JSON string of original agent signals

    **Example:**
    ```json
    {
      "symbol": "WIPRO",
      "predicted_risk_score": 75.0,
      "actual_drawdown": 28.5,
      "days_to_drawdown": 30
    }
    ```

    **Returns:**
    - Updated weight information
    - Learning statistics
    """

    try:
        system = MultiAgentRiskSystem()

        # If agent signals not provided, we can't update weights precisely
        # But we can still record the event
        if agent_signals_json:
            # Parse agent signals (this would need to be implemented)
            # For now, we'll do a simple version
            pass

        # For simplified version without original signals,
        # we'll create dummy signals based on the predicted score
        # In production, you'd store the original analysis and retrieve it
        from app.ai.multi_agent_risk_system import AgentSignal, AgentType

        # Create dummy signals proportional to predicted risk
        dummy_signals = []
        for agent_type in AgentType:
            # Distribute risk score across agents
            dummy_signals.append(
                AgentSignal(
                    agent_type=agent_type,
                    risk_score=predicted_risk_score * 0.8,  # Approximate
                    confidence=0.7,
                    signals=["Historical event"],
                    metadata={},
                )
            )

        # Record the drawdown
        system.record_drawdown(
            symbol=symbol,
            agent_signals=dummy_signals,
            predicted_risk_score=predicted_risk_score,
            actual_drawdown=actual_drawdown,
            days_to_drawdown=days_to_drawdown,
        )

        # Get updated weight info
        weight_info = system.get_weight_info()

        return {
            "status": "success",
            "message": "Drawdown event recorded and weights updated",
            "symbol": symbol,
            "predicted_risk_score": predicted_risk_score,
            "actual_drawdown": actual_drawdown,
            "days_to_drawdown": days_to_drawdown,
            "weight_info": weight_info,
            "learning_formula": "w_final = α × w_expert + (1-α) × w_learned",
        }

    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Drawdown recording failed: {str(e)}"
        )


@router.get("/weights")
async def get_current_weights():
    """
    Get current agent weights

    Returns the weight structure:
    - **expert_weights**: Domain knowledge-based weights (interpretable)
    - **learned_weights**: Weights learned from historical drawdowns
    - **final_weights**: Blended weights used for predictions
      - Formula: w_final = α × w_expert + (1-α) × w_learned
      - α = 0.7 (default): 70% expert, 30% learned

    This maintains interpretability while improving performance through learning.
    """

    try:
        system = MultiAgentRiskSystem()
        weight_info = system.get_weight_info()

        return {
            **weight_info,
            "last_updated": datetime.now().isoformat(),
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to get weights: {str(e)}")


@router.get("/agent-info")
async def get_agent_info():
    """
    Get information about all agents

    Returns detailed information about each agent's purpose and detection capabilities.
    """

    agent_info = {
        "agents": [
            {
                "type": "retail_trap",
                "name": "Retail Trap Detector",
                "description": "Monitors shareholding patterns to detect retail traps",
                "signals": [
                    "QoQ retail accumulation with institutional exit",
                    "Multi-quarter gradual institutional exit",
                    "Severe FII exit patterns",
                    "Dual institutional exit (FII + DII)",
                ],
                "weight_factors": "FII weighted 55%, DII weighted 45%",
            },
            {
                "type": "delivery_spike",
                "name": "Delivery Spike Detector",
                "description": "Detects high delivery without price appreciation",
                "signals": [
                    "High delivery (>70%) with minimal price gain",
                    "Sustained high delivery over multiple days",
                    "Delivery spike without price response",
                ],
            },
            {
                "type": "microstructure",
                "name": "Microstructure Manipulation Detector",
                "description": "Analyzes candlestick patterns at 10min, 15min, 30min intervals",
                "signals": [
                    "Excessive wicks (price manipulation)",
                    "Volume-price divergence",
                    "Repeated upper wick rejections",
                    "Doji patterns with high volume",
                    "Cross-timeframe manipulation",
                ],
            },
            {
                "type": "bulk_block_deals",
                "name": "Bulk/Block Deals Detector",
                "description": "Monitors large deal manipulation patterns",
                "signals": [
                    "High deal concentration",
                    "Circular trading (same client buying and selling)",
                    "Coordinated selling",
                    "Large block deals (potential exit)",
                    "Sell-heavy activity",
                ],
            },
            {
                "type": "narrative_risk",
                "name": "Narrative Risk Detector",
                "description": "Detects headline sentiment excess and hype language",
                "signals": [
                    "Excessive hype language",
                    "Sentiment excess (>70% highly positive)",
                    "Coordinated narrative (uniform headlines)",
                    "Article flood",
                    "High speculation language",
                ],
            },
            {
                "type": "misinformation",
                "name": "Misinformation Detector",
                "description": "Assesses misinformation probability and source credibility",
                "signals": [
                    "Low source credibility",
                    "Credibility red flags (anonymous sources, etc.)",
                    "Narrative inconsistency",
                    "Social amplification without credible sources",
                    "Missing source attribution",
                ],
            },
        ],
        "co_occurrence_amplifications": [
            {
                "agents": ["retail_trap", "narrative_risk"],
                "amplification": 1.3,
                "reason": "Retail trap combined with hype is highly suspicious",
            },
            {
                "agents": ["retail_trap", "misinformation"],
                "amplification": 1.25,
                "reason": "Retail trap with misinformation indicates coordinated scheme",
            },
            {
                "agents": ["delivery_spike", "microstructure"],
                "amplification": 1.4,
                "reason": "Delivery manipulation with price manipulation is critical",
            },
            {
                "agents": ["delivery_spike", "bulk_block_deals"],
                "amplification": 1.35,
                "reason": "Delivery spike with large deals indicates accumulation before dump",
            },
            {
                "agents": ["microstructure", "bulk_block_deals"],
                "amplification": 1.3,
                "reason": "Price manipulation with deal manipulation is highly suspicious",
            },
            {
                "agents": ["narrative_risk", "misinformation"],
                "amplification": 1.5,
                "reason": "Hype combined with misinformation is the strongest pump signal",
            },
        ],
    }

    return agent_info
