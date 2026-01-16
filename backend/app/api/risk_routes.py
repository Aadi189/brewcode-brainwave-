from fastapi import APIRouter, HTTPException, Query
from app.models.models import RiskReport, Pattern
from app.scraping.data_fetcher import MarketDataFetcher
from app.scraping.pattern_detector import PatternDetector
from app.scraping.risk_analyzer import RiskAnalyzer

router = APIRouter()


@router.get("/risk/{symbol}", response_model=RiskReport)
def analyze_risk(
    symbol: str,
    period: str = Query(default="3mo", description="OHLCV period for analysis"),
    delivery_days: int = Query(
        default=30, ge=1, le=90, description="Delivery data days"
    ),
):
    """
    Generate comprehensive risk analysis report for a stock.

    This endpoint performs a complete market manipulation risk analysis by:
    1. Fetching all relevant market data (OHLCV, delivery, bulk/block deals)
    2. Detecting manipulation patterns
    3. Calculating a unified risk score (0-10)
    4. Generating AI-powered explanation and recommendations

    Risk Levels:
    - LOW (0-3): Minor patterns, likely normal market behavior
    - MEDIUM (3-6): Some concerning patterns detected
    - HIGH (6-8): Significant manipulation patterns identified
    - CRITICAL (8-10): Multiple strong manipulation signals

    Args:
        symbol: NSE stock symbol (e.g., 'RELIANCE', 'TCS')
        period: OHLCV time period for analysis (default: 3mo)
        delivery_days: Number of days of delivery data to analyze (default: 30)

    Returns:
        RiskReport containing:
        - Overall risk score and level
        - Latest price and market data
        - All detected patterns with details
        - AI-generated explanation and recommendations
    """
    try:
        # Fetch market data
        fetcher = MarketDataFetcher()
        data = fetcher.fetch_all_data(symbol)

        # Detect patterns
        detector = PatternDetector()
        patterns = detector.detect_all_patterns(data)

        # Generate risk report
        analyzer = RiskAnalyzer()
        report = analyzer.generate_report(symbol, data, patterns)

        # Convert patterns to Pattern models
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

        # Create RiskReport model
        return RiskReport(
            symbol=report["symbol"],
            timestamp=report["timestamp"],
            risk_score=report["risk_score"],
            risk_level=report["risk_level"],
            latest_price=report["latest_price"],
            price_change_pct=report["price_change_pct"],
            volume=report["volume"],
            delivery_pct=report["delivery_pct"],
            patterns_detected=report["patterns_detected"],
            patterns=pattern_models,
            explanation=report["explanation"],
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error analyzing risk: {str(e)}")
