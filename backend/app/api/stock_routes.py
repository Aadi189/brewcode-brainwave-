from fastapi import APIRouter, HTTPException
from app.models.models import StockInfo
from app.scraping.stock_info import stock_info

router = APIRouter()


@router.get("/stock/{ticker}", response_model=StockInfo)
def get_stock_info(ticker: str):
    """
    Fetch real-time stock information from Yahoo Finance.

    Args:
        ticker: Stock ticker symbol (e.g., 'RELIANCE', 'TCS')
                Automatically appends .NS suffix for NSE stocks

    Returns:
        StockInfo with current price, volume, volume spike detection, and 2-hour price change
    """
    try:
        stock_data = stock_info(ticker)
        return stock_data
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Error fetching stock info: {str(e)}"
        )
