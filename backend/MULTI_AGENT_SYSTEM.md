# Multi-Agent Risk Detection System

## Overview

A sophisticated AI-powered risk detection system with **6 specialized agents** that work together to identify potential pump-and-dump schemes and market manipulation in Indian stocks.

## Architecture

### System Components

```
┌─────────────────────────────────────────────────────────────┐
│                   Multi-Agent Risk System                    │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Agent 1    │  │   Agent 2    │  │   Agent 3    │      │
│  │ Retail Trap  │  │  Delivery    │  │Microstructure│      │
│  │   Detector   │  │    Spike     │  │ Manipulation │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Agent 4    │  │   Agent 5    │  │   Agent 6    │      │
│  │  Bulk/Block  │  │  Narrative   │  │Misinformation│      │
│  │    Deals     │  │     Risk     │  │   Detector   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                               │
│                          ▼                                    │
│              ┌──────────────────────┐                        │
│              │ Unified Risk         │                        │
│              │ Aggregation Engine   │                        │
│              │ • Dynamic Weights    │                        │
│              │ • Co-occurrence      │                        │
│              │ • Learning-based     │                        │
│              └──────────────────────┘                        │
│                          ▼                                    │
│              ┌──────────────────────┐                        │
│              │  Risk Score (0-100)  │                        │
│              │  Risk Level          │                        │
│              │  Detailed Explanation│                        │
│              └──────────────────────┘                        │
└─────────────────────────────────────────────────────────────┘
```

## The 6 Agents

### Agent 1: Retail Trap Detector 🎯

**Purpose**: Identifies patterns where retail investors accumulate shares while institutional investors exit.

**Signals Detected**:
- QoQ retail shareholding increase with FII/DII decrease
- Multi-quarter gradual institutional exit patterns (3-4 quarters)
- Severe FII exit (>5% decrease)
- Dual institutional exit (both FII and DII exiting)

**Weighting**:
- FII changes: **55%** weight
- DII changes: **45%** weight
- Rationale: FII movements are slightly more indicative of smart money

**Risk Scoring**:
- QoQ Retail Trap: Up to 40 points
- 3Q Institutional Exit: Up to 50 points
- Severe FII Exit: 30 points
- Dual Exit: 25 points

---

### Agent 2: Delivery Spike Detector 📦

**Purpose**: Detects high delivery percentages without corresponding price appreciation, indicating potential accumulation before a dump.

**Signals Detected**:
- High delivery (>70%) with minimal price gain (<2%)
- Sustained high delivery over multiple days
- Delivery spike (50% increase from baseline) without price response

**Risk Scoring**:
- High delivery + low price: Up to 35 points
- Sustained pattern: 40 points
- Delivery spike: 30 points

**Analysis Window**: Last 5 trading days

---

### Agent 3: Microstructure Manipulation Detector 📊

**Purpose**: Analyzes candlestick patterns across multiple timeframes to detect price manipulation.

**Timeframes Analyzed**:
- 10-minute candles
- 15-minute candles
- 30-minute candles

**Signals Detected**:
- Excessive wicks (wick-to-body ratio > 3) - indicates price rejection/manipulation
- Volume-price divergence (high volume, low price movement)
- Repeated upper wick rejections (selling pressure)
- Doji patterns with high volume (indecision/manipulation)
- Cross-timeframe manipulation (same pattern across all intervals)

**Risk Scoring**:
- Excessive wicks: Up to 25 points
- Volume divergence: 30 points
- Upper wick rejections: 20 points
- Doji patterns: 15 points
- Cross-timeframe: 35 points

---

### Agent 4: Bulk/Block Deals Detector 💼

**Purpose**: Monitors large bulk and block deals for manipulation patterns.

**Signals Detected**:
- High deal concentration (>10 deals)
- Circular trading (same client buying AND selling)
- Coordinated selling (3+ sellers on same day)
- Large block deals (>100K shares)
- Sell-heavy activity (sells > buys × 1.5)

**Risk Scoring**:
- High concentration: 25 points
- Circular trading: 40 points
- Coordinated selling: 30 points
- Large blocks: 20 points
- Sell-heavy: 25 points

---

### Agent 5: Narrative Risk Detector 📰

**Purpose**: Detects headline sentiment excess, hype language, and coordinated narrative pushing.

**Signals Detected**:
- Hype language (moon, rocket, guaranteed, multibagger, etc.)
- Sentiment excess (>70% highly positive articles)
- Headline uniformity (coordinated narrative)
- Article flood (>15 articles)
- Speculative language (could, might, rumor, etc.)

**Hype Keywords**:
```
moon, rocket, explosive, massive, huge gains, guaranteed,
sure shot, multibagger, next big thing, don't miss,
limited time, act now, urgent
```

**Risk Scoring**:
- Hype language: Up to 40 points
- Sentiment excess: 35 points
- Coordinated narrative: 30 points
- Article flood: 20 points
- Speculation: 15 points

---

### Agent 6: Misinformation Detector 🔍

**Purpose**: Assesses misinformation probability and source credibility.

