from pydantic import BaseModel
from typing import Optional, List


class NewsArticle(BaseModel):
    headline: str
    url: str
    source: Optional[str] = None
    published: Optional[str] = None
    summary: Optional[str] = None


class NewsResponse(BaseModel):
    articles: List[NewsArticle]


class RedditPost(BaseModel):
    title: str
    url: str
    score: int
    comments: int
    created_at: str
    subreddit: str
    sentiment: float | None = None


class StockInfo(BaseModel):
    ticker: str
    current_price: float
    previous_close: float
    change_percent: float
    volume: int
    average_volume: float
    volume_spike: bool
    price_change_last_2h: float
