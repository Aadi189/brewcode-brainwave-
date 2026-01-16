"""
Multi-Agent Risk Detection System
==================================

A sophisticated AI-powered risk detection system with 6 specialized agents:
1. Retail Trap Agent - Monitors shareholding patterns
2. Delivery Spike Agent - Detects delivery without price appreciation
3. Microstructure Agent - Analyzes candlestick patterns
4. Bulk/Block Deal Agent - Monitors large deal manipulation
5. Narrative Risk Agent - Detects headline sentiment excess and hype
6. Misinformation Agent - Assesses misinformation probability and source credibility

Features:
- Dynamic weight assignment based on signal impact
- Unified risk aggregation with co-occurrence amplification
- Learning-based weight tuning from historical performance
"""

import numpy as np
import pandas as pd
from typing import Dict, List, Tuple, Optional
from datetime import datetime, timedelta
from dataclasses import dataclass, field
from enum import Enum
import json
from pathlib import Path


# ============================================================================
# ENUMS & CONSTANTS
# ============================================================================


class RiskLevel(Enum):
    """Risk severity levels"""

    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"


class AgentType(Enum):
    """Agent identifiers"""

    RETAIL_TRAP = "retail_trap"
    DELIVERY_SPIKE = "delivery_spike"
    MICROSTRUCTURE = "microstructure"
    BULK_BLOCK_DEALS = "bulk_block_deals"
    NARRATIVE_RISK = "narrative_risk"
    MISINFORMATION = "misinformation"


# Expert weights (domain knowledge-based initial weights)
EXPERT_WEIGHTS = {
    AgentType.RETAIL_TRAP: 0.20,
    AgentType.DELIVERY_SPIKE: 0.15,
    AgentType.MICROSTRUCTURE: 0.15,
    AgentType.BULK_BLOCK_DEALS: 0.18,
    AgentType.NARRATIVE_RISK: 0.17,
    AgentType.MISINFORMATION: 0.15,
}

# Blending parameter α ∈ [0.6, 0.8] for weight combination
# w_final = α × w_expert + (1-α) × w_learned
# Higher α = more trust in expert weights (interpretability)
# Lower α = more trust in learned weights (performance)
ALPHA = 0.7  # Default: 70% expert, 30% learned

# Co-occurrence amplification matrix (how much to amplify when signals co-occur)
CO_OCCURRENCE_AMPLIFICATION = {
    (AgentType.RETAIL_TRAP, AgentType.NARRATIVE_RISK): 1.3,
    (AgentType.RETAIL_TRAP, AgentType.MISINFORMATION): 1.25,
    (AgentType.DELIVERY_SPIKE, AgentType.MICROSTRUCTURE): 1.4,
    (AgentType.DELIVERY_SPIKE, AgentType.BULK_BLOCK_DEALS): 1.35,
    (AgentType.MICROSTRUCTURE, AgentType.BULK_BLOCK_DEALS): 1.3,
    (AgentType.NARRATIVE_RISK, AgentType.MISINFORMATION): 1.5,
    (AgentType.RETAIL_TRAP, AgentType.DELIVERY_SPIKE): 1.2,
}


# ============================================================================
# DATA CLASSES
# ============================================================================


@dataclass
class AgentSignal:
    """Output from a single agent"""

    agent_type: AgentType
    risk_score: float  # 0-100
    confidence: float  # 0-1
    signals: List[str]  # Detected signals/patterns
    metadata: Dict = field(default_factory=dict)
    timestamp: datetime = field(default_factory=datetime.now)


@dataclass
class UnifiedRiskAssessment:
    """Final aggregated risk assessment"""

    symbol: str
    overall_risk_score: float  # 0-100
    risk_level: RiskLevel
    agent_signals: List[AgentSignal]
    agent_contributions: Dict[AgentType, float]  # How much each agent contributed
    co_occurrence_amplifications: List[Tuple[AgentType, AgentType, float]]
    explanation: str
    timestamp: datetime = field(default_factory=datetime.now)


# ============================================================================
# AGENT 1: RETAIL TRAP DETECTOR
# ============================================================================


