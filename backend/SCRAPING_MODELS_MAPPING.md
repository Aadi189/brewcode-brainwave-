# Scraping Modules & Pydantic Models Mapping

This document maps each scraping function to its corresponding Pydantic model for type validation and API responses.

---

## 📊 Module Overview

| Module | Primary Function | Return Type | Pydantic Model |
|--------|-----------------|-------------|----------------|
| `stock_info.py` | `stock_info()` | StockInfo object | ✅ `StockInfo` |
| `news_scraping.py` | `yahoo_news_scraper()` | list[NewsArticle] | ✅ `NewsArticle` |
| `news_scraping.py` | `google_news_scraper()` | list[NewsArticle] | ✅ `NewsArticle` |
| `telegram_scraper.py` | `get_telegram_posts_for_stock()` | list[TelegramPost] | ✅ `TelegramPost` |
| `shareholding_scraper.py` | `shareholding_scraper()` | Shareholding object | ✅ `Shareholding` |
| `data_fetcher.py` | `get_ohlcv_data()` | DataFrame → list[dict] | ✅ `OHLCVData` |
| `data_fetcher.py` | `get_delivery_data()` | DataFrame → list[dict] | ✅ `DeliveryData` |
| `data_fetcher.py` | `get_bulk_deals()` | DataFrame → list[dict] | ✅ `BulkDeal` |
| `data_fetcher.py` | `get_block_deals()` | DataFrame → list[dict] | ✅ `BlockDeal` |
| `data_fetcher.py` | `fetch_all_data()` | dict with DataFrames | ✅ `MarketData` |
| `pattern_detector.py` | `detect_all_patterns()` | list[dict] | ✅ `Pattern` |
| `risk_analyzer.py` | `generate_report()` | dict | ✅ `RiskReport` |

---

## 🔍 Detailed Breakdown

### 1. Stock Information (`stock_info.py`)

**Function:** `stock_info(ticker: str) -> StockInfo`

**Returns:**
```python
StockInfo(
    ticker="RELIANCE.NS",
    current_price=2450.50,
    previous_close=2430.00,
    change_percent=0.84,
    volume=5000000,
    average_volume=4000000,
    volume_spike=True,
    price_change_last_2h=0.5
)
```

**Pydantic Model:** `StockInfo`

---

### 2. News Scraping (`news_scraping.py`)

**Functions:**
- `yahoo_news_scraper(ticker: str) -> list[NewsArticle]`
- `google_news_scraper(company: str, ticker: str) -> list[NewsArticle]`

**Returns:**
```python
[
    NewsArticle(
        headline="Stock surges on strong earnings",
        url="https://...",
        source="Yahoo Finance",
        published="2024-01-15T10:30:00Z",
        summary="Company reported..."
    ),
    ...
]
```

**Pydantic Models:** `NewsArticle`, `NewsResponse` (wrapper)

---

### 3. Telegram Scraping (`telegram_scraper.py`)

**Function:** `get_telegram_posts_for_stock(channels: list[str], stock: str, limit_per_channel: int) -> list[TelegramPost]`

**Returns:**
```python
[
    TelegramPost(
        text="RELIANCE target 2500! 🚀",
        date="2024-01-15T10:30:00",
        sender_id=123456,
        views=1500,
        forwards=50,
        channel="stocktipsofficial"
    ),
    ...
]
```

**Pydantic Model:** `TelegramPost`

---

### 4. Shareholding Pattern (`shareholding_scraper.py`)

**Function:** `shareholding_scraper(symbol: str) -> Shareholding`

**Returns:**
```python
Shareholding(
    promoter=50.5,
    fii=25.3,
    dii=10.2,
    retail=14.0,
    mf=8.5,
    pledge=0.0,
    promoter_change=None,
    fii_change=None,
    dii_change=None,
    retail_change=None,
    mf_change=None
)
```

**Pydantic Model:** `Shareholding`

---

### 5. Market Data Fetcher (`data_fetcher.py`)

#### 5.1 OHLCV Data

**Function:** `get_ohlcv_data(symbol: str, period: str) -> DataFrame`

