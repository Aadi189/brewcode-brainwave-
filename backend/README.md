# 🧠 BrewCode Brainwave - AI-Powered Stock Risk Intelligence System

## 🎯 Project Overview

An **AI-enhanced multi-agent risk detection system** that combines traditional rule-based agents with **OnDemand AI's LLM capabilities** to detect stock market manipulation and pump-and-dump schemes in Indian markets.

### Built for OnDemand Hackathon 2026

---

## ✅ Hackathon Requirements Fulfilled

| Requirement | Implementation | Status |
|-------------|----------------|--------|
| **3+ Custom Tools** | Sentiment Analyzer, Chart Pattern Analyzer, Risk Prediction Engine | ✅ |
| **6+ Agents** | Retail Trap, Delivery Spike, Microstructure, Bulk/Block Deals, Narrative Risk, Misinformation | ✅ |
| **Chat API (Mandatory)** | OnDemand Chat API for sentiment analysis & predictions | ✅ |
| **Media API (Mandatory)** | OnDemand Media API for chart pattern analysis | ✅ |
| **Plugin/External APIs** | NSE, BSE, Yahoo Finance, Google News | ✅ |

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    BrewCode Brainwave Risk System                        │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │               MULTI-AGENT SYSTEM (6 Specialized Agents)            │ │
│  ├────────────────────────────────────────────────────────────────────┤ │
│  │                                                                     │ │
│  │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐               │ │
│  │  │   Agent 1    │ │   Agent 2    │ │   Agent 3    │               │ │
│  │  │ Retail Trap  │ │  Delivery    │ │Microstructure│               │ │
│  │  │   Detector   │ │    Spike     │ │ Manipulation │               │ │
│  │  └──────────────┘ └──────────────┘ └──────────────┘               │ │
│  │                                                                     │ │
│  │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐               │ │
│  │  │   Agent 4    │ │   Agent 5    │ │   Agent 6    │               │ │
│  │  │  Bulk/Block  │ │  Narrative   │ │Misinformation│               │ │
│  │  │    Deals     │ │     Risk     │ │   Detector   │               │ │
│  │  └──────────────┘ └──────────────┘ └──────────────┘               │ │
│  │                                                                     │ │
│  │                         ▼ Base Risk Score                          │ │
│  └────────────────────────────────────────────────────────────────────┘ │
│                                  │                                       │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │            ONDEMAND AI ENHANCEMENT LAYER (3 Custom Tools)          │ │
│  ├────────────────────────────────────────────────────────────────────┤ │
│  │                                                                     │ │
│  │  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐      │ │
│  │  │   Tool 1        │ │   Tool 2        │ │   Tool 3        │      │ │
│  │  │   Sentiment     │ │  Chart Pattern  │ │ Risk Prediction │      │ │
│  │  │   Analyzer      │ │    Analyzer     │ │    Engine       │      │ │
│  │  │  (Chat API)     │ │  (Media API)    │ │  (Chat API)     │      │ │
│  │  └─────────────────┘ └─────────────────┘ └─────────────────┘      │ │
│  │                                                                     │ │
│  └────────────────────────────────────────────────────────────────────┘ │
│                                  │                                       │
│                    ▼ Final Combined Score (AI-Enhanced)                  │
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │                    ENHANCED RISK ASSESSMENT                         │ │
│  │  • Final Risk Score (0-100) & Level (LOW/MEDIUM/HIGH/CRITICAL)     │ │
│  │  • Manipulation Type & Red Flags                                    │ │
│  │  • Predicted Outcome & Timeline                                     │ │
│  │  • AI-Generated Explanation & Recommendations                       │ │
│  └────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 🤖 The 6 Specialized Agents

### Agent 1: Retail Trap Detector 🎯
**Purpose:** Identifies patterns where retail investors accumulate shares while institutional investors (FII/DII) exit.