class RetailTrapAgent:
    """
    Monitors retail trap patterns:
    - Retail shareholding increases
    - FII/DII shareholding decreases
    - More weight on FII changes (slightly more than DII)
    """

    def __init__(self, fii_weight: float = 0.55, dii_weight: float = 0.45):
        self.fii_weight = fii_weight
        self.dii_weight = dii_weight

    def analyze(self, shareholding_data: Dict) -> AgentSignal:
        """
        Analyze shareholding patterns for retail trap signals

        Args:
            shareholding_data: Dict with keys:
                - retail_change: QoQ change in retail %
                - fii_change: QoQ change in FII %
                - dii_change: QoQ change in DII %
                - retail_trend_3q: 3-quarter retail trend
                - fii_trend_3q: 3-quarter FII trend
                - dii_trend_3q: 3-quarter DII trend
        """
        risk_score = 0.0
        signals = []
        confidence = 0.0

        retail_change = shareholding_data.get("retail_change", 0)
        fii_change = shareholding_data.get("fii_change", 0)
        dii_change = shareholding_data.get("dii_change", 0)

        retail_trend_3q = shareholding_data.get("retail_trend_3q", 0)
        fii_trend_3q = shareholding_data.get("fii_trend_3q", 0)
        dii_trend_3q = shareholding_data.get("dii_trend_3q", 0)

        # Calculate weighted institutional exit score
        institutional_exit_score = (
            (abs(fii_change) * self.fii_weight + abs(dii_change) * self.dii_weight)
            if (fii_change < 0 or dii_change < 0)
            else 0
        )

        # Multi-quarter institutional exit
        institutional_exit_3q = (
            (abs(fii_trend_3q) * self.fii_weight + abs(dii_trend_3q) * self.dii_weight)
            if (fii_trend_3q < 0 or dii_trend_3q < 0)
            else 0
        )

        # Retail accumulation
        retail_accumulation = max(0, retail_change)
        retail_accumulation_3q = max(0, retail_trend_3q)

        # SIGNAL 1: QoQ Retail Trap
        if retail_change > 2 and (fii_change < -1 or dii_change < -1):
            score = min(40, retail_accumulation * 2 + institutional_exit_score * 3)
            risk_score += score
            signals.append(
                f"QoQ Retail Trap: Retail +{retail_change:.1f}%, FII {fii_change:.1f}%, DII {dii_change:.1f}%"
            )
            confidence += 0.3

        # SIGNAL 2: Multi-quarter gradual exit (more dangerous)
        if retail_trend_3q > 5 and (fii_trend_3q < -3 or dii_trend_3q < -3):
            score = min(50, retail_accumulation_3q * 1.5 + institutional_exit_3q * 4)
            risk_score += score
            signals.append(
                f"3Q Institutional Exit Pattern: Retail +{retail_trend_3q:.1f}%, FII {fii_trend_3q:.1f}%, DII {dii_trend_3q:.1f}%"
            )
            confidence += 0.5

        # SIGNAL 3: Severe FII exit (high weight)
        if fii_change < -5:
            risk_score += 30
            signals.append(f"Severe FII Exit: {fii_change:.1f}%")
            confidence += 0.2

        # SIGNAL 4: Both FII and DII exiting simultaneously
        if fii_change < -2 and dii_change < -2:
            risk_score += 25
            signals.append(
                f"Dual Institutional Exit: FII {fii_change:.1f}%, DII {dii_change:.1f}%"
            )
            confidence += 0.3

        # Cap risk score at 100
        risk_score = min(100, risk_score)
        confidence = min(1.0, confidence)

        return AgentSignal(
            agent_type=AgentType.RETAIL_TRAP,
            risk_score=risk_score,
            confidence=confidence,
            signals=signals,
            metadata={
                "retail_change": retail_change,
                "fii_change": fii_change,
                "dii_change": dii_change,
                "institutional_exit_score": institutional_exit_score,
            },
        )


# ============================================================================
# AGENT 2: DELIVERY SPIKE DETECTOR
# ============================================================================


class DeliverySpikeAgent:
    """
    Monitors delivery spike without price appreciation
    - High delivery percentage
    - No corresponding price increase
    - Indicates potential accumulation before dump
    """

    def __init__(self, delivery_threshold: float = 70.0):
        self.delivery_threshold = delivery_threshold

    def analyze(self, delivery_data: List[Dict], price_data: List[Dict]) -> AgentSignal:
        """
        Analyze delivery patterns vs price movements

        Args:
            delivery_data: List of dicts with 'date', 'delivery_pct'
            price_data: List of dicts with 'date', 'close', 'price_change_pct'
        """
        risk_score = 0.0
        signals = []
        confidence = 0.0

        if not delivery_data or not price_data:
            return AgentSignal(
                agent_type=AgentType.DELIVERY_SPIKE,
                risk_score=0,
                confidence=0,
                signals=["Insufficient data"],
                metadata={},
            )

        # Convert to DataFrames for easier analysis
        df_delivery = pd.DataFrame(delivery_data)
        df_price = pd.DataFrame(price_data)

        # Merge on date
        df = pd.merge(df_delivery, df_price, on="date", how="inner")

        if len(df) < 5:
            return AgentSignal(
                agent_type=AgentType.DELIVERY_SPIKE,
                risk_score=0,
                confidence=0,
                signals=["Insufficient data points"],
                metadata={},
            )

        # Recent 5 days
        recent = df.tail(5)

        # SIGNAL 1: High delivery with low/negative price change
        high_delivery_days = recent[recent["delivery_pct"] > self.delivery_threshold]

        for _, row in high_delivery_days.iterrows():
            price_change = row.get("price_change_pct", 0)
            delivery_pct = row["delivery_pct"]

            if price_change < 2:  # Less than 2% price increase
                score = min(35, (delivery_pct - self.delivery_threshold) * 2)
                risk_score += score
                signals.append(
                    f"High delivery ({delivery_pct:.1f}%) with minimal price gain ({price_change:.1f}%)"
                )
                confidence += 0.25

        # SIGNAL 2: Sustained high delivery over multiple days
        avg_delivery = recent["delivery_pct"].mean()
        avg_price_change = recent["price_change_pct"].mean()

        if avg_delivery > self.delivery_threshold and avg_price_change < 1:
            risk_score += 40
            signals.append(
                f"Sustained high delivery ({avg_delivery:.1f}%) without price appreciation ({avg_price_change:.1f}%)"
            )
            confidence += 0.4

        # SIGNAL 3: Delivery spike (sudden increase)
        if len(df) >= 10:
            baseline_delivery = df.iloc[-10:-5]["delivery_pct"].mean()
            recent_delivery = recent["delivery_pct"].mean()

            if recent_delivery > baseline_delivery * 1.5 and avg_price_change < 2:
                risk_score += 30
                signals.append(
                    f"Delivery spike: {baseline_delivery:.1f}% → {recent_delivery:.1f}% without price response"
                )
                confidence += 0.35

        risk_score = min(100, risk_score)
        confidence = min(1.0, confidence)

        return AgentSignal(
            agent_type=AgentType.DELIVERY_SPIKE,
            risk_score=risk_score,
            confidence=confidence,
            signals=signals,
            metadata={
                "avg_delivery": avg_delivery if "avg_delivery" in locals() else 0,
                "avg_price_change": (
                    avg_price_change if "avg_price_change" in locals() else 0
                ),
            },
        )


