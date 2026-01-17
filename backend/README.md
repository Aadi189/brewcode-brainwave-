# 🧠 BrewCode Brainwave

> **MarketLens:AI-Powered Risk Intelligence System for Indian Stock Markets**  


[![Python](https://img.shields.io/badge/Python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.68+-green.svg)](https://fastapi.tiangolo.com/)
[![OnDemand AI](https://img.shields.io/badge/AI-OnDemand_Platform-purple.svg)](https://on-demand.io/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🚀 The Problem
Retail investors in India lose billions annually to sophisticated **pump-and-dump schemes**. They lack the institutional-grade tools to spot:
*   **Retail Traps**: Institutions exiting while retail investors buy.
*   **Manipulation**: Fake delivery volumes and circular trading.
*   **Coordinated Hype**: "To the moon" narratives masking a dump.

## 💡 The Solution
**MarketLens** is a hybrid intelligence system that combines **6 specialized rule-based agents** with **3 advanced AI tools** powered by the **OnDemand Platform**. It doesn't just show data; it predicts risk, exposes manipulation, and explains it in plain English.

---


| Category | Requirement | Implementation | Status |
|----------|-------------|----------------|--------|
| **Custom Tools** | Min. 3 | **3 Custom Tools** (Sentiment, Chart, Prediction) | ✅ **Met** |
| **Multi-Agent** | Min. 6 | **6 Specialized Agents** (defined below) | ✅ **Met** |
| **Chat API** | Mandatory | Integrated for Sentiment & Prediction | ✅ **Met** |
| **Media API** | Mandatory | Integrated for Visual Chart Analysis | ✅ **Met** |
| **Ext. APIs** | Optional | NSE, BSE, Yahoo Finance, Google News | ✅ **Met** |

---

## 🏗️ System Architecture

Our system uses a **Hybrid Architecture**:
1.  **Layer 1 (The Watchdogs)**: 6 deterministic agents gather hard data signals.
2.  **Layer 2 (The Brain)**: OnDemand AI analyzes these signals for patterns, context, and visual anomalies.

```ascii
┌──────────────────────┐      ┌─────────────────────────────┐
│   Data Sources       │      │   6 Specialized Agents      │
│ (NSE, BSE, News...)  │─────▶│ (Retail Trap, Delivery...)  │
└──────────────────────┘      └─────────────┬───────────────┘
                                            │ Signals
                                            ▼
┌──────────────────────┐      ┌─────────────────────────────┐
│   OnDemand AI        │      │   3 Custom AI Tools         │
│ (Chat & Media APIs)  │◀─────│ (Sentiment, Chart, Risk)    │
└──────────────────────┘      └─────────────┬───────────────┘
                                            │ Insights
                                            ▼
                              ┌─────────────────────────────┐
                              │   FINAL RISK INTELLIGENCE   │
                              │ Score • Prediction • Advice │
                              └─────────────────────────────┘
```

---

## 🤖 The 6 Specialized Agents
*Rule-based experts monitoring specific market signals:*

1.  🎯 **Retail Trap Detector**: Identifies when retail ownership rises while FII/DIIs (Institutions) exit.
2.  📦 **Delivery Spike Detector**: Spots high delivery % spikes with no price movement (silent accumulation).
3.  📊 **Microstructure Agent**: Detects intraday price manipulation, long wicks, and volume anomalies.
4.  💼 **Bulk/Block Deal Agent**: Tracks insider activity, circular trading, and sell-heavy pressure.
5.  📰 **Narrative Risk Agent**: Detects "hype" keywords (*rocket, multibagger, guaranteed*) in news.
6.  🔍 **Misinformation Agent**: Scores news source credibility and flags unverified rumors.

## 🛠️ The 3 Custom AI Tools
*Powered by OnDemand AI Platform:*

1.  💬 **Sentiment Analyzer Tool** (Chat API):
    *   Goes beyond simple positive/negative.
    *   Detects **manipulative intent** and coordinated media campaigns.
2.  📈 **Chart Pattern Analyzer** (Media API):
    *   Uses LLMs to "see" chart patterns.
    *   Identifies visual anomalies like **wick rejection** and artificial price support.
3.  🔮 **Risk Prediction Engine** (Chat API):
    *   Predicts the **probability of a dump** within X days.
    *   Generates confidence scores and alternative scenarios.

---

## 🏁 Quick Start

### 1. Prerequisites
*   Python 3.10+
*   OnDemand API Key

### 2. Installation
```bash
# Clone the repo
git clone https://github.com/Aadi189/brainwave-brewcode-.git
cd brewcode-brainwave/backend

# Install dependencies
pip install -r requirements.txt
```

### 3. Configuration
Create a `.env` file in the `backend` directory:
```env
ONDEMAND_API_KEY=your_api_key_here
ONDEMAND_BASE_URL=https://api.on-demand.io/
```

### 4. Run Server
```bash
uvicorn main:app --reload
```
Access the API Docs at: `http://localhost:8000/docs`

---

## 📡 Key API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/ai-enhanced/analyze/{symbol}` | **Full Analysis**: Combines Agents + AI Tools. |
| `GET` | `/api/ai-enhanced/quick-scan/{symbol}` | **Quick Scan**: Fast AI sentiment check. |
| `POST` | `/api/ai-enhanced/batch-analyze` | **Batch**: Analyze multiple stocks at once. |
| `GET` | `/api/multi-agent/analyze/{symbol}` | **Agent View**: Raw signals from the 6 agents. |

---

## � Why This Matters?
We built this to protect the **common investor**. While institutions have terminals and armies of analysts, retail investors are often the victims of manufactured hype. BrewCode Brainwave gives them an **AI-powered shield**.

