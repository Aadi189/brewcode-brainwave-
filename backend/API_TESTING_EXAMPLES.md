# API Testing Examples - Indian Stocks

This guide provides ready-to-use examples for testing all API routes with real Indian stock symbols.

## Base URL
```
http://localhost:8000
```

---

## 📰 News Routes (`/api/news`)

### 1. Yahoo Finance News
```bash
# Reliance Industries
curl "http://localhost:8000/api/news/yahoo/RELIANCE.NS"

# Tata Motors
curl "http://localhost:8000/api/news/yahoo/TATAMOTORS.NS"

# Infosys
curl "http://localhost:8000/api/news/yahoo/INFY.NS"
```

### 2. Google News
```bash
# Reliance Industries
curl "http://localhost:8000/api/news/google/Reliance%20Industries/RELIANCE"

# Tata Motors
curl "http://localhost:8000/api/news/google/Tata%20Motors/TATAMOTORS"

# HDFC Bank
curl "http://localhost:8000/api/news/google/HDFC%20Bank/HDFCBANK"
```

### 3. Combined News (Yahoo + Google)
```bash
# TCS
curl "http://localhost:8000/api/news/all/Tata%20Consultancy%20Services/TCS"

# Wipro
curl "http://localhost:8000/api/news/all/Wipro/WIPRO"
```

---

## 📊 Stock Routes (`/api/stock`)

### Get Real-time Stock Info
```bash
# Reliance Industries
curl "http://localhost:8000/api/stock/RELIANCE"

# Tata Power
curl "http://localhost:8000/api/stock/TATAPOWER"

# ITC
curl "http://localhost:8000/api/stock/ITC"

# State Bank of India
curl "http://localhost:8000/api/stock/SBIN"

# Adani Enterprises
curl "http://localhost:8000/api/stock/ADANIENT"
```

**What you get:**
- Current price
- Previous close
- Change percentage
- Volume & average volume
- Volume spike detection (true/false)
- 2-hour price change

---

## 🏢 Shareholding Routes (`/api/shareholding`)

### Get Shareholding Pattern
```bash
# Tata Power
curl "http://localhost:8000/api/shareholding/TATAPOWER"

# Reliance Industries
curl "http://localhost:8000/api/shareholding/RELIANCE"

# Infosys
curl "http://localhost:8000/api/shareholding/INFY"

# Bajaj Finance
curl "http://localhost:8000/api/shareholding/BAJFINANCE"
```

**What you get:**
- Promoter holding %
- FII (Foreign Institutional Investors) %
- DII (Domestic Institutional Investors) %
- Retail investors %
- Mutual fund holding %
- Pledged shares %

---

## 📈 Market Data Routes (`/api/market`)

### 1. OHLCV Data (Price & Volume)
```bash
# Default: 3 months data
curl "http://localhost:8000/api/market/ohlcv/RELIANCE"

# 6 months data
curl "http://localhost:8000/api/market/ohlcv/TCS?period=6mo"

# 1 year data
curl "http://localhost:8000/api/market/ohlcv/INFY?period=1y"
```

**Available periods:** `1d`, `5d`, `1mo`, `3mo`, `6mo`, `1y`, `2y`, `5y`, `10y`, `ytd`, `max`

### 2. Delivery Data
```bash
# Default: 30 days
curl "http://localhost:8000/api/market/delivery/TATAPOWER"

# 45 days
curl "http://localhost:8000/api/market/delivery/RELIANCE?days=45"

# 60 days
curl "http://localhost:8000/api/market/delivery/SBIN?days=60"
```

### 3. Bulk Deals
```bash
curl "http://localhost:8000/api/market/bulk-deals/RELIANCE"
curl "http://localhost:8000/api/market/bulk-deals/TATAPOWER"
curl "http://localhost:8000/api/market/bulk-deals/ADANIENT"
```

### 4. Block Deals
```bash
curl "http://localhost:8000/api/market/block-deals/RELIANCE"
curl "http://localhost:8000/api/market/block-deals/TCS"
curl "http://localhost:8000/api/market/block-deals/INFY"
```

### 5. All Market Data Combined
```bash
# Get everything in one call
curl "http://localhost:8000/api/market/all/TATAPOWER"

# With custom parameters
curl "http://localhost:8000/api/market/all/RELIANCE?period=6mo&delivery_days=45"
```

---

## 🔍 Pattern Detection Routes (`/api/patterns`)