# ============================================================================
# AGENT 3: MICROSTRUCTURE MANIPULATION DETECTOR
# ============================================================================


class MicrostructureAgent:
    """
    Analyzes candlestick patterns at 10min, 15min, 30min intervals
    - Detects manipulation patterns
    - Identifies abnormal wick formations
    - Monitors volume-price divergence
    """

    def __init__(self):
        self.intervals = ["10min", "15min", "30min"]

    def analyze(self, ohlcv_data: Dict[str, List[Dict]]) -> AgentSignal:
        """
        Analyze microstructure patterns across multiple timeframes

        Args:
            ohlcv_data: Dict with keys '10min', '15min', '30min'
                       Each contains list of OHLCV dicts with technical indicators
        """
        risk_score = 0.0
        signals = []
        confidence = 0.0

        manipulation_patterns = []

        for interval, candles in ohlcv_data.items():
            if not candles or len(candles) < 10:
                continue

            df = pd.DataFrame(candles)
            recent = df.tail(20)  # Last 20 candles

            # SIGNAL 1: Excessive wicks (price manipulation)
            if "wick_body_ratio" in recent.columns:
                high_wick_candles = recent[recent["wick_body_ratio"] > 3]

                if len(high_wick_candles) > 5:
                    score = min(25, len(high_wick_candles) * 3)
                    risk_score += score
                    signals.append(
                        f"{interval}: {len(high_wick_candles)} candles with excessive wicks (manipulation)"
                    )
                    confidence += 0.2
                    manipulation_patterns.append(f"{interval}_excessive_wicks")

            # SIGNAL 2: Volume-price divergence
            if (
                "volume_ratio" in recent.columns
                and "price_change_pct" in recent.columns
            ):
                # High volume but low price movement
                divergence_candles = recent[
                    (recent["volume_ratio"] > 2)
                    & (abs(recent["price_change_pct"]) < 0.5)
                ]

                if len(divergence_candles) > 3:
                    risk_score += 30
                    signals.append(
                        f"{interval}: Volume-price divergence detected ({len(divergence_candles)} instances)"
                    )
                    confidence += 0.25
                    manipulation_patterns.append(f"{interval}_volume_divergence")

            # SIGNAL 3: Repeated upper wick rejections (selling pressure)
            if "upper_wick" in recent.columns and "body" in recent.columns:
                upper_wick_rejections = recent[
                    (recent["upper_wick"] > recent["body"] * 2)
                ]

                if len(upper_wick_rejections) > 4:
                    risk_score += 20
                    signals.append(
                        f"{interval}: Repeated upper wick rejections ({len(upper_wick_rejections)} candles)"
                    )
                    confidence += 0.15
                    manipulation_patterns.append(f"{interval}_upper_wick_rejection")

            # SIGNAL 4: Doji patterns in high volume (indecision/manipulation)
            if "body" in recent.columns and "volume_ratio" in recent.columns:
                doji_candles = recent[
                    (abs(recent["body"]) < (recent["high"] - recent["low"]) * 0.1)
                    & (recent["volume_ratio"] > 1.5)
                ]

                if len(doji_candles) > 3:
                    risk_score += 15
                    signals.append(
                        f"{interval}: Multiple doji patterns with high volume"
                    )
                    confidence += 0.1

        # SIGNAL 5: Cross-timeframe manipulation (same pattern across intervals)
        if len(manipulation_patterns) >= 4:  # Same pattern in multiple timeframes
            risk_score += 35
            signals.append("Cross-timeframe manipulation detected")
            confidence += 0.3

        risk_score = min(100, risk_score)
        confidence = min(1.0, confidence)

        return AgentSignal(
            agent_type=AgentType.MICROSTRUCTURE,
            risk_score=risk_score,
            confidence=confidence,
            signals=signals,
            metadata={
                "manipulation_patterns": manipulation_patterns,
                "intervals_analyzed": list(ohlcv_data.keys()),
            },
        )


# ============================================================================
# AGENT 4: BULK/BLOCK DEALS DETECTOR
# ============================================================================