**Signals Detected:**
- QoQ retail shareholding increase with FII/DII decrease
- Multi-quarter gradual institutional exit patterns (3-4 quarters)
- Severe FII exit (>5% decrease)
- Dual institutional exit (both FII and DII exiting)

---

### Agent 2: Delivery Spike Detector 📦
**Purpose:** Detects high delivery percentages without corresponding price appreciation, indicating potential accumulation before a dump.

**Signals Detected:**
- High delivery (>70%) with minimal price gain (<2%)
- Sustained high delivery over multiple days
- Delivery spike without price response

---

### Agent 3: Microstructure Manipulation Detector 📊
**Purpose:** Analyzes candlestick patterns across multiple timeframes (10min, 15min, 30min) to detect price manipulation.

**Signals Detected:**
- Excessive wicks (wick-to-body ratio > 3)
- Volume-price divergence
- Repeated upper wick rejections
- Doji patterns with high volume

---

### Agent 4: Bulk/Block Deals Detector 💼
**Purpose:** Monitors large bulk and block deals for manipulation patterns.

**Signals Detected:**
- High deal concentration (>10 deals)
- Circular trading (same client buying AND selling)
- Coordinated selling (3+ sellers on same day)
- Sell-heavy activity

---

### Agent 5: Narrative Risk Detector 📰
**Purpose:** Detects headline sentiment excess, hype language, and coordinated narrative pushing.

**Signals Detected:**
- Hype language (moon, rocket, guaranteed, multibagger)
- Sentiment excess (>70% highly positive articles)
- Coordinated narrative across sources
- Article flood (>15 articles)

---

### Agent 6: Misinformation Detector 🔍
**Purpose:** Assesses misinformation probability and source credibility.

**Signals Detected:**
- Low source credibility
- Low credibility language (anonymous sources, unconfirmed)
- Information inconsistency
- Missing source attribution

---

## 🛠️ The 3 Custom Tools (OnDemand AI)

### Tool 1: Sentiment Analyzer Tool 💬
**API:** OnDemand Chat API (Mandatory)
**Purpose:** Analyzes financial news sentiment with domain-specific context and manipulation detection.

**Features:**
- Domain-specific financial sentiment analysis
- Hype language detection with custom keywords
- Source credibility scoring (trusted vs untrusted sources)
- Manipulation indicator scoring
- Coordinated narrative detection

---

### Tool 2: Chart Pattern Analyzer Tool 📈
**API:** OnDemand Media API (Mandatory)  
**Purpose:** Analyzes candlestick charts for visual manipulation patterns.

**Features:**
- Rule-based pattern detection
- Visual chart description analysis via LLM
- Multi-timeframe correlation
- Manipulation pattern classification

---

### Tool 3: Risk Prediction Engine Tool 🔮
**API:** OnDemand Chat API
**Purpose:** Predicts manipulation outcomes and timelines using AI.

**Features:**
- Historical pattern matching
- Outcome prediction (pump_and_dump, legitimate, etc.)
- Timeline estimation
- Confidence scoring
- Monitoring point generation

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 2. Configure Environment
Create/update `.env` file:
```bash
# OnDemand AI Platform Configuration (Required)
ONDEMAND_API_KEY="your_ondemand_api_key"
ONDEMAND_BASE_URL="https://api.on-demand.io/"

# Optional - Supabase for user auth
SUPABASE_URL="your_supabase_url"
SUPABASE_KEY="your_supabase_key"
```

### 3. Start the Server
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### 4. Open FastAPI Docs
Navigate to: **http://localhost:8000/docs**

---

## 📡 API Routes for Demo Testing

### Access Swagger UI
Open **http://localhost:8000/docs** in your browser to access the interactive API documentation.

---

## 🧪 Demo Test Cases (FastAPI /docs)

### 1. Health Check
**Route:** `GET /api/ai-enhanced/health`
**Parameters:** None
**Purpose:** Verify OnDemand AI connection is working

