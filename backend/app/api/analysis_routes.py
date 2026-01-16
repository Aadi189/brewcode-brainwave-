from fastapi import APIRouter
from app.models.models import StockInfo, NewsArticle, NewsResponse
from app.scraping.stock_info import stock_info
from app.scraping.news_scraping import google_news_scraper, yahoo_news_scraper

router = APIRouter()


@router.get("/analysis/{company}/{ticker}")
def get_info(company: str, ticker: str):
    stock_data = stock_info(ticker)
    # reddit_posts = reddit_scraper(company)
    google_news = google_news_scraper(company, ticker)
    yahoo_news = yahoo_news_scraper(ticker)
    return {
        "stock_info": stock_data,
        # "reddit_posts": reddit_posts,
        "google_news": google_news,
        "yahoo_news": yahoo_news,
    }

@router.get("/diagnose/{company}/{ticker}")
def diagnose(company: str, ticker: str):
    """Diagnostic endpoint to debug scraping issues"""
    from app.scraping.news_scraping import diagnose_network_issues
    return diagnose_network_issues(company, ticker)