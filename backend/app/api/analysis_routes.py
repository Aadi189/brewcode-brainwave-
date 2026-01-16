from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from datetime import datetime

from app.models.models import (
    CompleteAnalysis,
    StockInfo,
    Shareholding,
    NewsArticle,
    MarketData,
    Pattern,
    RiskReport,
)

from app.scraping.stock_info import stock_info
from app.scraping.shareholding_scraper import shareholding_scraper
from app.scraping.news_scraping import google_news_scraper, yahoo_news_scraper

# from app.scraping.telegram_scraper import get_telegram_posts_for_stock  # Disabled
from app.scraping.data_fetcher import MarketDataFetcher
from app.scraping.pattern_detector import PatternDetector
from app.scraping.risk_analyzer import RiskAnalyzer

router = APIRouter()


@router.get("/complete/{symbol}", response_model=CompleteAnalysis)
def get_complete_analysis(
    symbol: str,
    company: str = Query(..., description="Company name for news search"),
    ohlcv_period: str = Query(default="3mo", description="OHLCV period"),
    delivery_days: int = Query(
        default=30, ge=1, le=90, description="Delivery data days"
    ),
):
    """
    Get complete analysis for a stock including all data sources and risk assessment.
    """
    result = {
        "symbol": symbol,
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "stock_info": None,
        "shareholding": None,
        "news": None,
        "telegram_posts": None,
        "market_data": None,
        "patterns": None,
        "risk_report": None,
    }

    errors = []

    # 1. Stock info
    try:
        result["stock_info"] = stock_info(symbol)
    except Exception as e:
        errors.append(f"Stock info error: {str(e)}")

    # 2. Shareholding
    try:
        result["shareholding"] = shareholding_scraper(symbol)
    except Exception as e:
        errors.append(f"Shareholding error: {str(e)}")

    # 3. News
    try:
        yahoo_news = yahoo_news_scraper(symbol)
        google_news = google_news_scraper(company, symbol)
        unique_news = {article.url: article for article in yahoo_news + google_news}
        result["news"] = list(unique_news.values())
    except Exception as e:
        errors.append(f"News error: {str(e)}")

    # 4. Market data
    try:
        fetcher = MarketDataFetcher()
        data = fetcher.fetch_all_data(symbol)

        from app.api.market_routes import (
            convert_ohlcv_to_model,
            convert_delivery_to_model,
            convert_bulk_deals_to_model,
            convert_block_deals_to_model,
        )

        ohlcv_list = None
        delivery_list = None
        bulk_deals_list = None
        block_deals_list = None

        if data["ohlcv"] is not None and not data["ohlcv"].empty:
            ohlcv_response = convert_ohlcv_to_model(data["ohlcv"], symbol, ohlcv_period)
            ohlcv_list = ohlcv_response.data

        if data["delivery"] is not None and not data["delivery"].empty:
            delivery_response = convert_delivery_to_model(data["delivery"], symbol)
            delivery_list = delivery_response.data

        if data["bulk_deals"] is not None and not data["bulk_deals"].empty:
            bulk_deals_list = convert_bulk_deals_to_model(data["bulk_deals"])

        if data["block_deals"] is not None and not data["block_deals"].empty:
            block_deals_list = convert_block_deals_to_model(data["block_deals"])

        result["market_data"] = MarketData(
            symbol=symbol,
            ohlcv=ohlcv_list,
            delivery=delivery_list,
            bulk_deals=bulk_deals_list,
            block_deals=block_deals_list,
        )

        # 5. Pattern detection
        try:
            detector = PatternDetector()
            patterns = detector.detect_all_patterns(data)

            pattern_models = [
                Pattern(
                    pattern=p["pattern"],
                    severity=p["severity"],
                    detail=p["detail"],
                    score=p["score"],
                )
                for p in patterns
            ]
            result["patterns"] = pattern_models

            # 6. Risk analysis
            try:
                analyzer = RiskAnalyzer()
                report = analyzer.generate_report(symbol, data, patterns)

                result["risk_report"] = RiskReport(
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
                errors.append(f"Risk analysis error: {str(e)}")

        except Exception as e:
            errors.append(f"Pattern detection error: {str(e)}")

    except Exception as e:
        errors.append(f"Market data error: {str(e)}")

    if errors:
        print(f"Warnings during analysis: {errors}")

    return CompleteAnalysis(**result)


@router.get("/quick/{symbol}")
def get_quick_analysis(symbol: str, company: str):
    """Quick lightweight analysis."""
    try:
        stock_data = stock_info(symbol)
        google_news = google_news_scraper(company, symbol)
        yahoo_news = yahoo_news_scraper(symbol)
        return {
            "stock_info": stock_data,
            "google_news": google_news,
            "yahoo_news": yahoo_news,
        }
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Error in quick analysis: {str(e)}"
        )


@router.get("/diagnose/{company}/{ticker}")
def diagnose(company: str, ticker: str):
    """Diagnostic endpoint to debug scraping issues."""
    from app.scraping.news_scraping import diagnose_network_issues

    return diagnose_network_issues(company, ticker)