**DataFrame Columns:**
- Date (index), Open, High, Low, Close, Volume
- Price_Change_Pct, Volume_MA_20, Volume_Ratio
- Body, Upper_Wick, Lower_Wick, Wick_Body_Ratio

**Pydantic Model:** `OHLCVData`

**Example:**
```python
OHLCVData(
    date="2024-01-15",
    open=2430.0,
    high=2455.0,
    low=2425.0,
    close=2450.5,
    volume=5000000,
    price_change_pct=0.84,
    volume_ma_20=4000000.0,
    volume_ratio=1.25,
    body=20.5,
    upper_wick=4.5,
    lower_wick=5.0,
    wick_body_ratio=0.46
)
```

#### 5.2 Delivery Data

**Function:** `get_delivery_data(symbol: str, days: int) -> DataFrame`

**DataFrame Columns:**
- Date, Close, Volume, Delivery_Qty, Delivery_Pct

**Pydantic Model:** `DeliveryData`

**Example:**
```python
DeliveryData(
    date="2024-01-15",
    close=2450.5,
    volume=5000000,
    delivery_qty=2500000,
    delivery_pct=50.0
)
```

#### 5.3 Bulk Deals

**Function:** `get_bulk_deals(symbol: str, days: int) -> DataFrame`

**DataFrame Columns:**
- SYMBOL, CLIENT NAME, BUY/SELL, QUANTITY, PRICE (approx)

**Pydantic Model:** `BulkDeal`

**Example:**
```python
BulkDeal(
    symbol="RELIANCE",
    client_name="ABC INVESTMENTS",
    buy_sell="BUY",
    quantity=100000,
    price=2450.0,
    date="2024-01-15"
)
```

#### 5.4 Block Deals

**Function:** `get_block_deals(symbol: str, days: int) -> DataFrame`

**DataFrame Columns:**
- SYMBOL, CLIENT NAME, BUY/SELL, QUANTITY, PRICE (approx)

**Pydantic Model:** `BlockDeal`

**Example:**
```python
BlockDeal(
    symbol="RELIANCE",
    client_name="XYZ FUND",
    buy_sell="SELL",
    quantity=500000,
    price=2450.0,
    date="2024-01-15"
)
```

#### 5.5 Complete Market Data

**Function:** `fetch_all_data(symbol: str) -> dict`

**Returns:**
```python
{
    "ohlcv": DataFrame,      # → List[OHLCVData]
    "delivery": DataFrame,   # → List[DeliveryData]
    "bulk_deals": DataFrame, # → List[BulkDeal]
    "block_deals": DataFrame # → List[BlockDeal]
}
```

**Pydantic Model:** `MarketData` (wrapper)

---

### 6. Pattern Detection (`pattern_detector.py`)

**Function:** `detect_all_patterns(data: dict) -> list[dict]`

**Returns:**
```python
[
    {
        "pattern": "Volume Spike Without Price Confirmation",
        "severity": "HIGH",
        "detail": "Volume is 3.2x above 20-day average, but price moved only 0.5%",
        "score": 6.4
    },
    {
        "pattern": "Distribution Pattern (Delivery Divergence)",
        "severity": "HIGH",
        "detail": "Delivery % declining (currently 35.2%) while price stays flat/rises - operators likely selling",
        "score": 8.0
    },
    ...
]
```

**Pydantic Model:** `Pattern`

**Example:**
```python
Pattern(
    pattern="Volume Spike Without Price Confirmation",
    severity="HIGH",
    detail="Volume is 3.2x above 20-day average, but price moved only 0.5%",
    score=6.4
)
```

**Wrapper Model:** `PatternResponse`

---

### 7. Risk Analysis (`risk_analyzer.py`)

**Function:** `generate_report(symbol: str, data: dict, patterns: list) -> dict`

**Returns:**
```python
{
    "symbol": "RELIANCE",
    "timestamp": "2024-01-15 14:30:00",
    "risk_score": 7.2,
    "risk_level": "HIGH",
    "latest_price": 2450.5,
    "price_change_pct": 0.84,
    "volume": "5,000,000 (Avg: 4,000,000)",
    "delivery_pct": "50.0%",
    "patterns_detected": 3,
    "patterns": [...],  # List of Pattern dicts
    "explanation": "🚨 HIGH RISK: Significant manipulation patterns identified..."
}
```

