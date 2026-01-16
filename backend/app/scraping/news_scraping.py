from pydantic import BaseModel
from bs4 import BeautifulSoup
import requests
import feedparser
import urllib.parse
from app.models.models import NewsArticle, NewsResponse
import logging
import time
import ssl
import certifi

logger = logging.getLogger(__name__)


def google_news_scraper(company: str, ticker: str) -> list[NewsArticle]:
    """
    Google News scraper with SSL certificate handling
    """
    queries = [company, f"{company} stock", f"{ticker} stock"]
    articles = []

    # Create SSL context that uses certifi certificates
    try:
        ssl_context = ssl.create_default_context(cafile=certifi.where())
    except Exception as e:
        logger.warning(f"Could not create SSL context with certifi: {e}")
        ssl_context = None

    for q in queries:
        q_encoded = urllib.parse.quote_plus(q)
        url = (
            "https://news.google.com/rss/search"
            f"?q={q_encoded}&hl=en-IN&gl=IN&ceid=IN:en"
        )

        try:
            logger.info(f"Fetching Google News for query: {q}")
            
            # Method 1: Try with requests (uses certifi automatically if installed)
            try:
                response = requests.get(
                    url,
                    headers={
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
                    },
                    timeout=10,
                    verify=True  # Use system certificates
                )
                
                if response.status_code == 200:
                    feed = feedparser.parse(response.content)
                else:
                    logger.warning(f"Got status code {response.status_code} from Google News")
                    feed = feedparser.parse(url)
                    
            except requests.exceptions.SSLError as ssl_err:
                logger.warning(f"SSL error with requests, trying feedparser with custom context: {ssl_err}")
                # Method 2: Try feedparser with custom headers
                feed = feedparser.parse(
                    url,
                    request_headers={
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
                    }
                )
            
            logger.info(f"Found {len(feed.entries)} entries for query: {q}")

            for entry in feed.entries:
                try:
                    article = NewsArticle(
                        headline=entry.title,
                        url=entry.link,
                        published=getattr(entry, "published", None),
                        summary=getattr(entry, "summary", None),
                        source=entry.source.title if hasattr(entry, "source") else "Google News",
                    )
                    articles.append(article)
                except Exception as e:
                    logger.error(f"Error processing entry: {e}")
                    continue

        except Exception as e:
            logger.error(f"Error fetching Google News for query '{q}': {e}")
            continue
        
        # Small delay to avoid rate limiting
        time.sleep(0.5)

    # Deduplicate based on URL
    unique = {a.url: a for a in articles}
    logger.info(f"Total unique Google News articles: {len(unique)}")
    return list(unique.values())


def yahoo_news_scraper(ticker: str) -> list[NewsArticle]:
    """
    Yahoo Finance scraper with rate limit handling and retry logic
    """
    # Try different ticker formats
    ticker_variants = [f"{ticker}.NS", f"{ticker}.BO", ticker]
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "application/rss+xml, application/xml, text/xml, */*",
        "Accept-Language": "en-US,en;q=0.9",
        "Cache-Control": "no-cache",
        "Pragma": "no-cache"
    }

    for variant in ticker_variants:
        url = f"https://feeds.finance.yahoo.com/rss/2.0/headline?s={variant}"
        
        # Retry logic with exponential backoff
        max_retries = 3
        base_delay = 2
        
        for attempt in range(max_retries):
            try:
                logger.info(f"Attempting Yahoo Finance for {variant} (attempt {attempt + 1}/{max_retries})")
                
                response = requests.get(
                    url, 
                    headers=headers, 
                    timeout=10,
                    verify=True
                )
                
                # Handle rate limiting
                if response.status_code == 429:
                    if attempt < max_retries - 1:
                        delay = base_delay * (2 ** attempt)  # Exponential backoff
                        logger.warning(f"Rate limited (429). Waiting {delay} seconds before retry...")
                        time.sleep(delay)
                        continue
                    else:
                        logger.error(f"Rate limited after {max_retries} attempts for {variant}")
                        break
                
                response.raise_for_status()
                
                # Parse the RSS feed
                soup = BeautifulSoup(response.content, "xml")
                items = soup.find_all("item")
                
                logger.info(f"Found {len(items)} items for {variant}")
                
                if items:  # Successfully got items, return them
                    articles = []
                    for item in items:
                        try:
                            article = NewsArticle(
                                headline=item.title.text if item.title else "No title",
                                url=item.link.text if item.link else "",
                                source="Yahoo Finance",
                                published=item.pubDate.text if item.pubDate else None,
                                summary=item.description.text if item.description else None,
                            )
                            articles.append(article)
                        except Exception as e:
                            logger.error(f"Error processing Yahoo item: {e}")
                            continue
                    
                    logger.info(f"Returning {len(articles)} Yahoo Finance articles")
                    return articles
                
                # If we got a response but no items, try next variant
                break
                
            except requests.exceptions.SSLError as ssl_err:
                logger.error(f"SSL error for Yahoo Finance {variant}: {ssl_err}")
                break
            except requests.exceptions.RequestException as e:
                logger.error(f"Request error for {variant}: {e}")
                if attempt < max_retries - 1:
                    time.sleep(base_delay)
                    continue
                break
            except Exception as e:
                logger.error(f"Error parsing Yahoo feed for {variant}: {e}")
                break
        
        # Small delay between ticker variants
        time.sleep(1)
    
    logger.warning("No Yahoo Finance results found")
    return []


def install_ssl_certificates():
    """
    Helper function to check and guide SSL certificate installation.
    Call this during app startup to provide helpful error messages.
    """
    try:
        import ssl
        import certifi
        
        # Test SSL connection
        context = ssl.create_default_context(cafile=certifi.where())
        logger.info(f"SSL certificates found at: {certifi.where()}")
        return True
        
    except ImportError:
        logger.error("""
        ⚠️  SSL CERTIFICATE ERROR ⚠️
        
        The 'certifi' package is not installed. Please run:
        pip install certifi
        
        On macOS, you may also need to run:
        /Applications/Python*/Install Certificates.command
        """)
        return False
    except Exception as e:
        logger.error(f"SSL configuration error: {e}")
        return False