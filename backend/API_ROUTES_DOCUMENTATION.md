# API Routes Documentation

## Overview

This document provides comprehensive documentation for all API routes in the BrewCode Brainwave Stock Analysis API. The API provides endpoints for fetching stock data, news, social media mentions, market data, pattern detection, and risk analysis.

## Base URL

```
http://localhost:8000/api
```

## API Routes Summary

### 1. **Analysis Routes** (`/api/analysis`)
Complete analysis endpoints combining multiple data sources.

### 2. **News Routes** (`/api/news`)
Fetch news from Yahoo Finance and Google News.

### 3. **Stock Routes** (`/api/stock`)
Real-time stock information from Yahoo Finance.

### 4. **Shareholding Routes** (`/api/shareholding`)
Shareholding pattern data from Screener.in.

### 5. **Telegram Routes** (`/api/telegram`)
Telegram channel mentions (requires API credentials).

### 6. **Market Routes** (`/api/market`)
OHLCV data, delivery data, bulk/block deals from NSE.

### 7. **Pattern Routes** (`/api/patterns`)
Market manipulation pattern detection.

### 8. **Risk Routes** (`/api/risk`)
Comprehensive risk analysis with AI-powered recommendations.

---

## Detailed Endpoints

### Analysis Routes

#### `GET /api/analysis/complete/{symbol}`

Get complete analysis for a stock including all data sources and risk assessment.

**Parameters:**
- `symbol` (path, required): NSE stock symbol (e.g., 'RELIANCE', 'TCS')
- `company` (query, required): Company name for news search
- `include_telegram` (query, optional): Include Telegram data (default: false)
- `telegram_channels` (query, optional): List of Telegram channels
- `ohlcv_period` (query, optional): OHLCV period (default: '3mo')
- `delivery_days` (query, optional): Delivery data days (default: 30)

**Response Model:** `CompleteAnalysis`

**Example:**
```bash
GET /api/analysis/complete/RELIANCE?company=Reliance%20Industries
```

#### `GET /api/analysis/quick/{symbol}`

Quick analysis with basic stock info and news (legacy compatibility).

**Parameters:**
- `symbol` (path, required): Stock ticker symbol
- `company` (query, required): Company name

**Example:**
```bash
GET /api/analysis/quick/TCS?company=Tata%20Consultancy%20Services
```

---

### News Routes

#### `GET /api/news/yahoo/{ticker}`

Fetch news articles from Yahoo Finance RSS feed.

**Parameters:**
- `ticker` (path, required): Stock ticker symbol

**Response Model:** `NewsResponse`

**Example:**
```bash
GET /api/news/yahoo/RELIANCE
```

#### `GET /api/news/google/{company}/{ticker}`

Fetch news articles from Google News.

**Parameters:**
- `company` (path, required): Company name
- `ticker` (path, required): Stock ticker symbol

**Response Model:** `NewsResponse`

**Example:**
```bash
GET /api/news/google/Reliance%20Industries/RELIANCE
```

#### `GET /api/news/all/{company}/{ticker}`

Fetch news from both Yahoo Finance and Google News, deduplicated.

**Parameters:**
- `company` (path, required): Company name
- `ticker` (path, required): Stock ticker symbol

**Response Model:** `NewsResponse`

**Example:**
```bash
GET /api/news/all/Tata%20Motors/TATAMOTORS
```

---

### Stock Routes

#### `GET /api/stock/{ticker}`

Fetch real-time stock information from Yahoo Finance.

**Parameters:**
- `ticker` (path, required): Stock ticker symbol (automatically appends .NS for NSE)

**Response Model:** `StockInfo`

**Response Fields:**
- `ticker`: Stock ticker
- `current_price`: Current price
- `previous_close`: Previous close price
- `change_percent`: Percentage change
- `volume`: Current volume
- `average_volume`: Average volume
- `volume_spike`: Boolean indicating volume spike
- `price_change_last_2h`: Price change in last 2 hours (%)

**Example:**
```bash
GET /api/stock/RELIANCE
```

---

### Shareholding Routes

#### `GET /api/shareholding/{symbol}`

Fetch shareholding pattern from Screener.in.

**Parameters:**
- `symbol` (path, required): NSE stock symbol

**Response Model:** `Shareholding`

**Response Fields:**
- `promoter`: Promoter holding percentage
- `fii`: Foreign Institutional Investor holding
- `dii`: Domestic Institutional Investor holding
- `retail`: Retail investor holding
- `mf`: Mutual fund holding
- `pledge`: Pledged shares percentage

