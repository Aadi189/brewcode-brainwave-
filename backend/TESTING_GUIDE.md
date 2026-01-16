# 🧪 Testing Guide - FastAPI Docs (/docs)

## 📍 Step 1: Start Server & Open Docs

1. **Start the server:**
   ```bash
   ./start_server.sh
   ```

2. **Open in browser:**
   ```
   http://localhost:8000/docs
   ```

---

## 🎯 Routes to Test (Multi-Agent System)

### **Route 1: Get Agent Information** ⭐ START HERE
**Endpoint:** `GET /api/multi-agent/agent-info`

**What to do:**
1. Find "Multi-Agent Risk Analysis" section
2. Click on `GET /api/multi-agent/agent-info`
3. Click "Try it out"
4. Click "Execute"
5. ✅ You'll see info about all 6 agents!

**No parameters needed!** Just click Execute.

**Expected Response:**
```json
{
  "agents": [
    {
      "type": "retail_trap",
      "name": "Retail Trap Detector",
      "description": "Monitors shareholding patterns...",
      "signals": [...]
    },
    ...
  ]
}
```

---

### **Route 2: Analyze a Stock** 🔥 MAIN FEATURE
**Endpoint:** `GET /api/multi-agent/analyze/{symbol}`

**What to do:**
1. Click on `GET /api/multi-agent/analyze/{symbol}`
2. Click "Try it out"
3. **Enter parameters:**

#### **Parameters to Enter:**

| Parameter | Value | Description |
|-----------|-------|-------------|
| **symbol** | `RELIANCE` | Stock symbol (REQUIRED) |
| include_shareholding | `true` | ✅ Keep checked |
| include_delivery | `true` | ✅ Keep checked |
| include_microstructure | `true` | ✅ Keep checked |
| include_deals | `true` | ✅ Keep checked |
| include_news | `true` | ✅ Keep checked |

