"""
AI-Enhanced Multi-Agent Risk Analysis API
=========================================

OnDemand-powered intelligent risk analysis endpoints
"""

from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from datetime import datetime

from app.ai.ai_enhanced_risk_system import (
    AIEnhancedRiskSystem,
    AIEnhancedRiskAssessment,
    get_ai_enhanced_system,
)
from app.scraping.shareholding_scraper import shareholding_scraper
from app.scraping.data_fetcher import MarketDataFetcher
from app.scraping.news_scraping import google_news_scraper, yahoo_news_scraper

# Import helper functions from multi_agent_analysis
from app.api.multi_agent_analysis import fetch_ohlcv_multi_timeframe, fetch_price_data

router = APIRouter(prefix="/api/ai-enhanced", tags=["AI-Enhanced Risk Analysis"])


# ============================================================================
# RESPONSE MODELS
# ============================================================================


class AIEnhancedAnalysisResponse(BaseModel):
    """AI-enhanced analysis response"""

    # Identification
    symbol: str
    timestamp: str

    # Scores
    base_risk_score: float
    ai_manipulation_score: float
    final_risk_score: float

    # Risk levels
    base_risk_level: str
    final_risk_level: str

    # AI insights
    manipulation_type: str
    key_red_flags: List[str]
    ai_reasoning: str
    recommended_action: str

    # Predictions
    predicted_outcome: str
    prediction_confidence: float
    timeline_days: int
    monitoring_points: List[str]

    # Explanations
    ai_explanation: str
    base_explanation: str

    # Agent data
    agent_signals: List[Dict[str, Any]]
    agent_contributions: Dict[str, float]
    co_occurrence_amplifications: List[Dict[str, Any]]

    # Sentiment
    news_sentiment: List[Dict[str, Any]]

    # Metadata
    ai_enhanced: bool
    ai_weight: float
    ai_confidence: float
    data_sources_used: List[str]


# ============================================================================
# API ENDPOINTS
# ============================================================================


