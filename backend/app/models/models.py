from pydantic import BaseModel, Field
from typing import Optional, List, Literal
from datetime import datetime


# ============================================================================
# NEWS & SOCIAL MEDIA MODELS
# ============================================================================


class NewsArticle(BaseModel):
    """News article from Yahoo Finance or Google News"""

    headline: str
    url: str
    source: Optional[str] = None
    published: Optional[str] = None
    summary: Optional[str] = None


class NewsResponse(BaseModel):
    """Collection of news articles"""

    articles: List[NewsArticle]


class TelegramPost(BaseModel):
    """Telegram channel post/message"""

    text: str
    date: str
    sender_id: Optional[int] = None
    views: Optional[int] = None
    forwards: Optional[int] = None
    channel: str


# ============================================================================
# STOCK INFO & PRICE DATA MODELS
# ============================================================================


class StockInfo(BaseModel):
    """Real-time stock information from Yahoo Finance"""

    ticker: str
    current_price: float
    previous_close: float
    change_percent: float
    volume: int
    average_volume: float
    volume_spike: bool
    price_change_last_2h: float


class OHLCVData(BaseModel):
    """Single OHLCV candle data point with technical indicators"""

    date: str
    open: float
    high: float
    low: float
    close: float
    volume: int
    price_change_pct: Optional[float] = None
    volume_ma_20: Optional[float] = None
    volume_ratio: Optional[float] = None
    body: Optional[float] = None
    upper_wick: Optional[float] = None
    lower_wick: Optional[float] = None
    wick_body_ratio: Optional[float] = None


class OHLCVResponse(BaseModel):
    """Collection of OHLCV data points"""

    symbol: str
    data: List[OHLCVData]
    period: str = "3mo"


# ============================================================================
# SHAREHOLDING & OWNERSHIP MODELS
# ============================================================================


class Shareholding(BaseModel):
    """Shareholding pattern from Screener.in with multi-quarter tracking"""

    # Latest quarter values
    promoter: float
    fii: float
    dii: float
    retail: float
    mf: float
    pledge: float

    # Quarter-over-Quarter changes (QoQ)
    promoter_change: Optional[float] = None
    fii_change: Optional[float] = None
    dii_change: Optional[float] = None
    retail_change: Optional[float] = None
    mf_change: Optional[float] = None

    # Multi-quarter trends (3-4 quarters) - for detecting gradual exits
    fii_trend_3q: Optional[float] = None  # Change over last 3 quarters
    dii_trend_3q: Optional[float] = None
    retail_trend_3q: Optional[float] = None
    promoter_trend_3q: Optional[float] = None

    # Flags for pattern detection
    institutional_exit_pattern: Optional[bool] = (
        None  # True if gradual FII/DII exit detected
    )
    retail_trap_risk: Optional[bool] = (
        None  # True if retail accumulating while institutions exit
    )


# ============================================================================
# DELIVERY, BULK & BLOCK DEAL MODELS
# ============================================================================


class DeliveryData(BaseModel):
    """Daily delivery data from NSE Bhavcopy"""

    date: str
    close: Optional[float] = None
    volume: Optional[int] = None
    delivery_qty: Optional[int] = None
    delivery_pct: Optional[float] = None


class DeliveryResponse(BaseModel):
    """Collection of delivery data"""

    symbol: str
    data: List[DeliveryData]


class BulkDeal(BaseModel):
    """Bulk deal from NSE"""

    symbol: str
    client_name: str
    buy_sell: str  # "BUY" or "SELL"
    quantity: int
    price: float
    date: str


class BlockDeal(BaseModel):
    """Block deal from NSE"""

    symbol: str
    client_name: str
    buy_sell: str  # "BUY" or "SELL"
    quantity: int
    price: float
    date: str


# ============================================================================
# PATTERN DETECTION MODELS
# ============================================================================


class Pattern(BaseModel):
    """Detected manipulation pattern"""

    pattern: str = Field(..., description="Pattern name/type")
    severity: Literal["LOW", "MEDIUM", "HIGH", "CRITICAL"] = Field(
        ..., description="Pattern severity level"
    )
    detail: str = Field(..., description="Detailed explanation of the pattern")
    score: float = Field(..., ge=0, le=10, description="Pattern risk score (0-10)")


class PatternResponse(BaseModel):
    """Collection of detected patterns"""

    symbol: str
    patterns: List[Pattern]
    total_patterns: int


# ============================================================================
# RISK ANALYSIS MODELS
# ============================================================================


class RiskReport(BaseModel):
    """Complete risk analysis report"""

    symbol: str
    timestamp: str
    risk_score: float = Field(..., ge=0, le=10, description="Overall risk score (0-10)")
    risk_level: Literal["LOW", "MEDIUM", "HIGH", "CRITICAL"]
    latest_price: Optional[float] = None
    price_change_pct: Optional[float] = None
    volume: Optional[str] = None
    delivery_pct: Optional[str] = None
    patterns_detected: int
    patterns: List[Pattern]
    explanation: str = Field(..., description="AI-generated explanation of the risk")


# ============================================================================
# MARKET DATA WRAPPER MODELS
# ============================================================================


class MarketData(BaseModel):
    """Complete market data for a symbol (wrapper for all fetched data)"""

    symbol: str
    ohlcv: Optional[List[OHLCVData]] = None
    delivery: Optional[List[DeliveryData]] = None
    bulk_deals: Optional[List[BulkDeal]] = None
    block_deals: Optional[List[BlockDeal]] = None


class CompleteAnalysis(BaseModel):
    """Complete analysis result including all data sources"""

    symbol: str
    timestamp: str
    stock_info: Optional[StockInfo] = None
    shareholding: Optional[Shareholding] = None
    news: Optional[List[NewsArticle]] = None
    telegram_posts: Optional[List[TelegramPost]] = None
    market_data: Optional[MarketData] = None
    patterns: Optional[List[Pattern]] = None
    risk_report: Optional[RiskReport] = None