**Expected Response:**
```json
{
  "status": "healthy",
  "ondemand_connected": true,
  "api_key_configured": true,
  "test_response": "OK",
  "timestamp": "2026-01-17T00:10:00"
}
```

---

### 2. AI-Enhanced Full Analysis ⭐ (Main Demo Route)
**Route:** `GET /api/ai-enhanced/analyze/{symbol}`

**Demo Parameters:**
| Parameter | Value | Description |
|-----------|-------|-------------|
| `symbol` (path) | `RELIANCE` | Stock symbol |
| `use_ai` (query) | `true` | Enable OnDemand AI |
| `ai_weight` (query) | `0.3` | AI score weight (0-1) |
| `enable_predictions` (query) | `true` | Enable outcome predictions |
| `enable_sentiment` (query) | `true` | Enable sentiment analysis |
| `include_shareholding` (query) | `true` | Include Agent 1 |
| `include_delivery` (query) | `true` | Include Agent 2 |
| `include_microstructure` (query) | `true` | Include Agent 3 |
| `include_deals` (query) | `true` | Include Agent 4 |
| `include_news` (query) | `true` | Include Agents 5 & 6 |

**Test URL:**
```
/api/ai-enhanced/analyze/RELIANCE?use_ai=true&ai_weight=0.3&enable_predictions=true
```

**Other good symbols to test:** `TCS`, `WIPRO`, `INFY`, `HDFCBANK`

---

### 3. Quick AI Scan (Fast Demo)
**Route:** `GET /api/ai-enhanced/quick-scan/{symbol}`

**Demo Parameters:**
| Parameter | Value |
|-----------|-------|
| `symbol` (path) | `TCS` |

**Test URL:**
```
/api/ai-enhanced/quick-scan/TCS
```

**Purpose:** Fast sentiment-based analysis (2-3 seconds) - great for quick demos!

---

### 4. Batch Analysis
**Route:** `POST /api/ai-enhanced/batch-analyze`

**Demo Parameters (Query):**
| Parameter | Value |
|-----------|-------|
| `symbols` | `RELIANCE` |
| `symbols` | `TCS` |
| `symbols` | `WIPRO` |
| `quick_mode` | `true` |

**Test URL:**
```
/api/ai-enhanced/batch-analyze?symbols=RELIANCE&symbols=TCS&symbols=WIPRO&quick_mode=true
```

---

### 5. Traditional Multi-Agent Analysis (No AI)
**Route:** `GET /api/multi-agent/analyze/{symbol}`

**Demo Parameters:**
| Parameter | Value |
|-----------|-------|
| `symbol` (path) | `INFY` |

**Test URL:**
```
/api/multi-agent/analyze/INFY
```

**Purpose:** Shows base 6-agent analysis without OnDemand AI enhancement - useful for comparison!

---

### 6. Get Agent Weights
**Route:** `GET /api/multi-agent/weights`

**Parameters:** None

**Purpose:** Shows current agent weights (expert + learned blending)

---

### 7. Agent Information
**Route:** `GET /api/multi-agent/agent-info`

**Parameters:** None

**Purpose:** Get detailed info about all 6 agents and their capabilities

---

## 📊 Demo Script for Judges

### Step 1: Show OnDemand Connection
```bash
curl http://localhost:8000/api/ai-enhanced/health
```
✅ Proves OnDemand API is connected and working

### Step 2: Traditional Analysis (Base Agents)
```bash
curl http://localhost:8000/api/multi-agent/analyze/RELIANCE
```
✅ Shows 6 agents working independently

### Step 3: AI-Enhanced Analysis
```bash
curl "http://localhost:8000/api/ai-enhanced/analyze/RELIANCE?use_ai=true"
```
✅ Shows OnDemand AI enhancement with:
- LLM-powered manipulation detection
- AI sentiment analysis  
- Outcome predictions
- Natural language explanations

### Step 4: Compare Scores
- **Base Risk Score:** From traditional agents
- **AI Manipulation Score:** From OnDemand tools
- **Final Risk Score:** Blended combination