**Trusted Sources**:
```
Reuters, Bloomberg, Economic Times, Business Standard,
Mint, Moneycontrol, LiveMint, Financial Express
```

**Signals Detected**:
- Low source credibility (untrusted > trusted sources)
- Low credibility language (anonymous sources, insider tip, unconfirmed)
- Information inconsistency (contradictory narratives)
- Social amplification without credible sources
- Missing source attribution

**Risk Scoring**:
- Low credibility: Up to 35 points
- Credibility red flags: 30 points
- Inconsistency: 25 points
- Social amplification: 30 points
- Missing attribution: 20 points

---

## Unified Risk Aggregation

### Dynamic Weight Assignment

Each agent has an initial weight that determines its contribution to the overall risk score:

| Agent | Initial Weight | Adjustable |
|-------|---------------|------------|
| Retail Trap | 20% | ✅ |
| Delivery Spike | 15% | ✅ |
| Microstructure | 15% | ✅ |
| Bulk/Block Deals | 18% | ✅ |
| Narrative Risk | 17% | ✅ |
| Misinformation | 15% | ✅ |

**Weight Calculation**:
```python
weighted_score = Σ (agent_risk_score × agent_weight × agent_confidence)
```

### Co-occurrence Amplification

When multiple agents detect risk simultaneously, the overall risk is amplified:

| Agent Pair | Amplification | Rationale |
|------------|---------------|-----------|
| Retail Trap + Narrative Risk | 1.3× | Retail trap with hype is highly suspicious |
| Retail Trap + Misinformation | 1.25× | Coordinated scheme indicator |
| Delivery Spike + Microstructure | 1.4× | Critical manipulation signal |
| Delivery Spike + Bulk/Block Deals | 1.35× | Accumulation before dump |
| Microstructure + Bulk/Block Deals | 1.3× | Price + deal manipulation |
| Narrative Risk + Misinformation | 1.5× | **Strongest pump signal** |

**Amplification Formula**:
```python
amplification_bonus = (risk_score_1 + risk_score_2) × (amplification_factor - 1.0) × 0.1
final_score = weighted_score + amplification_bonus
```

### Learning-based Weight Tuning

The system learns from feedback to improve accuracy over time.

**Feedback Mechanism**:
1. After analysis, users can provide outcome feedback:
   - `pump_and_dump`: Confirmed manipulation
   - `legitimate`: False positive
   - `uncertain`: Unclear outcome

2. System adjusts weights based on performance:
   - Good performance (>0.7): Increase weight by learning_rate × (performance - 0.7)
   - Poor performance (<0.3): Decrease weight by learning_rate × (0.3 - performance)
   - Learning rate: 0.1

3. Weights are normalized to sum to 1.0

4. Performance history is saved to `agent_weights.json`

**Weight Update Formula**:
```python
if performance > 0.7:
    adjustment = 0.1 × (performance - 0.7)
elif performance < 0.3:
    adjustment = -0.1 × (0.3 - performance)
else:
    adjustment = 0

new_weight = max(0.05, min(0.35, current_weight + adjustment))
```

### Risk Level Classification

| Risk Score | Risk Level | Action |
|------------|-----------|--------|
| 75-100 | CRITICAL | ⛔ Avoid completely |
| 50-74 | HIGH | ⚠️ High caution |
| 25-49 | MEDIUM | ⚡ Monitor closely |
| 0-24 | LOW | ✅ Relatively safe |

## API Endpoints

### 1. Analyze Stock

```http
GET /api/multi-agent/analyze/{symbol}
```

**Query Parameters**:
- `include_shareholding`: Include Agent 1 (default: true)
- `include_delivery`: Include Agent 2 (default: true)
- `include_microstructure`: Include Agent 3 (default: true)
- `include_deals`: Include Agent 4 (default: true)
- `include_news`: Include Agents 5 & 6 (default: true)

**Response**:
```json
{
  "symbol": "RELIANCE",
  "timestamp": "2026-01-16T19:30:00",
  "overall_risk_score": 67.5,
  "risk_level": "HIGH",
  "agent_signals": [
    {
      "agent_type": "retail_trap",
      "risk_score": 75.0,
      "confidence": 0.8,
      "signals": [
        "QoQ Retail Trap: Retail +5.2%, FII -3.1%, DII -2.8%",
        "Severe FII Exit: -5.5%"
      ],
      "metadata": {
        "retail_change": 5.2,
        "fii_change": -5.5,
        "dii_change": -2.8
      }
    }
  ],
  "agent_contributions": {
    "retail_trap": 12.0,
    "delivery_spike": 8.5,
    "narrative_risk": 10.2
  },
  "co_occurrence_amplifications": [
    {
      "agent1": "retail_trap",
      "agent2": "narrative_risk",
      "amplification_bonus": 5.8
    }
  ],
  "explanation": "Overall Risk Score: 67.5/100\n\nKey Risk Factors:\n• Retail Trap: 12.0 points\n  - QoQ Retail Trap detected\n  - Severe FII Exit\n...",
  "data_sources_used": [
    "Shareholding Pattern",
    "Delivery Data",
    "News Articles"
  ]
}
```

