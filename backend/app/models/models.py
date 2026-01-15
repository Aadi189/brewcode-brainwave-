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


class TelegramPost(BaseModel):
    text: str
    date: str
    sender_id: int | None = None
    views: int | None = None
    forwards: int | None = None
    channel: str


class StockInfo(BaseModel):
    ticker: str
    current_price: float
    previous_close: float
    change_percent: float
    volume: int
    average_volume: float
    volume_spike: bool
    price_change_last_2h: float


class Shareholding(BaseModel):
    promoter: float
    fii: float
    dii: float
    retail: float
    mf: float
    pledge: float
    promoter_change: Optional[float]
    fii_change: Optional[float]
    dii_change: Optional[float]
    retail_change: Optional[float]
    mf_change: Optional[float]
