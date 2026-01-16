from fastapi import APIRouter, HTTPException, Query
from app.models.models import TelegramPost
from app.scraping.telegram_scraper import get_telegram_posts_for_stock
from typing import List

router = APIRouter()


@router.get("/telegram/{stock}", response_model=List[TelegramPost])
def get_telegram_posts(
    stock: str,
    channels: List[str] = Query(
        default=["powerofpennystock", "pennystockr", "stocktipsofficial"],
        description="List of Telegram channel usernames to scrape",
    ),
    limit_per_channel: int = Query(
        default=50, ge=1, le=200, description="Number of messages to fetch per channel"
    ),
):
    """
    Fetch Telegram posts mentioning a specific stock from specified channels.

    Args:
        stock: Stock symbol to search for (e.g., 'FCONSUMER', 'TATAPOWER')
        channels: List of Telegram channel usernames (default: popular penny stock channels)
        limit_per_channel: Number of messages to fetch per channel (1-200, default: 50)

    Returns:
        List of TelegramPost objects containing messages that mention the stock

    Note:
        Requires TELEGRAM_API_ID and TELEGRAM_API_HASH environment variables to be set
    """
    try:
        posts = get_telegram_posts_for_stock(channels, stock, limit_per_channel)
        return posts
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error fetching Telegram posts: {str(e)}. Ensure TELEGRAM_API_ID and TELEGRAM_API_HASH are set.",
        )