class BulkBlockDealsAgent:
    """
    Monitors bulk and block deals for manipulation patterns
    - Identifies coordinated buying/selling
    - Detects circular trading patterns
    - Monitors deal concentration
    """

    def analyze(self, bulk_deals: List[Dict], block_deals: List[Dict]) -> AgentSignal:
        """
        Analyze bulk and block deals for manipulation

        Args:
            bulk_deals: List of dicts with 'client_name', 'buy_sell', 'quantity', 'price', 'date'
            block_deals: List of dicts with same structure
        """
        risk_score = 0.0
        signals = []
        confidence = 0.0

        all_deals = []
        if bulk_deals:
            for deal in bulk_deals:
                deal["deal_type"] = "BULK"
                all_deals.append(deal)
        if block_deals:
            for deal in block_deals:
                deal["deal_type"] = "BLOCK"
                all_deals.append(deal)

        if not all_deals:
            return AgentSignal(
                agent_type=AgentType.BULK_BLOCK_DEALS,
                risk_score=0,
                confidence=0,
                signals=["No deals to analyze"],
                metadata={},
            )

        df = pd.DataFrame(all_deals)

        # SIGNAL 1: High concentration of deals (potential manipulation)
        if len(df) > 10:
            risk_score += 25
            signals.append(f"High deal activity: {len(df)} deals detected")
            confidence += 0.2

        # SIGNAL 2: Same client buying and selling (circular trading)
        client_activity = df.groupby("client_name")["buy_sell"].apply(list).to_dict()

        circular_traders = []
        for client, activities in client_activity.items():
            if "BUY" in activities and "SELL" in activities:
                circular_traders.append(client)

        if circular_traders:
            risk_score += 40
            signals.append(
                f"Circular trading detected: {len(circular_traders)} clients buying AND selling"
            )
            confidence += 0.4

        # SIGNAL 3: Coordinated selling (multiple sellers on same day)
        if "date" in df.columns:
            daily_sells = df[df["buy_sell"] == "SELL"].groupby("date").size()

            high_sell_days = daily_sells[daily_sells > 3]
            if len(high_sell_days) > 0:
                risk_score += 30
                signals.append(
                    f"Coordinated selling: {len(high_sell_days)} days with 3+ sellers"
                )
                confidence += 0.3

        # SIGNAL 4: Large block deals (potential exit)
        if block_deals:
            large_blocks = [d for d in block_deals if d.get("quantity", 0) > 100000]

            if large_blocks:
                risk_score += 20
                signals.append(
                    f"Large block deals: {len(large_blocks)} deals > 100K shares"
                )
                confidence += 0.25

        # SIGNAL 5: Sell-heavy activity
        total_buys = len(df[df["buy_sell"] == "BUY"])
        total_sells = len(df[df["buy_sell"] == "SELL"])

        if total_sells > total_buys * 1.5:
            risk_score += 25
            signals.append(
                f"Sell-heavy activity: {total_sells} sells vs {total_buys} buys"
            )
            confidence += 0.2

        risk_score = min(100, risk_score)
        confidence = min(1.0, confidence)

        return AgentSignal(
            agent_type=AgentType.BULK_BLOCK_DEALS,
            risk_score=risk_score,
            confidence=confidence,
            signals=signals,
            metadata={
                "total_deals": len(df),
                "circular_traders": circular_traders,
                "buy_sell_ratio": total_buys / max(1, total_sells),
            },
        )


# ============================================================================
# AGENT 5: NARRATIVE RISK DETECTOR
# ============================================================================


class NarrativeRiskAgent:
    """
    Detects narrative manipulation risks:
    - Headline sentiment excess
    - Hype/speculative language
    - Coordinated narrative pushing
    """

    def __init__(self, sentiment_analyzer=None):
        self.sentiment_analyzer = sentiment_analyzer  # FinBERT or similar

    def analyze(
        self, news_articles: List[Dict], social_posts: List[Dict] = None
    ) -> AgentSignal:
        """
        Analyze narrative risks from news and social media

        Args:
            news_articles: List of dicts with 'headline', 'summary', 'source', 'published'
            social_posts: Optional list of social media posts
        """
        risk_score = 0.0
        signals = []
        confidence = 0.0

        all_text = []

        # Collect all text
        for article in news_articles:
            headline = article.get("headline", "")
            summary = article.get("summary", "")
            all_text.append(headline + " " + summary)

        if social_posts:
            for post in social_posts:
                all_text.append(post.get("text", ""))

        if not all_text:
            return AgentSignal(
                agent_type=AgentType.NARRATIVE_RISK,
                risk_score=0,
                confidence=0,
                signals=["No text to analyze"],
                metadata={},
            )

        # SIGNAL 1: Hype language detection
        hype_keywords = [
            "moon",
            "rocket",
            "explosive",
            "massive",
            "huge gains",
            "guaranteed",
            "sure shot",
            "multibagger",
            "next big thing",
            "don't miss",
            "limited time",
            "act now",
            "urgent",
        ]

        hype_count = 0
        for text in all_text:
            text_lower = text.lower()
            for keyword in hype_keywords:
                if keyword in text_lower:
                    hype_count += 1

        if hype_count > 5:
            score = min(40, hype_count * 3)
            risk_score += score
            signals.append(f"Excessive hype language: {hype_count} instances detected")
            confidence += 0.35

        # SIGNAL 2: Sentiment analysis (if available)
        if self.sentiment_analyzer:
            try:
                sentiments = self.sentiment_analyzer(all_text[:20])  # Analyze first 20

                positive_count = sum(
                    1
                    for s in sentiments
                    if s["label"] == "Positive" and s["score"] > 0.8
                )

                if positive_count > len(sentiments) * 0.7:  # >70% highly positive
                    risk_score += 35
                    signals.append(
                        f"Sentiment excess: {positive_count}/{len(sentiments)} highly positive"
                    )
                    confidence += 0.3
            except Exception as e:
                pass  # Sentiment analysis failed, skip

        # SIGNAL 3: Headline uniformity (coordinated narrative)
        headlines = [article.get("headline", "") for article in news_articles]

        if len(headlines) >= 5:
            # Check for similar headlines (simple word overlap)
            common_words = set()
            for headline in headlines:
                words = set(headline.lower().split())
                if not common_words:
                    common_words = words
                else:
                    common_words &= words

            if len(common_words) > 3:  # More than 3 common words across all headlines
                risk_score += 30
                signals.append(
                    f"Coordinated narrative: {len(common_words)} common words across headlines"
                )
                confidence += 0.25

        # SIGNAL 4: High volume of articles in short time
        if len(news_articles) > 15:
            risk_score += 20
            signals.append(f"Article flood: {len(news_articles)} articles detected")
            confidence += 0.2

        # SIGNAL 5: Speculative language
        speculative_keywords = [
            "could",
            "might",
            "may",
            "possibly",
            "potentially",
            "rumor",
            "speculation",
        ]

        speculative_count = 0
        for text in all_text:
            text_lower = text.lower()
            for keyword in speculative_keywords:
                if keyword in text_lower:
                    speculative_count += 1

        if speculative_count > 10:
            risk_score += 15
            signals.append(f"High speculation: {speculative_count} speculative terms")
            confidence += 0.15

        risk_score = min(100, risk_score)
        confidence = min(1.0, confidence)

        return AgentSignal(
            agent_type=AgentType.NARRATIVE_RISK,
            risk_score=risk_score,
            confidence=confidence,
            signals=signals,
            metadata={
                "hype_count": hype_count if "hype_count" in locals() else 0,
                "article_count": len(news_articles),
                "speculative_count": (
                    speculative_count if "speculative_count" in locals() else 0
                ),
            },
        )


