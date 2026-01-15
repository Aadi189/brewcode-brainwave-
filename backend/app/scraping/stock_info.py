import yfinance as yf
from app.models.models import StockInfo
from datetime import datetime, timedelta
import pytz


def stock_info(ticker: str) -> StockInfo:
    # Ensure NSE stocks get .NS suffix
    if not ticker.endswith(".NS") and len(ticker) > 3:
        ticker = ticker + ".NS"

    stock = yf.Ticker(ticker)

    # Fetch last 2 days of 1-min data
    data = stock.history(period="2d", interval="1m")

    if data.empty:
        raise ValueError(f"Ticker '{ticker}' not found or no data available")

    latest = data.iloc[-1]
    prev_close = stock.info.get("previousClose", latest["Close"])

    # FIX: timezone-aware cutoff
    india_tz = pytz.timezone("Asia/Kolkata")
    now = datetime.now(india_tz)
    cutoff = now - timedelta(hours=2)

    # Filter last 2 hours
    recent = data[data.index >= cutoff]

    if len(recent) > 1:
        price_2h_change = (
            (recent.iloc[-1]["Close"] - recent.iloc[0]["Close"])
            / recent.iloc[0]["Close"]
            * 100
        )
    else:
        price_2h_change = 0

    # Volume spike detection
    avg_vol = stock.info.get("averageVolume", 0) or 0
    vol = int(latest["Volume"] or 0)
    volume_spike = vol > (2.5 * avg_vol) if avg_vol else False

    return StockInfo(
        ticker=ticker,
        current_price=float(latest["Close"]),
        previous_close=float(prev_close),
        change_percent=float(((latest["Close"] - prev_close) / prev_close) * 100),
        volume=vol,
        average_volume=avg_vol,
        volume_spike=volume_spike,
        price_change_last_2h=price_2h_change,
    )
