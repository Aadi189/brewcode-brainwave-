# 📋 Complete API Routes Documentation

## 🎯 Overview

Your backend has **23 API endpoints** organized into **11 route modules**.

---

## 🏠 **Core Routes** (main.py)

### 1. Root Endpoint
```
GET /
```
**Purpose**: API health check  
**Returns**: `{"message": "API is running", "status": "ok"}`  
**Use**: Verify API is online

### 2. Health Check
```
GET /health
```
**Purpose**: Health monitoring  
**Returns**: `{"status": "healthy"}`  
**Use**: Load balancer health checks

### 3. Current User
```
GET /me
```
**Purpose**: Get authenticated user info  
**Auth**: Required  
**Returns**: User information  
**Use**: Check who's logged in

---

## 🤖 **Multi-Agent Risk System** (NEW - Your Advanced System)

### 4. Analyze Stock (Multi-Agent)
```
GET /api/multi-agent/analyze/{symbol}
```
**Purpose**: **Comprehensive 6-agent risk analysis**  
**Parameters**:
- `symbol` (path): Stock symbol (e.g., RELIANCE)
- `include_shareholding` (query, default=true): Run Agent 1
- `include_delivery` (query, default=true): Run Agent 2
- `include_microstructure` (query, default=true): Run Agent 3
- `include_deals` (query, default=true): Run Agent 4
- `include_news` (query, default=true): Run Agents 5 & 6

**Returns**:
```json
{
  "symbol": "RELIANCE",
  "overall_risk_score": 67.5,
  "risk_level": "HIGH",
  "agent_signals": [...],
  "agent_contributions": {...},
  "co_occurrence_amplifications": [...],
  "explanation": "...",
  "data_sources_used": [...]
}
```

**Use**: **Main feature** - Get sophisticated multi-agent risk assessment

**Agents**:
1. Retail Trap Detector (shareholding patterns)
2. Delivery Spike Detector (delivery vs price)
3. Microstructure Detector (candlestick manipulation)
4. Bulk/Block Deals Detector (large deal patterns)
5. Narrative Risk Detector (news hype)
6. Misinformation Detector (source credibility)

---

### 5. Record Drawdown (Learning)
```
POST /api/multi-agent/record-drawdown
```
**Purpose**: **Record historical drawdown for learning**  
**Body**:
```json
{
  "symbol": "WIPRO",
  "predicted_risk_score": 75.0,
  "actual_drawdown": 28.5,
  "days_to_drawdown": 30
}
```

**Returns**: Updated weight information

**Use**: **Learning system** - Teach the AI from actual outcomes  
**Formula**: `w_final = α × w_expert + (1-α) × w_learned`

---

### 6. Get Agent Weights
```
GET /api/multi-agent/weights
```
**Purpose**: View current agent weights  
**Returns**:
```json
{
  "expert_weights": {...},
  "learned_weights": {...},
  "final_weights": {...},
  "alpha": 0.7,
  "formula": "w_final = 0.70 × w_expert + 0.30 × w_learned",
  "total_drawdown_events": 15
}
```

**Use**: Monitor learning progress, see which agents are trusted

---

### 7. Get Agent Info
```
GET /api/multi-agent/agent-info
```
**Purpose**: Get documentation about all 6 agents  
**Returns**: Agent descriptions, signals, co-occurrence rules

**Use**: Understand what each agent detects

---

## 📊 **Analysis Routes** (analysis_routes.py)

### 8. Complete Analysis
```
GET /api/analysis/complete/{symbol}
```
**Purpose**: Legacy complete analysis (older system)  
**Parameters**:
- `symbol` (path): Stock symbol
- `company` (query): Company name for news
- `ohlcv_period` (query, default="3mo"): OHLCV period
- `delivery_days` (query, default=30): Delivery data days

**Returns**: Complete analysis with patterns and risk

**Use**: Older comprehensive analysis (consider using multi-agent instead)

---

### 9. Quick Analysis
```
GET /api/analysis/quick/{symbol}
```
**Purpose**: Fast basic analysis  
**Returns**: Quick stock overview

**Use**: When you need fast results

---

### 10. Diagnose Stock
```
GET /api/analysis/diagnose/{company}/{ticker}
```
**Purpose**: Diagnostic analysis  
**Returns**: Detailed diagnostics

**Use**: Debug data fetching issues

---