# ============================================================================
# AGENT 6: MISINFORMATION DETECTOR
# ============================================================================


class MisinformationAgent:
    """
    Assesses misinformation probability and source credibility
    - Source credibility scoring
    - Fact-checking patterns
    - Information consistency analysis
    """

    def __init__(self):
        # Trusted sources (can be expanded)
        self.trusted_sources = {
            "reuters",
            "bloomberg",
            "economic times",
            "business standard",
            "mint",
            "moneycontrol",
            "livemint",
            "financial express",
        }

        # Low credibility indicators
        self.low_credibility_indicators = [
            "anonymous",
            "unnamed sources",
            "insider tip",
            "exclusive leak",
            "breaking news",
            "unconfirmed",
            "alleged",
        ]

    def analyze(
        self, news_articles: List[Dict], social_posts: List[Dict] = None
    ) -> AgentSignal:
        """
        Analyze misinformation risk and source credibility

        Args:
            news_articles: List of dicts with 'headline', 'source', 'summary'
            social_posts: Optional social media posts
        """
        risk_score = 0.0
        signals = []
        confidence = 0.0

        if not news_articles:
            return AgentSignal(
                agent_type=AgentType.MISINFORMATION,
                risk_score=0,
                confidence=0,
                signals=["No articles to analyze"],
                metadata={},
            )

        # SIGNAL 1: Source credibility analysis
        untrusted_count = 0
        trusted_count = 0

        for article in news_articles:
            source = article.get("source", "").lower()

            if any(trusted in source for trusted in self.trusted_sources):
                trusted_count += 1
            else:
                untrusted_count += 1

        if untrusted_count > trusted_count:
            score = min(35, (untrusted_count - trusted_count) * 5)
            risk_score += score
            signals.append(
                f"Low source credibility: {untrusted_count} untrusted vs {trusted_count} trusted sources"
            )
            confidence += 0.3

        # SIGNAL 2: Low credibility language patterns
        credibility_issues = 0

        for article in news_articles:
            text = (
                article.get("headline", "") + " " + article.get("summary", "")
            ).lower()

            for indicator in self.low_credibility_indicators:
                if indicator in text:
                    credibility_issues += 1

        if credibility_issues > 5:
            risk_score += 30
            signals.append(
                f"Credibility red flags: {credibility_issues} low-credibility indicators"
            )
            confidence += 0.25

        # SIGNAL 3: Information inconsistency
        # Check if articles contradict each other (simplified version)
        if len(news_articles) >= 5:
            # Look for contradictory keywords
            positive_keywords = ["surge", "gain", "rise", "up", "growth"]
            negative_keywords = ["fall", "drop", "decline", "down", "loss"]

            positive_articles = 0
            negative_articles = 0

            for article in news_articles:
                text = article.get("headline", "").lower()

                if any(kw in text for kw in positive_keywords):
                    positive_articles += 1
                if any(kw in text for kw in negative_keywords):
                    negative_articles += 1

            # If both positive and negative narratives exist
            if positive_articles > 2 and negative_articles > 2:
                risk_score += 25
                signals.append(
                    f"Narrative inconsistency: {positive_articles} positive vs {negative_articles} negative articles"
                )
                confidence += 0.2

        # SIGNAL 4: Social media amplification without credible sources
        if social_posts and len(social_posts) > 20 and trusted_count < 3:
            risk_score += 30
            signals.append(
                f"Social amplification without credible sources: {len(social_posts)} posts, {trusted_count} trusted articles"
            )
            confidence += 0.3

        # SIGNAL 5: Missing source attribution
        no_source_count = sum(
            1 for article in news_articles if not article.get("source")
        )

        if no_source_count > len(news_articles) * 0.3:
            risk_score += 20
            signals.append(
                f"Missing source attribution: {no_source_count}/{len(news_articles)} articles"
            )
            confidence += 0.15

        risk_score = min(100, risk_score)
        confidence = min(1.0, confidence)

        return AgentSignal(
            agent_type=AgentType.MISINFORMATION,
            risk_score=risk_score,
            confidence=confidence,
            signals=signals,
            metadata={
                "trusted_sources": trusted_count,
                "untrusted_sources": untrusted_count,
                "credibility_issues": (
                    credibility_issues if "credibility_issues" in locals() else 0
                ),
            },
        )