4. Click "Execute"
5. Wait 5-10 seconds (it's fetching data from multiple sources)
6. ✅ You'll get a complete risk analysis!

#### **Example Symbols to Try:**
- `RELIANCE` - Reliance Industries
- `TCS` - Tata Consultancy Services
- `INFY` - Infosys
- `WIPRO` - Wipro
- `HDFCBANK` - HDFC Bank
- `TATAMOTORS` - Tata Motors
- `ADANIPORTS` - Adani Ports

**Expected Response:**
```json
{
  "symbol": "RELIANCE",
  "timestamp": "2026-01-16T20:00:00",
  "overall_risk_score": 45.5,
  "risk_level": "MEDIUM",
  "agent_signals": [
    {
      "agent_type": "retail_trap",
      "risk_score": 35.0,
      "confidence": 0.8,
      "signals": [
        "QoQ Retail Trap: Retail +3.2%, FII -2.1%"
      ]
    }
  ],
  "agent_contributions": {
    "retail_trap": 5.6,
    "narrative_risk": 8.2
  },
  "explanation": "Overall Risk Score: 45.5/100\n\nKey Risk Factors:\n...",
  "data_sources_used": ["Shareholding Pattern", "News Articles"]
}
```

---

### **Route 3: Get Current Weights**
**Endpoint:** `GET /api/multi-agent/weights`

**What to do:**
1. Click on `GET /api/multi-agent/weights`
2. Click "Try it out"
3. Click "Execute"

**No parameters needed!**

**Expected Response:**
```json
{
  "weights": {
    "retail_trap": 0.20,
    "delivery_spike": 0.15,
    "microstructure": 0.15,
    "bulk_block_deals": 0.18,
    "narrative_risk": 0.17,
    "misinformation": 0.15
  },
  "last_updated": "2026-01-16T20:00:00",
  "total_feedback_records": 0
}
```

---

### **Route 4: Provide Feedback** (Learning System)
**Endpoint:** `POST /api/multi-agent/feedback`

**What to do:**
1. Click on `POST /api/multi-agent/feedback`
2. Click "Try it out"
3. **Edit the Request Body:**

```json
{
  "symbol": "RELIANCE",
  "actual_outcome": "pump_and_dump"
}
```

**Parameters:**
- `symbol`: Stock symbol you analyzed
- `actual_outcome`: One of:
  - `"pump_and_dump"` - It was a scam
  - `"legitimate"` - It was a false positive
  - `"uncertain"` - Not sure yet

4. Click "Execute"

**Expected Response:**
```json
{
  "status": "success",
  "message": "Feedback processed and agent weights updated",
  "symbol": "RELIANCE",
  "outcome": "pump_and_dump"
}
```

---

## 🎬 Complete Testing Workflow

### **Scenario: Analyze RELIANCE stock**

1. **Get Agent Info** (to see what agents do)
   - Route: `GET /api/multi-agent/agent-info`
   - Click Execute
   - ✅ See all 6 agents

2. **Analyze RELIANCE**
   - Route: `GET /api/multi-agent/analyze/{symbol}`
   - Enter: `RELIANCE`
   - Keep all checkboxes checked
   - Click Execute
   - ✅ Get risk score (e.g., 67.5/100, HIGH risk)

3. **Check Agent Weights**
   - Route: `GET /api/multi-agent/weights`
   - Click Execute
   - ✅ See current weights

4. **Provide Feedback** (optional - for learning)
   - Route: `POST /api/multi-agent/feedback`
   - Enter:
     ```json
     {
       "symbol": "RELIANCE",
       "actual_outcome": "pump_and_dump"
     }
     ```
   - Click Execute
   - ✅ System learns and adjusts weights

5. **Check Weights Again**
   - Route: `GET /api/multi-agent/weights`
   - ✅ See updated weights!

---

## 📊 Understanding the Response

### **Risk Score Interpretation:**

| Score | Risk Level | Meaning |
|-------|-----------|---------|
| 0-24 | LOW | ✅ Relatively safe |
| 25-49 | MEDIUM | ⚡ Monitor closely |
| 50-74 | HIGH | ⚠️ High caution |
| 75-100 | CRITICAL | ⛔ Avoid completely |

### **Agent Contributions:**
Shows how much each agent contributed to the overall score:
```json
"agent_contributions": {
  "retail_trap": 12.0,      // Retail trap detected
  "narrative_risk": 10.2,   // Hype in news
  "delivery_spike": 8.5     // High delivery without price gain
}
```

### **Co-occurrence Amplifications:**
When multiple agents detect risk together:
```json
"co_occurrence_amplifications": [
  {
    "agent1": "retail_trap",
    "agent2": "narrative_risk",
    "amplification_bonus": 5.8  // Extra points added
  }
]
```

---

## 🎯 Quick Examples

### **Example 1: Full Analysis**
```
Route: GET /api/multi-agent/analyze/{symbol}
Symbol: RELIANCE
All checkboxes: ✅ checked
```

### **Example 2: Only Shareholding + News**
```
Route: GET /api/multi-agent/analyze/{symbol}
Symbol: TCS
include_shareholding: ✅
include_delivery: ❌
include_microstructure: ❌
include_deals: ❌
include_news: ✅
```

### **Example 3: Only Technical Analysis**
```
Route: GET /api/multi-agent/analyze/{symbol}
Symbol: INFY
include_shareholding: ❌
include_delivery: ✅
include_microstructure: ✅
include_deals: ✅
include_news: ❌
```

---

## ⚠️ Important Notes

1. **Analysis takes 5-10 seconds** - Be patient! It's fetching data from:
   - Screener.in (shareholding)
   - NSE (delivery, bulk/block deals)
   - Yahoo Finance (OHLCV data)
   - Google News & Yahoo News

2. **Some data might not be available** for all stocks:
   - New listings might not have shareholding data
   - Small-cap stocks might not have bulk/block deals
   - The system handles this gracefully

3. **Data sources used** are shown in the response:
   ```json
   "data_sources_used": [
     "Shareholding Pattern",
     "Delivery Data",
     "News Articles"
   ]
   ```

---

## 🚀 Pro Tips

1. **Start with popular stocks** (RELIANCE, TCS, INFY) - more data available
2. **Try different combinations** of agents to see how scores change
3. **Compare multiple stocks** to see relative risk levels
4. **Use feedback** to improve the system over time
5. **Check the explanation** field for detailed reasoning

---

## 🎉 You're Ready!

Now you can:
1. Start the server: `./start_server.sh`
2. Open: http://localhost:8000/docs
3. Test the routes above
4. Impress at your hackathon! 🏆
