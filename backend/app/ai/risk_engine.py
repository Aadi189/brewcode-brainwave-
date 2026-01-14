

import yfinance as yf
import pandas as pd
import numpy as np
from transformers import pipeline

# ------------------------------
# Sentiment Model
# ------------------------------

sentiment_model = pipeline(
    "sentiment-analysis",
    model="yiyanghkust/finbert-tone"
)

# ------------------------------
# Market Data
# ------------------------------

def fetch_market_data(ticker, period="5d", interval="15m"):
    data = yf.download(
        ticker,
        period=period,
        interval=interval,
        auto_adjust=False,
        progress=False
    )

    if isinstance(data.columns, pd.MultiIndex):
        data.columns = data.columns.get_level_values(0)

    data.dropna(inplace=True)
    return data


# ------------------------------
# Market Signals
# ------------------------------

def compute_market_signals(df):
    df = df.copy()

    df["avg_volume"] = df["Volume"].rolling(20).mean()
    df["volume_spike_ratio"] = df["Volume"] / df["avg_volume"]

    df["returns"] = df["Close"].pct_change()
    df["volatility"] = df["returns"].rolling(20).std()

    latest = df.iloc[-1]

    return {
        "volume_spike_ratio": float(round(latest["volume_spike_ratio"], 2)),
        "volatility": float(round(latest["volatility"], 4))
    }


# ------------------------------
# Sentiment Signals
# ------------------------------

def analyze_sentiment(messages):
    results = sentiment_model(messages)

    positive, negative, neutral = 0, 0, 0

    for r in results:
        if r["label"] == "Positive":
            positive += r["score"]
        elif r["label"] == "Negative":
            negative += r["score"]
        else:
            neutral += r["score"]

    total = len(results)

    return {
        "positive_score": round(positive / total, 2),
        "negative_score": round(negative / total, 2),
        "neutral_score": round(neutral / total, 2),
    }


# ------------------------------
# Risk Engine
# ------------------------------

def compute_risk_score(market, sentiment):
    score = 0
    reasons = []

    if market["volume_spike_ratio"] > 1.5:
        score += 30
        reasons.append("Unusual volume spike detected")

    if market["volatility"] > 0.02:
        score += 20
        reasons.append("High short-term price volatility")

    if sentiment["positive_score"] > 0.7:
        score += 30
        reasons.append("Excessively positive hype sentiment")

    if sentiment["neutral_score"] < 0.2:
        score += 20
        reasons.append("Low neutral sentiment (high emotional bias)")

    if score >= 60:
        level = "HIGH"
    elif score >= 30:
        level = "MEDIUM"
    else:
        level = "LOW"

    return {
        "risk_score": score,
        "risk_level": level,
        "reasons": reasons
    }


# ------------------------------
# Orchestrator
# ------------------------------

def pump_and_dump_risk_agent(ticker, messages):
    market_data = fetch_market_data(ticker)
    market_signals = compute_market_signals(market_data)
    sentiment_signals = analyze_sentiment(messages)
    risk = compute_risk_score(market_signals, sentiment_signals)

    return {
        "ticker": ticker,
        "market_signals": market_signals,
        "sentiment_signals": sentiment_signals,
        "risk_analysis": risk
    }