# ============================================================================
# UNIFIED RISK AGGREGATION ENGINE
# ============================================================================


class UnifiedRiskAggregator:
    """
    Aggregates signals from all agents with:
    - Drawdown-based weight learning
    - Expert-learned weight blending (w_final = α*w_expert + (1-α)*w_learned)
    - Co-occurrence amplification
    - Historical performance tracking
    """

    def __init__(self, weights_file: str = "agent_weights.json", alpha: float = ALPHA):
        """
        Initialize the aggregator

        Args:
            weights_file: Path to save/load weights
            alpha: Blending parameter ∈ [0.6, 0.8]
                   Higher α = more trust in expert weights (interpretability)
                   Lower α = more trust in learned weights (performance)
        """
        self.expert_weights = EXPERT_WEIGHTS.copy()
        self.learned_weights = EXPERT_WEIGHTS.copy()  # Initialize with expert weights
        self.alpha = max(0.6, min(0.8, alpha))  # Ensure α ∈ [0.6, 0.8]
        self.weights_file = Path(weights_file)
        self.drawdown_history = []  # Track historical drawdowns

        # Load saved data if available
        self._load_weights()

    @property
    def final_weights(self) -> Dict[AgentType, float]:
        """
        Calculate final weights using blending formula:
        w_i^final = α × w_i^expert + (1-α) × w_i^learned
        """
        final = {}
        for agent_type in AgentType:
            w_expert = self.expert_weights.get(agent_type, 0.15)
            w_learned = self.learned_weights.get(agent_type, 0.15)
            final[agent_type] = self.alpha * w_expert + (1 - self.alpha) * w_learned

        # Normalize to sum to 1.0
        total = sum(final.values())
        return {k: v / total for k, v in final.items()}

    def _load_weights(self):
        """Load learned weights and drawdown history from file"""
        if self.weights_file.exists():
            try:
                with open(self.weights_file, "r") as f:
                    data = json.load(f)

                    # Load learned weights
                    if "learned_weights" in data:
                        self.learned_weights = {
                            AgentType(k): v for k, v in data["learned_weights"].items()
                        }

                    # Load drawdown history
                    self.drawdown_history = data.get("drawdown_history", [])

                    # Load alpha if saved
                    if "alpha" in data:
                        self.alpha = data["alpha"]

            except Exception as e:
                print(f"Failed to load weights: {e}")

    def _save_weights(self):
        """Save learned weights and drawdown history to file"""
        try:
            data = {
                "expert_weights": {k.value: v for k, v in self.expert_weights.items()},
                "learned_weights": {
                    k.value: v for k, v in self.learned_weights.items()
                },
                "final_weights": {k.value: v for k, v in self.final_weights.items()},
                "alpha": self.alpha,
                "drawdown_history": self.drawdown_history[-100:],  # Keep last 100
                "last_updated": datetime.now().isoformat(),
                "formula": "w_final = α × w_expert + (1-α) × w_learned",
            }
            with open(self.weights_file, "w") as f:
                json.dump(data, f, indent=2)
        except Exception as e:
            print(f"Failed to save weights: {e}")

    def record_drawdown(
        self,
        symbol: str,
        agent_signals: List[AgentSignal],
        predicted_risk_score: float,
        actual_drawdown: float,
        days_to_drawdown: int,
    ):
        """
        Record a historical drawdown event for learning

        Args:
            symbol: Stock symbol
            agent_signals: Signals from all agents at time of prediction
            predicted_risk_score: Our predicted risk score (0-100)
            actual_drawdown: Actual drawdown that occurred (% decline from peak)
            days_to_drawdown: Days until drawdown occurred
        """
        # Calculate agent-specific performance
        agent_performance = {}

        for signal in agent_signals:
            # Performance = how well agent's signal correlated with actual drawdown
            # Higher agent score should correlate with higher drawdown
            if actual_drawdown > 20:  # Significant drawdown occurred
                # Agent was right if it flagged high risk
                performance = min(1.0, signal.risk_score / 100.0)
            elif actual_drawdown < 5:  # No significant drawdown
                # Agent was wrong if it flagged high risk
                performance = max(0.0, 1.0 - signal.risk_score / 100.0)
            else:  # Moderate drawdown
                # Neutral performance
                performance = 0.5

            agent_performance[signal.agent_type.value] = performance

        # Record the event
        drawdown_event = {
            "timestamp": datetime.now().isoformat(),
            "symbol": symbol,
            "predicted_risk_score": predicted_risk_score,
            "actual_drawdown": actual_drawdown,
            "days_to_drawdown": days_to_drawdown,
            "agent_performance": agent_performance,
        }

        self.drawdown_history.append(drawdown_event)

        # Update learned weights based on historical performance
        self._update_learned_weights()

        # Save to disk
        self._save_weights()

    def _update_learned_weights(self):
        """
        Update learned weights based on historical drawdown performance

        Uses exponentially weighted moving average of agent performance
        across all historical drawdown events.
        """
        if not self.drawdown_history:
            return

        # Calculate average performance for each agent
        agent_avg_performance = {agent: [] for agent in AgentType}

        for event in self.drawdown_history:
            for agent_str, performance in event["agent_performance"].items():
                try:
                    agent_type = AgentType(agent_str)
                    agent_avg_performance[agent_type].append(performance)
                except:
                    pass

        # Calculate learned weights based on performance
        # Better performing agents get higher weights
        learned = {}
        for agent_type, performances in agent_avg_performance.items():
            if performances:
                # Use exponentially weighted average (more recent = more important)
                weights_exp = np.exp(np.linspace(0, 1, len(performances)))
                avg_performance = np.average(performances, weights=weights_exp)

                # Convert performance (0-1) to weight
                # Scale to reasonable range [0.05, 0.30]
                learned[agent_type] = 0.05 + (avg_performance * 0.25)
            else:
                learned[agent_type] = self.expert_weights[agent_type]

        # Normalize learned weights to sum to 1.0
        total = sum(learned.values())
        self.learned_weights = {k: v / total for k, v in learned.items()}

    def aggregate(
        self, agent_signals: List[AgentSignal], symbol: str
    ) -> UnifiedRiskAssessment:
        """
        Aggregate all agent signals into unified risk score

        Uses final weights: w_final = α × w_expert + (1-α) × w_learned

        Args:
            agent_signals: List of signals from all agents
            symbol: Stock symbol being analyzed

        Returns:
            UnifiedRiskAssessment with overall risk score and breakdown
        """
        if not agent_signals:
            return UnifiedRiskAssessment(
                symbol=symbol,
                overall_risk_score=0,
                risk_level=RiskLevel.LOW,
                agent_signals=[],
                agent_contributions={},
                co_occurrence_amplifications=[],
                explanation="No agent signals available",
            )

        # Get final blended weights
        weights = self.final_weights

        # Step 1: Calculate base weighted score
        weighted_score = 0.0
        agent_contributions = {}

        for signal in agent_signals:
            weight = weights.get(signal.agent_type, 0.1)
            contribution = signal.risk_score * weight * signal.confidence
            weighted_score += contribution
            agent_contributions[signal.agent_type] = contribution

        # Step 2: Apply co-occurrence amplification
        amplifications = []
        amplification_bonus = 0.0

        # Get agents that detected risk (score > 30)
        active_agents = [s.agent_type for s in agent_signals if s.risk_score > 30]

        # Check for co-occurring risks
        for (agent1, agent2), amp_factor in CO_OCCURRENCE_AMPLIFICATION.items():
            if agent1 in active_agents and agent2 in active_agents:
                # Calculate amplification bonus
                signal1 = next(s for s in agent_signals if s.agent_type == agent1)
                signal2 = next(s for s in agent_signals if s.agent_type == agent2)

                bonus = (
                    (signal1.risk_score + signal2.risk_score) * (amp_factor - 1.0) * 0.1
                )
                amplification_bonus += bonus
                amplifications.append((agent1, agent2, bonus))

        # Step 3: Calculate final score
        overall_risk_score = min(100, weighted_score + amplification_bonus)

        # Step 4: Determine risk level
        if overall_risk_score >= 75:
            risk_level = RiskLevel.CRITICAL
        elif overall_risk_score >= 50:
            risk_level = RiskLevel.HIGH
        elif overall_risk_score >= 25:
            risk_level = RiskLevel.MEDIUM
        else:
            risk_level = RiskLevel.LOW

        # Step 5: Generate explanation
        explanation = self._generate_explanation(
            agent_signals, agent_contributions, amplifications, overall_risk_score
        )

        return UnifiedRiskAssessment(
            symbol=symbol,
            overall_risk_score=round(overall_risk_score, 2),
            risk_level=risk_level,
            agent_signals=agent_signals,
            agent_contributions=agent_contributions,
            co_occurrence_amplifications=amplifications,
            explanation=explanation,
        )

    def _generate_explanation(
        self,
        signals: List[AgentSignal],
        contributions: Dict[AgentType, float],
        amplifications: List[Tuple[AgentType, AgentType, float]],
        overall_score: float,
    ) -> str:
        """Generate human-readable explanation of risk assessment"""

        # Sort agents by contribution
        sorted_agents = sorted(contributions.items(), key=lambda x: x[1], reverse=True)

        explanation_parts = []

        # Overall assessment
        explanation_parts.append(f"Overall Risk Score: {overall_score:.1f}/100")
        explanation_parts.append(
            f"(Blended: {self.alpha*100:.0f}% expert + {(1-self.alpha)*100:.0f}% learned)"
        )
        explanation_parts.append("")

        # Top contributing agents
        explanation_parts.append("Key Risk Factors:")
        for agent_type, contribution in sorted_agents[:3]:
            if contribution > 5:  # Only mention significant contributors
                signal = next(s for s in signals if s.agent_type == agent_type)

                # Show weight breakdown
                w_expert = self.expert_weights.get(agent_type, 0.15)
                w_learned = self.learned_weights.get(agent_type, 0.15)
                w_final = self.final_weights.get(agent_type, 0.15)

                explanation_parts.append(
                    f"• {agent_type.value.replace('_', ' ').title()}: {contribution:.1f} points (weight: {w_final:.3f})"
                )

                # Add top signals from this agent
                for sig in signal.signals[:2]:
                    explanation_parts.append(f"  - {sig}")

        # Co-occurrence amplifications
        if amplifications:
            explanation_parts.append("")
            explanation_parts.append("Risk Amplifications (Co-occurring Signals):")
            for agent1, agent2, bonus in amplifications:
                explanation_parts.append(
                    f"• {agent1.value} + {agent2.value}: +{bonus:.1f} points"
                )

        return "\n".join(explanation_parts)