### Detect Manipulation Patterns
```bash
# Tata Power
curl "http://localhost:8000/api/patterns/TATAPOWER"

# Reliance with custom period
curl "http://localhost:8000/api/patterns/RELIANCE?period=6mo&delivery_days=45"

# Adani Enterprises
curl "http://localhost:8000/api/patterns/ADANIENT?period=3mo&delivery_days=30"
```

**Patterns detected:**
- Volume anomalies
- Wick patterns (fake breakouts)
- Delivery divergence
- Low delivery spikes
- Bulk/block deals
- Price consolidation

---

## ⚠️ Risk Analysis Routes (`/api/risk`)

### Get Complete Risk Report
```bash
# Tata Power
curl "http://localhost:8000/api/risk/TATAPOWER"

# Reliance Industries
curl "http://localhost:8000/api/risk/RELIANCE?period=6mo&delivery_days=45"

# Small cap example
curl "http://localhost:8000/api/risk/SUZLON"
```

**What you get:**
- Risk score (0-10)
- Risk level (LOW/MEDIUM/HIGH/CRITICAL)
- Current price & change
- Volume & delivery info
- All detected patterns
- AI-generated explanation & recommendations

---

## 🎯 Complete Analysis Routes (`/api/analysis`)

### 1. Complete Analysis (Everything!)
```bash
# Reliance Industries - Full analysis
curl "http://localhost:8000/api/analysis/complete/RELIANCE?company=Reliance%20Industries"

# Tata Power - Full analysis
curl "http://localhost:8000/api/analysis/complete/TATAPOWER?company=Tata%20Power"

# With custom parameters
curl "http://localhost:8000/api/analysis/complete/TCS?company=Tata%20Consultancy%20Services&ohlcv_period=6mo&delivery_days=45"
```

**This endpoint combines:**
1. Stock info
2. Shareholding pattern
3. News (Yahoo + Google)
4. Market data (OHLCV, delivery, deals)
5. Pattern detection
6. Risk analysis

### 2. Quick Analysis (Lightweight)
```bash
# Quick analysis - just stock info and news
curl "http://localhost:8000/api/analysis/quick/RELIANCE?company=Reliance%20Industries"

curl "http://localhost:8000/api/analysis/quick/TCS?company=Tata%20Consultancy%20Services"
```

---

## 🇮🇳 Popular Indian Stock Symbols

### Large Cap
- **RELIANCE** - Reliance Industries
- **TCS** - Tata Consultancy Services
- **INFY** - Infosys
- **HDFCBANK** - HDFC Bank
- **ICICIBANK** - ICICI Bank
- **SBIN** - State Bank of India
- **BHARTIARTL** - Bharti Airtel
- **ITC** - ITC Limited
- **KOTAKBANK** - Kotak Mahindra Bank
- **LT** - Larsen & Toubro

### Mid Cap
- **TATAPOWER** - Tata Power
- **TATAMOTORS** - Tata Motors
- **WIPRO** - Wipro
- **BAJFINANCE** - Bajaj Finance
- **ADANIENT** - Adani Enterprises
- **ADANIPORTS** - Adani Ports
- **MARUTI** - Maruti Suzuki
- **SUNPHARMA** - Sun Pharma

### Small Cap / Penny Stocks (for testing manipulation detection)
- **SUZLON** - Suzlon Energy
- **YESBANK** - Yes Bank
- **RPOWER** - Reliance Power
- **JETAIRWAYS** - Jet Airways (if listed)

---

## 📝 Testing Workflow

### Step 1: Start the Server
```bash
cd backend
uvicorn main:app --reload
```

### Step 2: Test Individual Routes
Start with simple routes and move to complex ones:

```bash
# 1. Stock info (simplest)
curl "http://localhost:8000/api/stock/RELIANCE"

# 2. News
curl "http://localhost:8000/api/news/all/Reliance%20Industries/RELIANCE"

# 3. Shareholding
curl "http://localhost:8000/api/shareholding/RELIANCE"

# 4. Market data
curl "http://localhost:8000/api/market/all/RELIANCE"

# 5. Patterns
curl "http://localhost:8000/api/patterns/RELIANCE"

# 6. Risk analysis
curl "http://localhost:8000/api/risk/RELIANCE"

# 7. Complete analysis (everything)
curl "http://localhost:8000/api/analysis/complete/RELIANCE?company=Reliance%20Industries"
```

### Step 3: View in Browser
Open these URLs in your browser for formatted JSON:

```
http://localhost:8000/api/stock/RELIANCE
http://localhost:8000/api/shareholding/TATAPOWER
http://localhost:8000/api/risk/RELIANCE
```