**Example:**
```bash
GET /api/shareholding/TATAPOWER
```

---

### Telegram Routes

#### `GET /api/telegram/{stock}`

Fetch Telegram posts mentioning a specific stock.

**Parameters:**
- `stock` (path, required): Stock symbol to search for
- `channels` (query, optional): List of Telegram channel usernames (default: popular penny stock channels)
- `limit_per_channel` (query, optional): Messages per channel (1-200, default: 50)

**Response Model:** `List[TelegramPost]`

**Note:** Requires `TELEGRAM_API_ID` and `TELEGRAM_API_HASH` environment variables.

**Example:**
```bash
GET /api/telegram/FCONSUMER?channels=powerofpennystock&channels=pennystockr&limit_per_channel=50
```

---

### Market Routes

#### `GET /api/market/ohlcv/{symbol}`

Fetch OHLCV data with technical indicators.

**Parameters:**
- `symbol` (path, required): NSE stock symbol
- `period` (query, optional): Time period (default: '3mo')
  - Options: 1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max

**Response Model:** `OHLCVResponse`

**Example:**
```bash
GET /api/market/ohlcv/RELIANCE?period=6mo
```

#### `GET /api/market/delivery/{symbol}`

Fetch delivery percentage data from NSE Bhavcopy.

**Parameters:**
- `symbol` (path, required): NSE stock symbol
- `days` (query, optional): Number of days (1-90, default: 30)

**Response Model:** `DeliveryResponse`

**Example:**
```bash
GET /api/market/delivery/TCS?days=45
```

#### `GET /api/market/bulk-deals/{symbol}`

Fetch recent bulk deals from NSE.

**Parameters:**
- `symbol` (path, required): NSE stock symbol

**Response Model:** `List[BulkDeal]`

**Example:**
```bash
GET /api/market/bulk-deals/RELIANCE
```

#### `GET /api/market/block-deals/{symbol}`

Fetch recent block deals from NSE.

**Parameters:**
- `symbol` (path, required): NSE stock symbol

**Response Model:** `List[BlockDeal]`

**Example:**
```bash
GET /api/market/block-deals/RELIANCE
```

#### `GET /api/market/all/{symbol}`

Fetch all market data in one request.

**Parameters:**
- `symbol` (path, required): NSE stock symbol
- `period` (query, optional): OHLCV period (default: '3mo')
- `delivery_days` (query, optional): Delivery data days (default: 30)

**Response Model:** `MarketData`

**Example:**
```bash
GET /api/market/all/RELIANCE?period=3mo&delivery_days=30
```

---

### Pattern Routes

#### `GET /api/patterns/{symbol}`

Detect manipulation patterns in stock data.

**Parameters:**
- `symbol` (path, required): NSE stock symbol
- `period` (query, optional): OHLCV period (default: '3mo')
- `delivery_days` (query, optional): Delivery data days (default: 30)

**Response Model:** `PatternResponse`

**Detected Patterns:**
- Volume anomalies (high volume without price movement)
- Wick patterns (rejection/fake breakouts)
- Delivery divergence (distribution/accumulation)
- Low delivery spikes (intraday manipulation)
- Bulk/block deals (insider activity)
- Price consolidation patterns

**Example:**
```bash
GET /api/patterns/TATAPOWER?period=3mo&delivery_days=30
```

---

### Risk Routes

#### `GET /api/risk/{symbol}`

Generate comprehensive risk analysis report.

**Parameters:**
- `symbol` (path, required): NSE stock symbol
- `period` (query, optional): OHLCV period (default: '3mo')
- `delivery_days` (query, optional): Delivery data days (default: 30)

**Response Model:** `RiskReport`

**Risk Levels:**
- **LOW (0-3)**: Minor patterns, likely normal market behavior
- **MEDIUM (3-6)**: Some concerning patterns detected
- **HIGH (6-8)**: Significant manipulation patterns identified
- **CRITICAL (8-10)**: Multiple strong manipulation signals

**Response Fields:**
- `symbol`: Stock symbol
- `timestamp`: Analysis timestamp
- `risk_score`: Overall risk score (0-10)
- `risk_level`: Risk level (LOW/MEDIUM/HIGH/CRITICAL)
- `latest_price`: Current price
- `price_change_pct`: Price change percentage
- `volume`: Volume information
- `delivery_pct`: Delivery percentage
- `patterns_detected`: Number of patterns found
- `patterns`: List of detected patterns
- `explanation`: AI-generated explanation and recommendations

**Example:**
```bash
GET /api/risk/TATAPOWER?period=3mo&delivery_days=30
```