# ============================================================================
# MAIN ORCHESTRATOR
# ============================================================================


class MultiAgentRiskSystem:
    """
    Main orchestrator for the multi-agent risk detection system
    """

    def __init__(self, sentiment_analyzer=None):
        self.retail_trap_agent = RetailTrapAgent()
        self.delivery_spike_agent = DeliverySpikeAgent()
        self.microstructure_agent = MicrostructureAgent()
        self.bulk_block_agent = BulkBlockDealsAgent()
        self.narrative_agent = NarrativeRiskAgent(sentiment_analyzer)
        self.misinformation_agent = MisinformationAgent()
        self.aggregator = UnifiedRiskAggregator()

    def analyze(
        self,
        symbol: str,
        shareholding_data: Optional[Dict] = None,
        delivery_data: Optional[List[Dict]] = None,
        price_data: Optional[List[Dict]] = None,
        ohlcv_data: Optional[Dict[str, List[Dict]]] = None,
        bulk_deals: Optional[List[Dict]] = None,
        block_deals: Optional[List[Dict]] = None,
        news_articles: Optional[List[Dict]] = None,
        social_posts: Optional[List[Dict]] = None,
    ) -> UnifiedRiskAssessment:
        """
        Run all agents and aggregate results

        Args:
            symbol: Stock symbol
            shareholding_data: Shareholding pattern data
            delivery_data: Delivery data
            price_data: Price data
            ohlcv_data: OHLCV data for multiple timeframes
            bulk_deals: Bulk deal data
            block_deals: Block deal data
            news_articles: News articles
            social_posts: Social media posts

        Returns:
            UnifiedRiskAssessment with complete analysis
        """
        agent_signals = []

        # Agent 1: Retail Trap
        if shareholding_data:
            signal = self.retail_trap_agent.analyze(shareholding_data)
            agent_signals.append(signal)

        # Agent 2: Delivery Spike
        if delivery_data and price_data:
            signal = self.delivery_spike_agent.analyze(delivery_data, price_data)
            agent_signals.append(signal)

        # Agent 3: Microstructure
        if ohlcv_data:
            signal = self.microstructure_agent.analyze(ohlcv_data)
            agent_signals.append(signal)

        # Agent 4: Bulk/Block Deals
        if bulk_deals or block_deals:
            signal = self.bulk_block_agent.analyze(bulk_deals or [], block_deals or [])
            agent_signals.append(signal)

        # Agent 5: Narrative Risk
        if news_articles:
            signal = self.narrative_agent.analyze(news_articles, social_posts)
            agent_signals.append(signal)

        # Agent 6: Misinformation
        if news_articles:
            signal = self.misinformation_agent.analyze(news_articles, social_posts)
            agent_signals.append(signal)

        # Aggregate all signals
        return self.aggregator.aggregate(agent_signals, symbol)

    def record_drawdown(
        self,
        symbol: str,
        agent_signals: List[AgentSignal],
        predicted_risk_score: float,
        actual_drawdown: float,
        days_to_drawdown: int,
    ):
        """
        Record a historical drawdown event for learning

        This method should be called after observing the actual outcome of a stock
        that was previously analyzed. The system will learn from this data to improve
        future predictions.

        Args:
            symbol: Stock symbol
            agent_signals: The original agent signals from the analysis
            predicted_risk_score: The risk score we predicted (0-100)
            actual_drawdown: The actual maximum drawdown that occurred (%)
                            e.g., 25.5 means stock fell 25.5% from its peak
            days_to_drawdown: Number of days until the drawdown occurred

        Example:
            # You analyzed WIPRO and predicted risk score of 75
            assessment = system.analyze("WIPRO", ...)

            # 30 days later, WIPRO dropped 28% from its peak
            system.record_drawdown(
                symbol="WIPRO",
                agent_signals=assessment.agent_signals,
                predicted_risk_score=assessment.overall_risk_score,
                actual_drawdown=28.0,
                days_to_drawdown=30
            )
        """
        self.aggregator.record_drawdown(
            symbol,
            agent_signals,
            predicted_risk_score,
            actual_drawdown,
            days_to_drawdown,
        )

    def get_weight_info(self) -> Dict:
        """
        Get information about current weights

        Returns:
            Dict with expert_weights, learned_weights, final_weights, and alpha
        """
        return {
            "expert_weights": {
                k.value: v for k, v in self.aggregator.expert_weights.items()
            },
            "learned_weights": {
                k.value: v for k, v in self.aggregator.learned_weights.items()
            },
            "final_weights": {
                k.value: v for k, v in self.aggregator.final_weights.items()
            },
            "alpha": self.aggregator.alpha,
            "formula": f"w_final = {self.aggregator.alpha:.2f} × w_expert + {1-self.aggregator.alpha:.2f} × w_learned",
            "total_drawdown_events": len(self.aggregator.drawdown_history),
        }
