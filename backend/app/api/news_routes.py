from fastapi import APIRouter, HTTPException
from app.models.models import NewsResponse, NewsArticle
from app.scraping.news_scraping import google_news_scraper, yahoo_news_scraper
from typing import List

router = APIRouter()


@router.get("/news/yahoo/{ticker}", response_model=NewsResponse)
def get_yahoo_news(ticker: str):
    """
    Fetch news articles from Yahoo Finance RSS feed for a specific ticker.

    Args:
        ticker: Stock ticker symbol (e.g., 'RELIANCE', 'TCS')

    Returns:
        NewsResponse containing list of news articles
    """
    try:
        articles = yahoo_news_scraper(ticker)
        return NewsResponse(articles=articles)
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Error fetching Yahoo news: {str(e)}"
        )


@router.get("/news/google/{company}/{ticker}", response_model=NewsResponse)
def get_google_news(company: str, ticker: str):
    """
    Fetch news articles from Google News for a specific company/ticker.

    Args:
        company: Company name (e.g., 'Reliance Industries', 'Tata Motors')
        ticker: Stock ticker symbol (e.g., 'RELIANCE', 'TATAMOTORS')

    Returns:
        NewsResponse containing list of deduplicated news articles
    """
    try:
        articles = google_news_scraper(company, ticker)
        return NewsResponse(articles=articles)
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Error fetching Google news: {str(e)}"
        )


@router.get("/news/all/{company}/{ticker}", response_model=NewsResponse)
def get_all_news(company: str, ticker: str):
    """
    Fetch news from both Yahoo Finance and Google News, deduplicated.

    Args:
        company: Company name (e.g., 'Reliance Industries')
        ticker: Stock ticker symbol (e.g., 'RELIANCE')

    Returns:
        NewsResponse containing combined and deduplicated news articles
    """
    try:
        yahoo_articles = yahoo_news_scraper(ticker)
        google_articles = google_news_scraper(company, ticker)

        # Combine and deduplicate by URL
        all_articles = yahoo_articles + google_articles
        unique_articles = {article.url: article for article in all_articles}

        return NewsResponse(articles=list(unique_articles.values()))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching news: {str(e)}")