**Pydantic Model:** `RiskReport`

**Example:**
```python
RiskReport(
    symbol="RELIANCE",
    timestamp="2024-01-15 14:30:00",
    risk_score=7.2,
    risk_level="HIGH",
    latest_price=2450.5,
    price_change_pct=0.84,
    volume="5,000,000 (Avg: 4,000,000)",
    delivery_pct="50.0%",
    patterns_detected=3,
    patterns=[Pattern(...), Pattern(...), Pattern(...)],
    explanation="🚨 HIGH RISK: Significant manipulation patterns identified..."
)
```

---

## 🎯 Wrapper Models

### `MarketData`
Wraps all market data from `data_fetcher.fetch_all_data()`

```python
MarketData(
    symbol="RELIANCE",
    ohlcv=[OHLCVData(...), ...],
    delivery=[DeliveryData(...), ...],
    bulk_deals=[BulkDeal(...), ...],
    block_deals=[BlockDeal(...), ...]
)
```

### `CompleteAnalysis`
Wraps the entire analysis pipeline output

```python
CompleteAnalysis(
    symbol="RELIANCE",
    timestamp="2024-01-15 14:30:00",
    stock_info=StockInfo(...),
    shareholding=Shareholding(...),
    news=[NewsArticle(...), ...],
    telegram_posts=[TelegramPost(...), ...],
    market_data=MarketData(...),
    patterns=[Pattern(...), ...],
    risk_report=RiskReport(...)
)
```

---

## 📝 Usage Notes

### Converting DataFrames to Pydantic Models

When converting pandas DataFrames to Pydantic models:

```python
# Example: Converting OHLCV DataFrame
df = fetcher.get_ohlcv_data("RELIANCE")
ohlcv_list = [
    OHLCVData(
        date=str(row.name),
        open=row['Open'],
        high=row['High'],
        low=row['Low'],
        close=row['Close'],
        volume=int(row['Volume']),
        price_change_pct=row.get('Price_Change_Pct'),
        volume_ma_20=row.get('Volume_MA_20'),
        volume_ratio=row.get('Volume_Ratio'),
        body=row.get('Body'),
        upper_wick=row.get('Upper_Wick'),
        lower_wick=row.get('Lower_Wick'),
        wick_body_ratio=row.get('Wick_Body_Ratio')
    )
    for _, row in df.iterrows()
]
```

### Pattern Detection Return

The `detect_all_patterns()` function returns a list of dictionaries. Convert to Pydantic:

```python
patterns_dict = detector.detect_all_patterns(data)
patterns = [Pattern(**p) for p in patterns_dict]
```

### Risk Report Return

The `generate_report()` function returns a dictionary. Convert to Pydantic:

```python
report_dict = analyzer.generate_report(symbol, data, patterns)
risk_report = RiskReport(**report_dict)
```

---

## ✅ Model Validation Benefits

1. **Type Safety**: Ensures data types are correct
2. **Data Validation**: Validates ranges (e.g., risk_score 0-10)
3. **API Documentation**: Auto-generates OpenAPI/Swagger docs
4. **Serialization**: Easy JSON conversion for API responses
5. **IDE Support**: Better autocomplete and type hints

---

## 🚀 Next Steps

To use these models in FastAPI endpoints:

```python
from fastapi import FastAPI
from app.models.models import StockInfo, RiskReport, CompleteAnalysis

app = FastAPI()

@app.get("/stock/{ticker}", response_model=StockInfo)
async def get_stock(ticker: str):
    return stock_info(ticker)

@app.get("/risk/{symbol}", response_model=RiskReport)
async def get_risk(symbol: str):
    # Fetch data, detect patterns, generate report
    ...
    return RiskReport(**report_dict)

@app.get("/analysis/{symbol}", response_model=CompleteAnalysis)
async def get_complete_analysis(symbol: str):
    # Run complete analysis pipeline
    ...
    return CompleteAnalysis(...)
```