## 📈 **Market Data Routes** (market_routes.py)

### 11. Get OHLCV Data
```
GET /api/market/ohlcv/{symbol}
```
**Purpose**: Fetch OHLCV + technical indicators  
**Parameters**:
- `symbol` (path): Stock symbol
- `period` (query, default="3mo"): 1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max

**Returns**:
```json
{
  "symbol": "RELIANCE",
  "period": "3mo",
  "data": [...],
  "indicators": {...}
}
```

**Use**: Get price data with technical indicators

---

### 12. Get Delivery Data
```
GET /api/market/delivery/{symbol}
```
**Purpose**: Fetch delivery percentage data from NSE  
**Parameters**:
- `symbol` (path): Stock symbol
- `days` (query, default=30): Number of days (1-90)

**Returns**: Delivery data with percentages

**Use**: Analyze delivery patterns

---

### 13. Get Bulk Deals
```
GET /api/market/bulk-deals/{symbol}
```
**Purpose**: Fetch bulk deals from NSE  
**Returns**: List of bulk deals

**Use**: Monitor large transactions

---

### 14. Get Block Deals
```
GET /api/market/block-deals/{symbol}
```
**Purpose**: Fetch block deals from NSE  
**Returns**: List of block deals

**Use**: Monitor institutional transactions

---

### 15. Get All Market Data
```
GET /api/market/all/{symbol}
```
**Purpose**: Fetch all market data at once  
**Returns**: OHLCV + Delivery + Bulk + Block deals

**Use**: Get everything in one call

---

## 📰 **News Routes** (news_routes.py)

### 16. Yahoo News
```
GET /api/news/yahoo/{ticker}
```
**Purpose**: Fetch news from Yahoo Finance  
**Returns**: List of news articles

**Use**: Get Yahoo news only

---

### 17. Google News
```
GET /api/news/google/{company}/{ticker}
```
**Purpose**: Fetch news from Google News  
**Returns**: List of news articles

**Use**: Get Google news only

---

### 18. All News
```
GET /api/news/all/{company}/{ticker}
```
**Purpose**: Fetch news from both Yahoo and Google  
**Returns**: Combined news articles

**Use**: Get comprehensive news coverage

---

## 🔍 **Pattern Detection Routes** (pattern_routes.py)

### 19. Detect Patterns
```
GET /api/patterns/{symbol}
```
**Purpose**: Detect manipulation patterns  
**Parameters**:
- `symbol` (path): Stock symbol
- `period` (query, default="3mo"): Analysis period

**Returns**:
```json
{
  "symbol": "RELIANCE",
  "patterns": [...],
  "pattern_count": 5
}
```

**Use**: Find specific manipulation patterns

---

## ⚠️ **Risk Analysis Routes** (risk_routes.py)

### 20. Risk Analysis (Legacy)
```
GET /api/risk/{symbol}
```
**Purpose**: Legacy risk analysis (older system)  
**Parameters**:
- `symbol` (path): Stock symbol
- `period` (query, default="3mo"): OHLCV period
- `delivery_days` (query, default=30): Delivery days

**Returns**: Risk report with score 0-10

**Use**: Older risk analysis (consider using multi-agent instead)

---

## 📊 **Shareholding Routes** (shareholding_routes.py)

### 21. Get Shareholding Pattern
```
GET /api/shareholding/{symbol}
```
**Purpose**: Fetch shareholding pattern from Screener.in  
**Returns**:
```json
{
  "symbol": "RELIANCE",
  "promoter": 50.5,
  "fii": 20.3,
  "dii": 15.2,
  "retail": 14.0,
  "qoq_changes": {...},
  "multi_quarter_changes": {...}
}
```

**Use**: Get ownership structure and changes

---

## 📈 **Stock Info Routes** (stock_routes.py)

### 22. Get Stock Info
```
GET /api/stock/{ticker}
```
**Purpose**: Fetch basic stock information  
**Returns**: Company info, sector, market cap, etc.

**Use**: Get stock fundamentals

---

## 👤 **Profile Routes** (profile.py)

### 23. Get Profile
```
GET /api/profile
```
**Purpose**: Get user profile  
**Auth**: Required  
**Returns**: User profile data

**Use**: User account information

---

### 24. Get Profile Me
```
GET /api/profile/me
```
**Purpose**: Get current user profile  
**Auth**: Required  
**Returns**: Current user data

