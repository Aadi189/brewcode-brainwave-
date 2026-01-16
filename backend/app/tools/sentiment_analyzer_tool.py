"""
Custom Tool 1: Advanced Sentiment Analyzer
===========================================

A custom-built sentiment analysis tool that uses OnDemand Chat API
to analyze financial news sentiment with domain-specific context.

This is NOT a pre-built tool - it's custom-designed for stock market
manipulation detection with specialized prompts and analysis logic.
"""

import asyncio
from typing import List, Dict, Any, Optional
from datetime import datetime
import json
from app.ai.ondemand_client import get_ondemand_client


class SentimentAnalyzerTool:
    """
    Custom sentiment analysis tool for financial news

    Features:
    - Domain-specific financial sentiment analysis
    - Hype language detection
    - Manipulation indicator scoring
    - Source credibility weighting
    - Temporal sentiment tracking
    """

    def __init__(self):
        self.client = get_ondemand_client()
        self.name = "sentiment_analyzer"
        self.description = (
            "Analyzes financial news sentiment with manipulation detection"
        )

        # Custom hype keywords for Indian stock market
        self.hype_keywords = [
            "multibagger",
            "moon",
            "rocket",
            "explosive growth",
            "guaranteed returns",
            "sure shot",
            "next big thing",
            "don't miss",
            "limited time",
            "act now",
            "urgent",
            "massive gains",
            "huge opportunity",
            "insider tip",
        ]

        # Trusted Indian financial sources
        self.trusted_sources = {
            "economic times": 1.0,
            "business standard": 1.0,
            "mint": 0.95,
            "moneycontrol": 0.9,
            "livemint": 0.9,
            "financial express": 0.85,
            "reuters": 1.0,
            "bloomberg": 1.0,
        }

    async def analyze_batch(
        self, articles: List[Dict[str, Any]], context: Optional[Dict] = None
    ) -> Dict[str, Any]:
        """
        Analyze sentiment of multiple articles with custom logic

        Args:
            articles: List of news articles with headline, summary, source
            context: Optional context (stock symbol, price data, etc.)

        Returns:
            Comprehensive sentiment analysis with manipulation indicators
        """
        if not articles:
            return self._empty_result()

        # Step 1: Extract text and metadata
        texts = []
        sources = []
        timestamps = []

        for article in articles:
            headline = article.get("headline", "")
            summary = article.get("summary", "")
            source = article.get("source", "").lower()
            published = article.get("published", "")

            texts.append(f"{headline} {summary}")
            sources.append(source)
            timestamps.append(published)

        # Step 2: Custom hype detection (pre-LLM)
        hype_scores = self._detect_hype(texts)

        # Step 3: Source credibility scoring
        credibility_scores = self._score_credibility(sources)

        # Step 4: OnDemand Chat API for deep sentiment analysis
        sentiment_results = await self._analyze_with_chat_api(
            texts=texts, context=context
        )

        # Step 5: Custom aggregation and manipulation scoring
        final_analysis = self._aggregate_results(
            texts=texts,
            sources=sources,
            hype_scores=hype_scores,
            credibility_scores=credibility_scores,
            sentiment_results=sentiment_results,
            context=context,
        )

        return final_analysis

    def _detect_hype(self, texts: List[str]) -> List[float]:
        """Custom hype detection algorithm"""
        scores = []

        for text in texts:
            text_lower = text.lower()
            hype_count = sum(
                1 for keyword in self.hype_keywords if keyword in text_lower
            )

            # Custom scoring: exponential penalty for multiple hype words
            if hype_count == 0:
                score = 0.0
            elif hype_count == 1:
                score = 0.3
            elif hype_count == 2:
                score = 0.6
            else:
                score = min(1.0, 0.6 + (hype_count - 2) * 0.15)

            scores.append(score)

        return scores

    def _score_credibility(self, sources: List[str]) -> List[float]:
        """Custom source credibility scoring"""
        scores = []

        for source in sources:
            source_lower = source.lower()

            # Check against trusted sources
            credibility = 0.5  # Default for unknown sources

            for trusted_source, trust_score in self.trusted_sources.items():
                if trusted_source in source_lower:
                    credibility = trust_score
                    break

            scores.append(credibility)

        return scores

    async def _analyze_with_chat_api(
        self, texts: List[str], context: Optional[Dict]
    ) -> List[Dict[str, Any]]:
        """
        Use OnDemand Chat API for deep sentiment analysis

        This is the CHAT API integration (mandatory requirement)
        """
        # Custom prompt engineering for financial sentiment
        system_prompt = """You are a financial sentiment analysis expert specializing in detecting stock market manipulation.

Analyze each text and provide:
1. sentiment: "positive", "negative", or "neutral"
2. confidence: 0.0 to 1.0
3. manipulation_risk: 0.0 to 1.0 (likelihood of manipulation)
4. key_phrases: list of concerning phrases
5. reasoning: brief explanation

Focus on detecting:
- Pump and dump language
- Unrealistic promises
- Urgency tactics
- Fear of missing out (FOMO)
- Insider trading hints"""

        context_info = ""
        if context:
            context_info = f"\n\nContext: Stock {context.get('symbol', 'N/A')}, analyzing for manipulation patterns."

        user_prompt = f"""Analyze these financial news texts for sentiment and manipulation risk:{context_info}

Texts:
{json.dumps(texts[:10], indent=2)}

Return a JSON array with analysis for each text."""

        try:
            # OnDemand Chat API call
            response = await self.client.chat_completion(
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": user_prompt},
                ],
                temperature=0.3,  # Low temperature for consistent analysis
                max_tokens=2000,
            )

            content = (
                response.get("choices", [{}])[0].get("message", {}).get("content", "[]")
            )

            # Parse JSON response
            import re

            json_match = re.search(r"\[.*\]", content, re.DOTALL)
            if json_match:
                results = json.loads(json_match.group())
                return results
            else:
                return [self._default_sentiment() for _ in texts]

        except Exception as e:
            print(f"Chat API error: {e}")
            return [self._default_sentiment() for _ in texts]

    def _aggregate_results(
        self,
        texts: List[str],
        sources: List[str],
        hype_scores: List[float],
        credibility_scores: List[float],
        sentiment_results: List[Dict],
        context: Optional[Dict],
    ) -> Dict[str, Any]:
        """Custom aggregation logic combining all signals"""

        total_articles = len(texts)

        # Aggregate sentiments
        positive_count = sum(
            1 for s in sentiment_results if s.get("sentiment") == "positive"
        )
        negative_count = sum(
            1 for s in sentiment_results if s.get("sentiment") == "negative"
        )
        neutral_count = total_articles - positive_count - negative_count

        # Calculate weighted manipulation risk
        manipulation_risks = []
        for i, result in enumerate(sentiment_results):
            llm_risk = result.get("manipulation_risk", 0.5)
            hype_risk = hype_scores[i]
            credibility = credibility_scores[i]

            # Custom formula: combine LLM risk, hype, and inverse credibility
            combined_risk = (
                llm_risk * 0.5  # LLM analysis
                + hype_risk * 0.3  # Hype detection
                + (1 - credibility) * 0.2  # Low credibility = higher risk
            )

            manipulation_risks.append(combined_risk)

        avg_manipulation_risk = (
            sum(manipulation_risks) / len(manipulation_risks)
            if manipulation_risks
            else 0
        )

        # Detect sentiment excess (manipulation indicator)
        sentiment_excess = False
        if total_articles >= 5:
            positive_ratio = positive_count / total_articles
            if positive_ratio > 0.75:  # >75% positive is suspicious
                sentiment_excess = True

        # Detect coordinated narrative
        coordinated_narrative = self._detect_coordination(texts)

        # Calculate overall sentiment score
        sentiment_score = (
            (positive_count * 1.0 - negative_count * 1.0) / total_articles * 100
            if total_articles > 0
            else 0
        )

        # Generate manipulation indicators
        manipulation_indicators = []

        if avg_manipulation_risk > 0.6:
            manipulation_indicators.append("High manipulation risk detected by AI")

        if sentiment_excess:
            manipulation_indicators.append(
                f"Sentiment excess: {positive_ratio*100:.1f}% positive articles"
            )

        if coordinated_narrative:
            manipulation_indicators.append(
                "Coordinated narrative detected across sources"
            )

        avg_hype = sum(hype_scores) / len(hype_scores) if hype_scores else 0
        if avg_hype > 0.5:
            manipulation_indicators.append(
                f"Excessive hype language: {avg_hype*100:.1f}% hype score"
            )

        avg_credibility = (
            sum(credibility_scores) / len(credibility_scores)
            if credibility_scores
            else 0
        )
        if avg_credibility < 0.6:
            manipulation_indicators.append(
                f"Low source credibility: {avg_credibility*100:.1f}% average"
            )

        return {
            "tool_name": self.name,
            "total_articles": total_articles,
            "sentiment_distribution": {
                "positive": positive_count,
                "negative": negative_count,
                "neutral": neutral_count,
            },
            "sentiment_score": sentiment_score,
            "manipulation_risk": avg_manipulation_risk,
            "manipulation_indicators": manipulation_indicators,
            "hype_score": avg_hype,
            "credibility_score": avg_credibility,
            "sentiment_excess": sentiment_excess,
            "coordinated_narrative": coordinated_narrative,
            "detailed_results": sentiment_results[:5],  # Top 5 for reference
            "timestamp": datetime.now().isoformat(),
        }

    def _detect_coordination(self, texts: List[str]) -> bool:
        """Detect coordinated narrative across articles"""
        if len(texts) < 3:
            return False

        # Extract common words (excluding stop words)
        stop_words = {
            "the",
            "a",
            "an",
            "and",
            "or",
            "but",
            "in",
            "on",
            "at",
            "to",
            "for",
        }

        word_sets = []
        for text in texts:
            words = set(text.lower().split())
            words = {w for w in words if len(w) > 4 and w not in stop_words}
            word_sets.append(words)

        # Find common words across all texts
        if word_sets:
            common_words = set.intersection(*word_sets)

            # If >3 significant common words, likely coordinated
            if len(common_words) > 3:
                return True

        return False

    def _default_sentiment(self) -> Dict[str, Any]:
        """Default sentiment when API fails"""
        return {
            "sentiment": "neutral",
            "confidence": 0.5,
            "manipulation_risk": 0.5,
            "key_phrases": [],
            "reasoning": "Default analysis",
        }

    def _empty_result(self) -> Dict[str, Any]:
        """Empty result when no articles"""
        return {
            "tool_name": self.name,
            "total_articles": 0,
            "sentiment_distribution": {"positive": 0, "negative": 0, "neutral": 0},
            "sentiment_score": 0,
            "manipulation_risk": 0,
            "manipulation_indicators": [],
            "hype_score": 0,
            "credibility_score": 0,
            "sentiment_excess": False,
            "coordinated_narrative": False,
            "detailed_results": [],
            "timestamp": datetime.now().isoformat(),
        }


# Singleton instance
_sentiment_tool = None


def get_sentiment_analyzer_tool() -> SentimentAnalyzerTool:
    """Get sentiment analyzer tool instance"""
    global _sentiment_tool
    if _sentiment_tool is None:
        _sentiment_tool = SentimentAnalyzerTool()
    return _sentiment_tool