### Step 4: Interactive Documentation
Visit the auto-generated API docs:

```
http://localhost:8000/docs
```

You can test all endpoints directly from the browser!

---

## 🔧 Using Python Requests

```python
import requests
import json

# Example 1: Get stock info
response = requests.get("http://localhost:8000/api/stock/RELIANCE")
data = response.json()
print(f"Price: ₹{data['current_price']}")
print(f"Change: {data['change_percent']}%")

# Example 2: Risk analysis
response = requests.get(
    "http://localhost:8000/api/risk/TATAPOWER",
    params={"period": "3mo", "delivery_days": 30}
)
risk = response.json()
print(f"Risk Level: {risk['risk_level']}")
print(f"Risk Score: {risk['risk_score']}/10")
print(f"Explanation: {risk['explanation']}")

# Example 3: Complete analysis
response = requests.get(
    "http://localhost:8000/api/analysis/complete/RELIANCE",
    params={"company": "Reliance Industries"}
)
analysis = response.json()
print(f"Stock: {analysis['symbol']}")
print(f"Risk: {analysis['risk_report']['risk_level']}")
print(f"Patterns: {analysis['risk_report']['patterns_detected']}")
```

---

## 🔧 Using JavaScript/Fetch

```javascript
// Example 1: Get stock info
fetch('http://localhost:8000/api/stock/RELIANCE')
  .then(res => res.json())
  .then(data => {
    console.log(`Price: ₹${data.current_price}`);
    console.log(`Change: ${data.change_percent}%`);
  });

// Example 2: Risk analysis
fetch('http://localhost:8000/api/risk/TATAPOWER?period=3mo')
  .then(res => res.json())
  .then(risk => {
    console.log(`Risk Level: ${risk.risk_level}`);
    console.log(`Score: ${risk.risk_score}/10`);
    console.log(`Patterns: ${risk.patterns_detected}`);
  });

// Example 3: Complete analysis
const params = new URLSearchParams({
  company: 'Reliance Industries'
});

fetch(`http://localhost:8000/api/analysis/complete/RELIANCE?${params}`)
  .then(res => res.json())
  .then(data => {
    console.log('Complete Analysis:', data);
  });
```

---

## ⚡ Quick Test Commands (Copy & Paste)

```bash
# Test all routes quickly
curl "http://localhost:8000/api/stock/RELIANCE" && echo "\n✅ Stock route works"
curl "http://localhost:8000/api/shareholding/RELIANCE" && echo "\n✅ Shareholding route works"
curl "http://localhost:8000/api/news/yahoo/RELIANCE.NS" && echo "\n✅ News route works"
curl "http://localhost:8000/api/market/ohlcv/RELIANCE" && echo "\n✅ Market route works"
curl "http://localhost:8000/api/patterns/RELIANCE" && echo "\n✅ Pattern route works"
curl "http://localhost:8000/api/risk/RELIANCE" && echo "\n✅ Risk route works"
```

---

## 🎯 Recommended Test Stocks

**For general testing:**
- `RELIANCE` - Large, liquid stock with good data availability
- `TATAPOWER` - Good for testing all features
- `TCS` - Stable IT stock

**For manipulation detection:**
- `SUZLON` - Penny stock, often shows patterns
- `YESBANK` - Volatile, good for pattern testing
- `RPOWER` - Small cap with manipulation history

**For shareholding analysis:**
- `RELIANCE` - Clear promoter holding
- `INFY` - Good institutional holding
- `TATAMOTORS` - Mixed ownership pattern

---

## 📊 Expected Response Times

- Stock info: ~1-2 seconds
- News: ~2-3 seconds
- Shareholding: ~3-5 seconds
- Market data (OHLCV): ~2-3 seconds
- Delivery data: ~10-30 seconds (fetches from NSE)
- Patterns: ~5-10 seconds
- Risk analysis: ~10-15 seconds
- Complete analysis: ~20-40 seconds

---

## 🐛 Troubleshooting

### Error: "Ticker not found"
- Make sure you're using NSE symbols (without .NS suffix for most routes)
- Try with `.NS` suffix for Yahoo Finance routes

### Error: "No data available"
- Stock might be delisted or suspended
- Try a different stock symbol
- Check if market is open (for real-time data)

### Slow responses
- Delivery data fetching can be slow (NSE rate limiting)
- Complete analysis combines multiple sources
- Consider using quick analysis for faster results

---

## 🎉 Happy Testing!

Start with simple routes and gradually test more complex ones. The interactive docs at `http://localhost:8000/docs` are your best friend for testing!
