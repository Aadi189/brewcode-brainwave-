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