**Use**: Same as /me but under /api/profile

---

## 📱 **Telegram Routes** (telegram_routes.py) - DISABLED

### 25. Get Telegram Posts
```
GET /api/telegram/{stock}
```
**Status**: Currently disabled in main.py  
**Purpose**: Fetch Telegram posts about stock  
**Returns**: List of Telegram posts

**Use**: Social media sentiment (when enabled)

---

## 🎯 **Route Organization**

### **By Functionality:**

#### **🤖 AI/ML Routes** (Advanced)
- `/api/multi-agent/analyze/{symbol}` ⭐ **Main Feature**
- `/api/multi-agent/record-drawdown` ⭐ **Learning**
- `/api/multi-agent/weights`
- `/api/multi-agent/agent-info`

#### **📊 Data Fetching Routes**
- `/api/market/ohlcv/{symbol}`
- `/api/market/delivery/{symbol}`
- `/api/market/bulk-deals/{symbol}`
- `/api/market/block-deals/{symbol}`
- `/api/market/all/{symbol}`
- `/api/shareholding/{symbol}`
- `/api/stock/{ticker}`

#### **📰 News Routes**
- `/api/news/yahoo/{ticker}`
- `/api/news/google/{company}/{ticker}`
- `/api/news/all/{company}/{ticker}`

#### **🔍 Analysis Routes** (Legacy)
- `/api/analysis/complete/{symbol}`
- `/api/analysis/quick/{symbol}`
- `/api/analysis/diagnose/{company}/{ticker}`
- `/api/patterns/{symbol}`
- `/api/risk/{symbol}`

#### **👤 User Routes**
- `/api/profile`
- `/api/profile/me`
- `/me`

#### **🏥 Health Routes**
- `/`
- `/health`

---

## 🚀 **Recommended Usage Flow**

### **For Hackathon Demo:**

1. **Start with Multi-Agent Analysis:**
   ```
   GET /api/multi-agent/analyze/RELIANCE
   ```

2. **Show Agent Info:**
   ```
   GET /api/multi-agent/agent-info
   ```

3. **Check Weights:**
   ```
   GET /api/multi-agent/weights
   ```

4. **Demonstrate Learning:**
   ```
   POST /api/multi-agent/record-drawdown
   {
     "symbol": "WIPRO",
     "predicted_risk_score": 75.0,
     "actual_drawdown": 28.5,
     "days_to_drawdown": 30
   }
   ```

5. **Show Updated Weights:**
   ```
   GET /api/multi-agent/weights
   ```

---

## 📊 **Route Comparison**

| Feature | Legacy `/api/risk/{symbol}` | New `/api/multi-agent/analyze/{symbol}` |
|---------|----------------------------|----------------------------------------|
| **Agents** | Single analyzer | 6 specialized agents |
| **Risk Score** | 0-10 | 0-100 (more granular) |
| **Shareholding** | Basic | Multi-quarter tracking |
| **Delivery** | Basic | Delivery-price correlation |
| **Microstructure** | Single timeframe | 3 timeframes (10m, 15m, 30m) |
| **Deals** | Basic | Circular trading detection |
| **News** | Not included | Hype + credibility analysis |
| **Learning** | None | Drawdown-based learning |
| **Co-occurrence** | None | Risk amplification |
| **Interpretability** | Low | High (70% expert weights) |

---

## ✅ **Summary**

### **Total Routes: 25**

- **Multi-Agent System**: 4 routes ⭐ (Your main feature)
- **Market Data**: 5 routes
- **News**: 3 routes
- **Analysis (Legacy)**: 3 routes
- **Patterns**: 1 route
- **Risk (Legacy)**: 1 route
- **Shareholding**: 1 route
- **Stock Info**: 1 route
- **Profile**: 2 routes
- **Health**: 2 routes
- **Telegram**: 1 route (disabled)

### **Main Features:**
1. ✅ **Multi-Agent Risk Analysis** - 6 agents with learning
2. ✅ **Drawdown-Based Learning** - w_final = α×w_expert + (1-α)×w_learned
3. ✅ **Market Data Fetching** - OHLCV, delivery, deals
4. ✅ **News Aggregation** - Yahoo + Google
5. ✅ **Shareholding Tracking** - Multi-quarter analysis

### **For Your Hackathon:**
**Focus on**: `/api/multi-agent/*` routes - these are your differentiator! 🚀
