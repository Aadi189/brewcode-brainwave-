# Quick Integration Guide - Sentiment Analysis

## Installation

```bash
# Install VADER (lightweight, recommended for hackathon)
pip install vaderSentiment

# OR install FinBERT (more accurate but requires transformers)
pip install transformers torch
```

## Integration Steps

### Step 1: Update Risk Analyzer

Add sentiment analysis to `app/scraping/risk_analyzer.py`:

```python
# At the top of risk_analyzer.py
from app.scraping.sentiment_analyzer import NewsSentimentAnalyzer

class RiskAnalyzer:
    def __init__(self):
        self.risk_thresholds = {
            "LOW": (0, 3),
            "MEDIUM": (3, 6),
            "HIGH": (6, 8),
            "CRITICAL": (8, 10),
        }
        # Add sentiment analyzer
        self.sentiment_analyzer = NewsSentimentAnalyzer(use_finbert=False)
    
    def calculate_risk_score(self, patterns, shareholding=None, news=None):
        """
        Calculate overall risk score from detected patterns
        Score range: 0-10
        """
        score = 0.0
        
        # Existing pattern-based scoring
        for pattern in patterns:
            if pattern["severity"] == "CRITICAL":
                score += 3.0
            elif pattern["severity"] == "HIGH":
                score += 2.0
            elif pattern["severity"] == "MEDIUM":
                score += 1.0
            else:
                score += 0.5
        
        # NEW: Add shareholding-based risk
        if shareholding:
            if shareholding.retail_trap_risk:
                score += 3.0  # Critical retail trap
            elif shareholding.institutional_exit_pattern:
                score += 2.0  # Institutional exit
            
            if shareholding.pledge and shareholding.pledge > 50:
                score += 1.5  # High promoter pledge
        
        # NEW: Add sentiment-based risk
        if news:
            sentiment_result = self.sentiment_analyzer.analyze_news_articles(news)
            sentiment_risk = self.sentiment_analyzer.get_sentiment_risk_contribution(
                sentiment_result['sentiment_score']
            )
            score += sentiment_risk
        
        return min(score, 10.0)  # Cap at 10
```

### Step 2: Update Complete Analysis Route

Modify `app/api/analysis_routes.py`:

```python
# In get_complete_analysis function, update the risk analysis section:

# 6. Risk analysis
try:
    analyzer = RiskAnalyzer()
    
    # Pass shareholding and news to the analyzer
    report = analyzer.generate_report(
        symbol, 
        data, 
        patterns,
        shareholding=result["shareholding"],  # NEW
        news=result["news"]  # NEW
    )
    
    result["risk_report"] = RiskReport(
        symbol=report["symbol"],
        timestamp=report["timestamp"],
        risk_score=report["risk_score"],
        risk_level=report["risk_level"],
        latest_price=report["latest_price"],
        price_change_pct=report["price_change_pct"],
        volume=report["volume"],
        delivery_pct=report["delivery_pct"],
        patterns_detected=report["patterns_detected"],
        patterns=pattern_models,
        explanation=report["explanation"],
    )
except Exception as e:
    errors.append(f"Risk analysis error: {str(e)}")
```

### Step 3: Update generate_report in RiskAnalyzer

```python
def generate_report(self, symbol, data, patterns, shareholding=None, news=None):
    """
    Generate complete risk analysis report
    """
    # Calculate risk score with new parameters
    risk_score = self.calculate_risk_score(patterns, shareholding, news)
    risk_level = self.get_risk_level(risk_score)
    
    # ... rest of the function
    
    # Update explanation to include sentiment
    explanation = self.generate_explanation(
        patterns, 
        risk_level, 
        risk_score,
        shareholding=shareholding,  # NEW
        news=news  # NEW
    )
    
    return {
        "symbol": symbol,
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "risk_score": round(risk_score, 2),
        "risk_level": risk_level,
        "latest_price": latest_price,
        "price_change_pct": price_change_pct,
        "volume": volume_str,
        "delivery_pct": delivery_pct_str,
        "patterns_detected": len(patterns),
        "explanation": explanation,
    }
```

### Step 4: Update generate_explanation

```python
def generate_explanation(self, patterns, risk_level, score, shareholding=None, news=None):
    """
    Generate AI-like explanation in simple English
    """
    explanation = []
    
    # Risk level intro
    if risk_level == "CRITICAL":
        explanation.append("🚨 CRITICAL RISK: This stock shows severe manipulation patterns.")
    elif risk_level == "HIGH":
        explanation.append("⚠️ HIGH RISK: Multiple red flags detected.")
    elif risk_level == "MEDIUM":
        explanation.append("⚠️ MODERATE RISK: Some concerning patterns found.")
    else:
        explanation.append("✅ LOW RISK: No major manipulation patterns detected.")
    
    # Shareholding insights
    if shareholding:
        if shareholding.retail_trap_risk:
            explanation.append(
                f"\n🎯 RETAIL TRAP DETECTED: Institutions have reduced holdings by "
                f"{abs(shareholding.fii_trend_3q)}% (FII) over 3 quarters while retail "
                f"increased by {shareholding.retail_trend_3q}%. This is a classic distribution pattern."
            )
        elif shareholding.institutional_exit_pattern:
            explanation.append(
                f"\n📉 Institutional Exit: FII/DII have been gradually reducing positions "
                f"over multiple quarters. Exercise caution."
            )
    
    # Sentiment insights
    if news:
        sentiment_result = self.sentiment_analyzer.analyze_news_articles(news)
        if sentiment_result['sentiment_score'] < -0.3:
            explanation.append(
                f"\n📰 News Sentiment: Predominantly NEGATIVE ({sentiment_result['negative_count']} "
                f"negative articles out of {sentiment_result['total_articles']}). "
                f"This adds to the risk."
            )
        elif sentiment_result['sentiment_score'] > 0.3:
            explanation.append(
                f"\n📰 News Sentiment: Predominantly POSITIVE ({sentiment_result['positive_count']} "
                f"positive articles). However, verify if fundamentals support the optimism."
            )
    
    # Pattern details (existing code)
    if patterns:
        explanation.append("\n\n📊 Detected Patterns:")
        for pattern in patterns[:5]:  # Top 5 patterns
            explanation.append(f"  • {pattern['pattern']}: {pattern['detail']}")
    
    return "\n".join(explanation)
```

## Testing

```bash
# Test sentiment analyzer standalone
python -m app.scraping.sentiment_analyzer

# Test complete analysis with sentiment
curl "http://localhost:8000/api/analysis/complete/SUZLON?company=Suzlon%20Energy"
```

## Expected Output

```json
{
  "symbol": "SUZLON",
  "risk_score": 7.5,
  "risk_level": "HIGH",
  "explanation": "⚠️ HIGH RISK: Multiple red flags detected.\n\n🎯 RETAIL TRAP DETECTED: Institutions have reduced holdings by 3.5% (FII) over 3 quarters while retail increased by 5.7%. This is a classic distribution pattern.\n\n📰 News Sentiment: Predominantly NEGATIVE (8 negative articles out of 12). This adds to the risk.\n\n📊 Detected Patterns:\n  • Volume Anomaly: High volume with minimal price movement\n  • Delivery Divergence: Falling delivery % with rising price"
}
```

## Time Required

- Installation: 2 minutes
- Integration: 15 minutes
- Testing: 10 minutes

**Total: ~30 minutes**

## Notes

- Use VADER for hackathon (lightweight, no GPU needed)
- Use FinBERT for production (more accurate, requires GPU)
- Sentiment adds 0-2 points to risk score
- Negative news increases risk, positive news doesn't reduce it (conservative approach)