@router.get("/analyze/{symbol}", response_model=AIEnhancedAnalysisResponse)
async def ai_enhanced_analysis(
    symbol: str,
    use_ai: bool = Query(True, description="Enable AI enhancement via OnDemand"),
    ai_weight: float = Query(0.3, description="Weight of AI score (0-1)", ge=0, le=1),
    enable_predictions: bool = Query(True, description="Enable outcome predictions"),
    enable_sentiment: bool = Query(True, description="Enable AI sentiment analysis"),
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
    🤖 AI-Enhanced Multi-Agent Risk Analysis

    This endpoint combines traditional multi-agent analysis with OnDemand AI for:
    - **LLM-powered manipulation detection**: Advanced pattern recognition
    - **Intelligent sentiment analysis**: FinBERT-style analysis of news
    - **Predictive analytics**: Outcome predictions with confidence scores
    - **Natural language explanations**: Clear, actionable insights

    **How it works:**
    1. Runs all 6 traditional agents (Retail Trap, Delivery, Microstructure, etc.)
    2. Sends data to OnDemand LLM for advanced analysis
    3. Combines base score with AI score using weighted formula
    4. Generates predictions and actionable recommendations

    **Parameters:**
    - `use_ai`: Enable/disable AI enhancement (default: True)
    - `ai_weight`: How much to trust AI vs traditional agents (0-1, default: 0.3)
    - `enable_predictions`: Get outcome predictions (default: True)
    - `enable_sentiment`: AI sentiment analysis of news (default: True)

    **Returns:**
    - Base risk score from traditional agents
    - AI manipulation score from OnDemand LLM
    - Final combined risk score
    - Predicted outcome with timeline
    - Detailed explanations and recommendations
    """

    try:
        # Initialize AI-enhanced system
        system = AIEnhancedRiskSystem(
            use_ai_enhancement=use_ai,
            ai_weight=ai_weight,
            enable_predictions=enable_predictions,
            enable_sentiment=enable_sentiment,
        )

        data_sources_used = []

        # Collect data for each agent
        shareholding_data = None
        delivery_data = None
        price_data = None
        ohlcv_data = None
        bulk_deals = None
        block_deals = None
        news_articles = None
        historical_data = None

        # Agent 1: Shareholding data
        if include_shareholding:
            try:
                shareholding = shareholding_scraper(symbol)
                if shareholding:
                    shareholding_data = shareholding.dict()
                    data_sources_used.append("Shareholding Pattern")
            except Exception as e:
                print(f"Shareholding scraping failed: {e}")

        # Initialize market data fetcher
        fetcher = MarketDataFetcher()

        # Agent 2: Delivery data
        if include_delivery:
            try:
                delivery_df = fetcher.get_delivery_data(symbol)
                if delivery_df is not None and not delivery_df.empty:
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
                google_news = google_news_scraper(symbol, symbol)
                yahoo_news = yahoo_news_scraper(symbol)

                all_news = google_news + yahoo_news
                unique_news = {article.url: article for article in all_news}

                if unique_news:
                    news_articles = [article.dict() for article in unique_news.values()]
                    data_sources_used.append("News Articles")
            except Exception as e:
                print(f"News scraping failed: {e}")

        # Prepare historical data for predictions
        if enable_predictions and price_data:
            historical_data = {
                "price_history": price_data[-30:],  # Last 30 days
                "delivery_history": delivery_data[-30:] if delivery_data else [],
            }

        # Run AI-enhanced analysis
        assessment = await system.analyze_with_ai(
            symbol=symbol,
            shareholding_data=shareholding_data,
            delivery_data=delivery_data,
            price_data=price_data,
            ohlcv_data=ohlcv_data,
            bulk_deals=bulk_deals,
            block_deals=block_deals,
            news_articles=news_articles,
            social_posts=None,
            historical_data=historical_data,
            include_shareholding=include_shareholding,
            include_delivery=include_delivery,
            include_microstructure=include_microstructure,
            include_deals=include_deals,
            include_news=include_news,
        )

        # Convert to response format
        response_dict = system.to_dict(assessment)
        response_dict["data_sources_used"] = data_sources_used

        return AIEnhancedAnalysisResponse(**response_dict)

    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"AI-enhanced analysis failed: {str(e)}"
        )


@router.get("/quick-scan/{symbol}")
async def quick_ai_scan(symbol: str):
    """
    ⚡ Quick AI Scan

    Fast AI-powered risk assessment using only news and sentiment analysis.
    Perfect for quick checks without heavy data fetching.

    **Use case:** Quick screening of multiple stocks

    **Returns:**
    - AI manipulation score
    - Key red flags
    - Recommended action
    - Sentiment analysis
    """

    try:
        system = AIEnhancedRiskSystem(
            use_ai_enhancement=True,
            ai_weight=0.5,
            enable_predictions=False,
            enable_sentiment=True,
        )

        # Fetch only news
        try:
            google_news = google_news_scraper(symbol, symbol)
            yahoo_news = yahoo_news_scraper(symbol)

            all_news = google_news + yahoo_news
            unique_news = {article.url: article for article in all_news}
            news_articles = [article.dict() for article in unique_news.values()]
        except:
            news_articles = []

        if not news_articles:
            return {
                "symbol": symbol,
                "status": "insufficient_data",
                "message": "No news articles found for analysis",
                "ai_manipulation_score": 0,
                "recommended_action": "Gather more data for comprehensive analysis",
            }

        # Run lightweight analysis
        assessment = await system.analyze_with_ai(
            symbol=symbol,
            news_articles=news_articles,
            include_shareholding=False,
            include_delivery=False,
            include_microstructure=False,
            include_deals=False,
            include_news=True,
        )

        return {
            "symbol": symbol,
            "timestamp": assessment.timestamp.isoformat(),
            "ai_manipulation_score": assessment.llm_manipulation_score,
            "ai_confidence": assessment.llm_confidence,
            "manipulation_type": assessment.manipulation_type,
            "key_red_flags": assessment.key_red_flags,
            "recommended_action": assessment.recommended_action,
            "news_sentiment": assessment.news_sentiment_scores,
            "risk_level": assessment.final_risk_level.value,
            "news_count": len(news_articles),
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Quick scan failed: {str(e)}")


@router.post("/batch-analyze")
async def batch_ai_analysis(
    symbols: List[str] = Query(..., description="List of stock symbols to analyze"),
    quick_mode: bool = Query(True, description="Use quick scan mode"),
):
    """
    📊 Batch AI Analysis

    Analyze multiple stocks in parallel using AI.

    **Parameters:**
    - `symbols`: List of stock symbols (max 10)
    - `quick_mode`: Use quick scan (news only) or full analysis

    **Returns:**
    List of AI risk assessments for each stock
    """

    if len(symbols) > 10:
        raise HTTPException(
            status_code=400, detail="Maximum 10 symbols allowed per batch"
        )

    results = []

    for symbol in symbols:
        try:
            if quick_mode:
                result = await quick_ai_scan(symbol)
            else:
                result = await ai_enhanced_analysis(symbol)

            results.append({"symbol": symbol, "status": "success", "data": result})
        except Exception as e:
            results.append({"symbol": symbol, "status": "error", "error": str(e)})

    return {
        "batch_size": len(symbols),
        "successful": sum(1 for r in results if r["status"] == "success"),
        "failed": sum(1 for r in results if r["status"] == "error"),
        "results": results,
    }


@router.get("/health")
async def ai_health_check():
    """
    🏥 AI System Health Check

    Check if OnDemand AI integration is working
    """

    try:
        from app.ai.ondemand_client import get_ondemand_client

        client = get_ondemand_client()

        # Try a simple test
        test_response = await client.chat_completion(
            messages=[{"role": "user", "content": "Reply with 'OK' if you're working"}],
            max_tokens=10,
        )

        return {
            "status": "healthy",
            "ondemand_connected": True,
            "api_key_configured": bool(client.api_key),
            "test_response": test_response.get("choices", [{}])[0]
            .get("message", {})
            .get("content", ""),
            "timestamp": datetime.now().isoformat(),
        }

    except Exception as e:
        return {
            "status": "unhealthy",
            "ondemand_connected": False,
            "error": str(e),
            "timestamp": datetime.now().isoformat(),
        }