---

## Response Models

### NewsArticle
```json
{
  "headline": "string",
  "url": "string",
  "source": "string",
  "published": "string",
  "summary": "string"
}
```

### StockInfo
```json
{
  "ticker": "string",
  "current_price": 0.0,
  "previous_close": 0.0,
  "change_percent": 0.0,
  "volume": 0,
  "average_volume": 0.0,
  "volume_spike": false,
  "price_change_last_2h": 0.0
}
```

### Shareholding
```json
{
  "promoter": 0.0,
  "fii": 0.0,
  "dii": 0.0,
  "retail": 0.0,
  "mf": 0.0,
  "pledge": 0.0,
  "promoter_change": 0.0,
  "fii_change": 0.0,
  "dii_change": 0.0,
  "retail_change": 0.0,
  "mf_change": 0.0
}
```

### Pattern
```json
{
  "pattern": "string",
  "severity": "LOW|MEDIUM|HIGH|CRITICAL",
  "detail": "string",
  "score": 0.0
}
```

### RiskReport
```json
{
  "symbol": "string",
  "timestamp": "string",
  "risk_score": 0.0,
  "risk_level": "LOW|MEDIUM|HIGH|CRITICAL",
  "latest_price": 0.0,
  "price_change_pct": 0.0,
  "volume": "string",
  "delivery_pct": "string",
  "patterns_detected": 0,
  "patterns": [],
  "explanation": "string"
}
```

---

## Error Responses

All endpoints return standard HTTP error codes:

- `404 Not Found`: Resource not found (e.g., invalid ticker)
- `500 Internal Server Error`: Server error with detail message

**Error Response Format:**
```json
{
  "detail": "Error message describing what went wrong"
}
```

---

## Interactive API Documentation

FastAPI provides automatic interactive API documentation:

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

---

## Usage Examples

### Python Example

```python
import requests

# Get complete analysis
response = requests.get(
    "http://localhost:8000/api/analysis/complete/RELIANCE",
    params={"company": "Reliance Industries"}
)
data = response.json()

# Get risk analysis
response = requests.get("http://localhost:8000/api/risk/TATAPOWER")
risk_data = response.json()
print(f"Risk Level: {risk_data['risk_level']}")
print(f"Risk Score: {risk_data['risk_score']}")
```

### JavaScript Example

```javascript
// Get stock info
fetch('http://localhost:8000/api/stock/RELIANCE')
  .then(response => response.json())
  .then(data => console.log(data));

// Get news
fetch('http://localhost:8000/api/news/all/Reliance%20Industries/RELIANCE')
  .then(response => response.json())
  .then(data => console.log(data.articles));
```

### cURL Example

```bash
# Get shareholding pattern
curl "http://localhost:8000/api/shareholding/TATAPOWER"

# Get patterns
curl "http://localhost:8000/api/patterns/RELIANCE?period=3mo"

# Get complete analysis
curl "http://localhost:8000/api/analysis/complete/TCS?company=Tata%20Consultancy%20Services"
```

---

## Environment Variables

Required environment variables for full functionality:

```env
# Telegram API (optional, only if using Telegram endpoints)
TELEGRAM_API_ID=your_api_id
TELEGRAM_API_HASH=your_api_hash
```

---

## Rate Limiting & Best Practices

1. **NSE Data**: Be respectful of NSE servers. The API includes built-in rate limiting.
2. **Caching**: Consider caching responses for frequently accessed data.
3. **Telegram**: Telegram scraping requires valid API credentials from https://my.telegram.org
4. **Error Handling**: Always handle potential errors in your client code.

---

## Scraping Modules Mapping

| Scraping File | API Route File | Main Endpoints |
|---------------|----------------|----------------|
| `news_scraping.py` | `news_routes.py` | `/api/news/*` |
| `stock_info.py` | `stock_routes.py` | `/api/stock/{ticker}` |
| `shareholding_scraper.py` | `shareholding_routes.py` | `/api/shareholding/{symbol}` |
| `telegram_scraper.py` | `telegram_routes.py` | `/api/telegram/{stock}` |
| `data_fetcher.py` | `market_routes.py` | `/api/market/*` |
| `pattern_detector.py` | `pattern_routes.py` | `/api/patterns/{symbol}` |
| `risk_analyzer.py` | `risk_routes.py` | `/api/risk/{symbol}` |
| All combined | `analysis_routes.py` | `/api/analysis/complete/{symbol}` |

---

## Support

For issues or questions, please refer to the project repository or contact the development team.