### Step 5: Batch Processing
```bash
curl -X POST "http://localhost:8000/api/ai-enhanced/batch-analyze?symbols=RELIANCE&symbols=TCS&symbols=WIPRO&quick_mode=true"
```
✅ Shows scalable multi-stock analysis

---

## 📁 Project Structure

```
backend/
├── app/
│   ├── ai/
│   │   ├── ondemand_client.py          # ⭐ OnDemand API client
│   │   ├── ai_enhanced_risk_system.py  # ⭐ AI-enhanced system
│   │   └── multi_agent_risk_system.py  # ⭐ 6 Agents implementation
│   ├── api/
│   │   ├── ai_enhanced_routes.py       # ⭐ AI-enhanced endpoints
│   │   └── multi_agent_analysis.py     # Multi-agent endpoints
│   ├── tools/
│   │   ├── sentiment_analyzer_tool.py  # ⭐ Custom Tool 1 (Chat API)
│   │   ├── chart_pattern_analyzer_tool.py  # ⭐ Custom Tool 2 (Media API)
│   │   ├── risk_prediction_engine_tool.py  # ⭐ Custom Tool 3 (Chat API)
│   │   └── tool_registry.py            # Tool management
│   ├── scraping/                        # Data scrapers
│   └── models/                          # Pydantic models
├── test_ondemand.py                     # ⭐ Requirement verification
├── requirements.txt
└── main.py                              # FastAPI app
```

---

## 🔑 Key Technical Highlights

### OnDemand API Integration
- **Session-based Chat API:** Creates sessions, submits queries
- **Proper Authentication:** Uses `apikey` header
- **Multiple Endpoints:** Sentiment, manipulation detection, predictions

### Intelligent Aggregation
- **Dynamic Weight Assignment:** Each agent has configurable weights
- **Co-occurrence Amplification:** Multiple signals = amplified risk
- **Drawdown-based Learning:** System learns from historical outcomes

### Graceful Degradation
- Falls back to traditional analysis if OnDemand unavailable
- Error handling with meaningful defaults
- Each component can fail independently

---

## 📈 Performance Metrics

| Operation | Response Time |
|-----------|--------------|
| Health Check | ~1 second |
| Quick Scan | ~3-5 seconds |
| Full Analysis | ~8-15 seconds |
| Batch (5 stocks) | ~15-30 seconds |

---

## 🏆 Why This Project Stands Out

1. **Real Problem:** Stock manipulation costs investors billions
2. **Hybrid Intelligence:** Rules + AI = Best of both worlds
3. **OnDemand Showcase:** Demonstrates platform capabilities
4. **Production-Ready:** Scalable, tested, documented
5. **Explainable AI:** Clear reasoning, not a black box
6. **Indian Market Focus:** Tailored for NSE/BSE

---

## 📞 Quick Reference

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/ai-enhanced/health` | GET | Check OnDemand connection |
| `/api/ai-enhanced/analyze/{symbol}` | GET | Full AI-enhanced analysis |
| `/api/ai-enhanced/quick-scan/{symbol}` | GET | Fast sentiment scan |
| `/api/ai-enhanced/batch-analyze` | POST | Multi-stock analysis |
| `/api/multi-agent/analyze/{symbol}` | GET | Traditional 6-agent analysis |
| `/api/multi-agent/weights` | GET | View agent weights |
| `/api/multi-agent/agent-info` | GET | Agent documentation |

---

## 🎉 Ready for Hackathon!

```
✅ 3+ Custom Tools (Sentiment, Chart, Prediction)
✅ 6+ Agents (Retail Trap, Delivery, Microstructure, Bulk/Block, Narrative, Misinformation)
✅ Chat API Integration (Mandatory)
✅ Media API Integration (Mandatory)
✅ External APIs (NSE, BSE, Yahoo, Google News)
```

**Built with ❤️ by BrewCode Brainwave for OnDemand Hackathon 2026** 🚀
