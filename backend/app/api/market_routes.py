from fastapi import APIRouter, HTTPException, Query
from app.models.models import (
    OHLCVResponse,
    OHLCVData,
    DeliveryResponse,
    DeliveryData,
    BulkDeal,
    BlockDeal,
    MarketData,
)
from app.scraping.data_fetcher import MarketDataFetcher
from typing import List, Optional
import pandas as pd

router = APIRouter()


def convert_ohlcv_to_model(df: pd.DataFrame, symbol: str, period: str) -> OHLCVResponse:
    """Convert pandas DataFrame to OHLCVResponse model"""
    data_list = []
    for idx, row in df.iterrows():
        data_list.append(
            OHLCVData(
                date=idx.strftime("%Y-%m-%d"),
                open=float(row["Open"]),
                high=float(row["High"]),
                low=float(row["Low"]),
                close=float(row["Close"]),
                volume=int(row["Volume"]),
                price_change_pct=(
                    float(row["Price_Change_Pct"])
                    if pd.notna(row.get("Price_Change_Pct"))
                    else None
                ),
                volume_ma_20=(
                    float(row["Volume_MA_20"])
                    if pd.notna(row.get("Volume_MA_20"))
                    else None
                ),
                volume_ratio=(
                    float(row["Volume_Ratio"])
                    if pd.notna(row.get("Volume_Ratio"))
                    else None
                ),
                body=float(row["Body"]) if pd.notna(row.get("Body")) else None,
                upper_wick=(
                    float(row["Upper_Wick"])
                    if pd.notna(row.get("Upper_Wick"))
                    else None
                ),
                lower_wick=(
                    float(row["Lower_Wick"])
                    if pd.notna(row.get("Lower_Wick"))
                    else None
                ),
                wick_body_ratio=(
                    float(row["Wick_Body_Ratio"])
                    if pd.notna(row.get("Wick_Body_Ratio"))
                    else None
                ),
            )
        )
    return OHLCVResponse(symbol=symbol, data=data_list, period=period)


def convert_delivery_to_model(df: pd.DataFrame, symbol: str) -> DeliveryResponse:
    """Convert pandas DataFrame to DeliveryResponse model"""
    data_list = []
    for _, row in df.iterrows():
        data_list.append(
            DeliveryData(
                date=row["Date"].strftime("%Y-%m-%d"),
                close=float(row["Close"]) if pd.notna(row.get("Close")) else None,
                volume=int(row["Volume"]) if pd.notna(row.get("Volume")) else None,
                delivery_qty=(
                    int(row["Delivery_Qty"])
                    if pd.notna(row.get("Delivery_Qty"))
                    else None
                ),
                delivery_pct=(
                    float(row["Delivery_Pct"])
                    if pd.notna(row.get("Delivery_Pct"))
                    else None
                ),
            )
        )
    return DeliveryResponse(symbol=symbol, data=data_list)


def convert_bulk_deals_to_model(df: pd.DataFrame) -> List[BulkDeal]:
    """Convert pandas DataFrame to list of BulkDeal models"""
    deals = []
    for _, row in df.iterrows():
        deals.append(
            BulkDeal(
                symbol=str(row.get("SYMBOL", "")),
                client_name=str(row.get("CLIENT NAME", "")),
                buy_sell=str(row.get("BUY/SELL", "")),
                quantity=int(row.get("QUANTITY", 0)),
                price=float(row.get("TRADE PRICE", 0)),
                date=str(row.get("Date", "")),
            )
        )
    return deals


def convert_block_deals_to_model(df: pd.DataFrame) -> List[BlockDeal]:
    """Convert pandas DataFrame to list of BlockDeal models"""
    deals = []
    for _, row in df.iterrows():
        deals.append(
            BlockDeal(
                symbol=str(row.get("SYMBOL", "")),
                client_name=str(row.get("CLIENT NAME", "")),
                buy_sell=str(row.get("BUY/SELL", "")),
                quantity=int(row.get("QUANTITY", 0)),
                price=float(row.get("TRADE PRICE", 0)),
                date=str(row.get("Date", "")),
            )
        )
    return deals


