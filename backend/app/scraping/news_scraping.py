from pydantic import BaseModel
from bs4 import BeautifulSoup
import requests
import feedparser
import urllib.parse
from app.models.models import NewsArticle, NewsResponse


def yahoo_news_scraper(ticker: str) -> list[NewsArticle]:
    url = f"https://feeds.finance.yahoo.com/rss/2.0/headline?s={ticker}"

    headers = {"User-Agent": "Mozilla/5.0"}

    try:
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()

        soup = BeautifulSoup(response.content, "xml")

        items = []
        for item in soup.find_all("item"):
            article = NewsArticle(
                headline=item.title.text,
                url=item.link.text,
                source="Yahoo Finance",
                published=item.pubDate.text if item.pubDate else None,
                summary=None,
            )
            items.append(article)

        return items

    except Exception as e:
        print("Yahoo error:", e)
        return []


def google_news_scraper(company: str, ticker: str) -> list[NewsArticle]:
    queries = [company, f"{company} stock", f"{ticker} stock"]

    articles = []

    for q in queries:
        q_encoded = urllib.parse.quote_plus(q)
        url = f"https://news.google.com/rss/search?q={q_encoded}"

        feed = feedparser.parse(url)

        for entry in feed.entries:
            article = NewsArticle(
                headline=entry.title,
                url=entry.link,
                published=getattr(entry, "published", None),
                summary=getattr(entry, "summary", None),
                source=entry.source.title if "source" in entry else "Google News",
            )
            articles.append(article)

    # Deduplicate based on URL
    unique = {a.url: a for a in articles}
    return list(unique.values())