### 2. Provide Feedback

```http
POST /api/multi-agent/feedback
```

**Request Body**:
```json
{
  "symbol": "RELIANCE",
  "actual_outcome": "pump_and_dump",
  "agent_feedback": {
    "retail_trap": 0.9,
    "delivery_spike": 0.7,
    "narrative_risk": 0.85
  }
}
```

**Response**:
```json
{
  "status": "success",
  "message": "Feedback processed and agent weights updated",
  "symbol": "RELIANCE",
  "outcome": "pump_and_dump"
}
```

### 3. Get Current Weights

```http
GET /api/multi-agent/weights
```

**Response**:
```json
{
  "weights": {
    "retail_trap": 0.22,
    "delivery_spike": 0.14,
    "microstructure": 0.15,
    "bulk_block_deals": 0.18,
    "narrative_risk": 0.19,
    "misinformation": 0.12
  },
  "last_updated": "2026-01-16T19:30:00",
  "total_feedback_records": 45
}
```

### 4. Get Agent Info

```http
GET /api/multi-agent/agent-info
```

Returns detailed information about all agents and their capabilities.

## Usage Examples

### Example 1: Full Analysis

```python
import requests

response = requests.get(
    "http://localhost:8000/api/multi-agent/analyze/RELIANCE"
)

data = response.json()

print(f"Risk Score: {data['overall_risk_score']}")
print(f"Risk Level: {data['risk_level']}")
print(f"\n{data['explanation']}")
```

### Example 2: Selective Agent Analysis

```python
# Only run Agents 1, 2, and 5
response = requests.get(
    "http://localhost:8000/api/multi-agent/analyze/RELIANCE",
    params={
        "include_shareholding": True,
        "include_delivery": True,
        "include_microstructure": False,
        "include_deals": False,
        "include_news": True
    }
)
```

### Example 3: Provide Feedback

```python
# After confirming a pump-and-dump
requests.post(
    "http://localhost:8000/api/multi-agent/feedback",
    json={
        "symbol": "RELIANCE",
        "actual_outcome": "pump_and_dump"
    }
)
```

## Key Features

### ✅ Comprehensive Detection
- 6 specialized agents covering all manipulation aspects
- Multi-timeframe analysis (10min, 15min, 30min)
- Multi-quarter shareholding tracking (3-4 quarters)

### ✅ Intelligent Aggregation
- Dynamic weight assignment based on agent importance
- Co-occurrence amplification for correlated risks
- Confidence-weighted scoring

### ✅ Self-Learning System
- Learns from feedback to improve accuracy
- Adjusts agent weights based on performance
- Maintains performance history

### ✅ Explainable AI
- Detailed breakdown of risk factors
- Clear explanation of each signal
- Transparent scoring methodology

### ✅ Flexible & Modular
- Enable/disable individual agents
- Customizable thresholds
- Extensible architecture

## Performance Optimization

### Data Fetching
- Parallel data fetching from multiple sources
- Graceful degradation if sources fail
- Caching for repeated requests (can be added)

### Computation
- Efficient pandas operations
- Vectorized calculations
- Minimal memory footprint

## Future Enhancements

1. **Real-time Monitoring**: WebSocket support for live risk updates
2. **Historical Backtesting**: Validate agent performance on historical data
3. **Custom Agent Creation**: Allow users to define custom detection rules
4. **Ensemble Methods**: Combine multiple ML models for each agent
5. **Sentiment Analysis**: Integrate FinBERT for news sentiment
6. **Social Media Integration**: Add Reddit, Twitter analysis
7. **Alert System**: Automated alerts when risk exceeds threshold
8. **Visualization Dashboard**: Interactive risk visualization

## Technical Details

### Dependencies
- `pandas`: Data manipulation
- `numpy`: Numerical operations
- `yfinance`: Market data fetching
- `transformers`: Sentiment analysis (optional)
- `fastapi`: API framework

### File Structure
```
backend/
├── app/
│   ├── ai/
│   │   ├── multi_agent_risk_system.py  # Core system
│   │   └── risk_engine.py              # Legacy engine
│   ├── api/
│   │   └── multi_agent_analysis.py     # API endpoints
│   ├── scraping/
│   │   ├── shareholding_scraper.py
│   │   ├── delivery_scraper.py
│   │   ├── bulk_block_scraper.py
│   │   └── news_scraping.py
│   └── models/
│       └── models.py                   # Pydantic models
├── agent_weights.json                  # Learned weights (auto-generated)
└── main.py                             # FastAPI app
```

## Contributing

To add a new agent:

1. Create agent class inheriting base structure
2. Implement `analyze()` method returning `AgentSignal`
3. Add agent to `MultiAgentRiskSystem`
4. Update `INITIAL_AGENT_WEIGHTS`
5. Define co-occurrence amplifications
6. Update API documentation

## License

MIT License - BrewCode Brainwave 2026
