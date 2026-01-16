from fastapi import APIRouter, HTTPException
from app.models.models import Shareholding
from app.scraping.shareholding_scraper import shareholding_scraper

router = APIRouter()


@router.get("/shareholding/{symbol}", response_model=Shareholding)
def get_shareholding_pattern(symbol: str):
    """
    Fetch shareholding pattern from Screener.in for an Indian stock.

    Args:
        symbol: NSE stock symbol (e.g., 'TATAPOWER', 'RELIANCE', 'TCS')

    Returns:
        Shareholding data including promoter, FII, DII, retail, mutual fund holdings and pledge percentage
    """
    try:
        shareholding_data = shareholding_scraper(symbol)
        return shareholding_data
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Error fetching shareholding data: {str(e)}"
        )