@router.get("/market/ohlcv/{symbol}", response_model=OHLCVResponse)
def get_ohlcv_data(
    symbol: str,
    period: str = Query(
        default="3mo",
        description="Period: 1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max",
    ),
):
    """
    Fetch OHLCV (Open, High, Low, Close, Volume) data with technical indicators.

    Args:
        symbol: NSE stock symbol (e.g., 'RELIANCE', 'TCS')
        period: Time period for historical data (default: 3mo)

    Returns:
        OHLCVResponse with price data and technical indicators including:
        - Price change percentage
        - 20-day volume moving average
        - Volume ratio
        - Candle body and wick metrics
    """
    try:
        fetcher = MarketDataFetcher()
        df = fetcher.get_ohlcv_data(symbol, period)

        if df is None or df.empty:
            raise HTTPException(
                status_code=404, detail=f"No OHLCV data found for {symbol}"
            )

        return convert_ohlcv_to_model(df, symbol, period)
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Error fetching OHLCV data: {str(e)}"
        )


@router.get("/market/delivery/{symbol}", response_model=DeliveryResponse)
def get_delivery_data(
    symbol: str,
    days: int = Query(
        default=30, ge=1, le=90, description="Number of days of delivery data to fetch"
    ),
):
    """
    Fetch delivery percentage data from NSE Bhavcopy.

    Args:
        symbol: NSE stock symbol (e.g., 'RELIANCE', 'TCS')
        days: Number of days to fetch (1-90, default: 30)

    Returns:
        DeliveryResponse with daily delivery data including:
        - Closing price
        - Total volume
        - Delivery quantity
        - Delivery percentage
    """
    try:
        fetcher = MarketDataFetcher()
        df = fetcher.get_delivery_data(symbol, days)

        if df is None or df.empty:
            raise HTTPException(
                status_code=404, detail=f"No delivery data found for {symbol}"
            )

        return convert_delivery_to_model(df, symbol)
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Error fetching delivery data: {str(e)}"
        )


@router.get("/market/bulk-deals/{symbol}", response_model=List[BulkDeal])
def get_bulk_deals(symbol: str):
    """
    Fetch recent bulk deals from NSE.

    Args:
        symbol: NSE stock symbol (e.g., 'RELIANCE', 'TCS')

    Returns:
        List of BulkDeal objects with client name, buy/sell, quantity, and price
    """
    try:
        fetcher = MarketDataFetcher()
        df = fetcher.get_bulk_deals(symbol)

        if df is None or df.empty:
            return []  # Return empty list instead of 404 for no deals

        return convert_bulk_deals_to_model(df)
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Error fetching bulk deals: {str(e)}"
        )


@router.get("/market/block-deals/{symbol}", response_model=List[BlockDeal])
def get_block_deals(symbol: str):
    """
    Fetch recent block deals from NSE.

    Args:
        symbol: NSE stock symbol (e.g., 'RELIANCE', 'TCS')

    Returns:
        List of BlockDeal objects with client name, buy/sell, quantity, and price
    """
    try:
        fetcher = MarketDataFetcher()
        df = fetcher.get_block_deals(symbol)

        if df is None or df.empty:
            return []  # Return empty list instead of 404 for no deals

        return convert_block_deals_to_model(df)
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Error fetching block deals: {str(e)}"
        )


@router.get("/market/all/{symbol}", response_model=MarketData)
def get_all_market_data(
    symbol: str,
    period: str = Query(default="3mo", description="OHLCV period"),
    delivery_days: int = Query(
        default=30, ge=1, le=90, description="Delivery data days"
    ),
):
    """
    Fetch all market data for a symbol in one request.

    Args:
        symbol: NSE stock symbol (e.g., 'RELIANCE', 'TCS')
        period: OHLCV time period (default: 3mo)
        delivery_days: Number of days of delivery data (default: 30)

    Returns:
        MarketData object containing OHLCV, delivery, bulk deals, and block deals
    """
    try:
        fetcher = MarketDataFetcher()
        data = fetcher.fetch_all_data(symbol)

        # Convert to models
        ohlcv_list = None
        delivery_list = None
        bulk_deals_list = None
        block_deals_list = None

        if data["ohlcv"] is not None and not data["ohlcv"].empty:
            ohlcv_response = convert_ohlcv_to_model(data["ohlcv"], symbol, period)
            ohlcv_list = ohlcv_response.data

        if data["delivery"] is not None and not data["delivery"].empty:
            delivery_response = convert_delivery_to_model(data["delivery"], symbol)
            delivery_list = delivery_response.data

        if data["bulk_deals"] is not None and not data["bulk_deals"].empty:
            bulk_deals_list = convert_bulk_deals_to_model(data["bulk_deals"])

        if data["block_deals"] is not None and not data["block_deals"].empty:
            block_deals_list = convert_block_deals_to_model(data["block_deals"])

        return MarketData(
            symbol=symbol,
            ohlcv=ohlcv_list,
            delivery=delivery_list,
            bulk_deals=bulk_deals_list,
            block_deals=block_deals_list,
        )
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Error fetching market data: {str(e)}"
        )
