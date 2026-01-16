import os
import asyncio
from telethon import TelegramClient
from dotenv import load_dotenv
from app.models.models import TelegramPost

load_dotenv()

# Lazy initialization - only create client when actually needed
_client = None


def _get_client():
    """Get or create Telegram client with proper error handling."""
    global _client

    if _client is not None:
        return _client

    api_id = os.getenv("TELEGRAM_API_ID")
    api_hash = os.getenv("TELEGRAM_API_HASH")

    if not api_id or not api_hash:
        raise ValueError(
            "Telegram API credentials not found. "
            "Please set TELEGRAM_API_ID and TELEGRAM_API_HASH environment variables. "
            "Get them from https://my.telegram.org"
        )

    try:
        api_id = int(api_id)
    except ValueError:
        raise ValueError("TELEGRAM_API_ID must be a valid integer")

    _client = TelegramClient("pumpdetect_session", api_id, api_hash)
    return _client


async def fetch_telegram_messages(channel: str, stock: str, limit: int = 50):
    """
    Fetch recent Telegram messages from a public channel and filter for stock mentions.
    """
    await client.start()

    posts = []
    stock_upper = stock.upper()

    async for msg in client.iter_messages(channel, limit=limit):
        text = msg.message or ""
        if stock_upper in text.upper():  # filter for the stock
            posts.append(
                TelegramPost(
                    text=text,
                    date=msg.date.isoformat(),
                    sender_id=msg.sender_id,
                    views=msg.views,
                    forwards=msg.forwards,
                    channel=channel,
                )
            )

    return posts


def get_telegram_posts_for_stock(
    channels: list[str], stock: str, limit_per_channel: int = 50
):
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)

    all_posts = []
    for ch in channels:
        posts = loop.run_until_complete(
            fetch_telegram_messages(ch, stock, limit_per_channel)
        )
        all_posts.extend(posts)

    return all_posts


if __name__ == "__main__":
    channels = ["powerofpennystock", "pennystockr", "stocktipsofficial"]
    stock = "FCONSUMER"

    posts = get_telegram_posts_for_stock(channels, stock, 50)
    for p in posts:
        print(p.text, "\n")
