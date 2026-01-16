from fastapi import APIRouter, HTTPException, Query
from app.models.models import Pattern, PatternResponse
from app.scraping.data_fetcher import MarketDataFetcher
from app.scraping.pattern_detector import PatternDetector
from typing import List

router = APIRouter()


@router.get("/patterns/{symbol}", response_model=PatternResponse)
def detect_patterns(
    symbol: str,
    period: str = Query(default="3mo", description="OHLCV period for analysis"),
    delivery_days: int = Query(
        default=30, ge=1, le=90, description="Delivery data days"
    ),
):
    """
    Detect manipulation patterns in stock data.

    Analyzes multiple data sources to identify potential market manipulation patterns:
    - Volume anomalies (high volume without price movement)
    - Wick patterns (rejection/fake breakouts)
    - Delivery divergence (distribution/accumulation patterns)
    - Low delivery spikes (intraday manipulation)
    - Bulk/block deals (insider activity)
    - Price consolidation patterns

    Args:
        symbol: NSE stock symbol (e.g., 'RELIANCE', 'TCS')
        period: OHLCV time period for analysis (default: 3mo)
        delivery_days: Number of days of delivery data to analyze (default: 30)

    Returns:
        PatternResponse containing all detected patterns with severity levels and scores
    """
    try:
        # Fetch market data
        fetcher = MarketDataFetcher()
        data = fetcher.fetch_all_data(symbol)

        # Detect patterns
        detector = PatternDetector()
        patterns = detector.detect_all_patterns(data)

        # Convert to Pattern models
        pattern_models = []
        for p in patterns:
            pattern_models.append(
                Pattern(
                    pattern=p["pattern"],
                    severity=p["severity"],
                    detail=p["detail"],
                    score=p["score"],
                )
            )

        return PatternResponse(
            symbol=symbol, patterns=pattern_models, total_patterns=len(pattern_models)
        )
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Error detecting patterns: {str(e)}"
        )
