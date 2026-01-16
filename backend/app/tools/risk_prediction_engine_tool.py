"""
Custom Tool 3: Risk Prediction Engine
======================================

A custom-built predictive tool that uses OnDemand Chat API
to forecast stock manipulation outcomes and timelines.

This tool combines historical patterns, current signals, and
AI-powered prediction to estimate manipulation likelihood.
"""

import asyncio
from typing import List, Dict, Any, Optional
from datetime import datetime, timedelta
import json
from app.ai.ondemand_client import get_ondemand_client


class RiskPredictionEngineTool:
    """
    Custom risk prediction engine using OnDemand Chat API

    Features:
    - Outcome prediction (pump_and_dump, legitimate, etc.)
    - Timeline estimation
    - Confidence scoring
    - Alternative scenario analysis
    - Monitoring point identification
    """

    def __init__(self):
        self.client = get_ondemand_client()
        self.name = "risk_prediction_engine"
        self.description = "Predicts manipulation outcomes and timelines using AI"

        # Historical pattern database (simplified)
        self.historical_patterns = {
            "pump_and_dump": {
                "typical_duration": 15,  # days
                "indicators": ["high_delivery", "fii_exit", "hype_news"],
                "confidence_threshold": 0.7,
            },
            "gradual_decline": {
                "typical_duration": 30,
                "indicators": ["institutional_exit", "negative_sentiment"],
                "confidence_threshold": 0.6,
            },
            "legitimate_growth": {
                "typical_duration": 90,
                "indicators": ["strong_fundamentals", "institutional_buying"],
                "confidence_threshold": 0.5,
            },
        }

    async def predict_outcome(
        self,
        symbol: str,
        agent_signals: List[Dict[str, Any]],
        historical_data: Optional[Dict] = None,
        market_context: Optional[Dict] = None,
    ) -> Dict[str, Any]:
        """
        Predict likely outcome and timeline

        Args:
            symbol: Stock symbol
            agent_signals: Signals from all agents
            historical_data: Historical price/volume data
            market_context: Market conditions

        Returns:
            Prediction with confidence, timeline, and monitoring points
        """
        if not agent_signals:
            return self._empty_result()

        # Step 1: Pattern matching with historical data
        pattern_match = self._match_historical_patterns(agent_signals)

        # Step 2: Calculate risk indicators
        risk_indicators = self._calculate_risk_indicators(
            agent_signals, historical_data
        )

        # Step 3: Use OnDemand Chat API for AI prediction
        ai_prediction = await self._predict_with_chat_api(
            symbol=symbol,
            agent_signals=agent_signals,
            historical_data=historical_data,
            market_context=market_context,
            pattern_match=pattern_match,
        )

        # Step 4: Generate monitoring points
        monitoring_points = self._generate_monitoring_points(
            ai_prediction, agent_signals
        )

        # Step 5: Calculate alternative scenarios
        alternative_scenarios = self._calculate_alternatives(
            ai_prediction, pattern_match
        )

        # Step 6: Aggregate final prediction
        final_prediction = self._aggregate_prediction(
            symbol=symbol,
            pattern_match=pattern_match,
            risk_indicators=risk_indicators,
            ai_prediction=ai_prediction,
            monitoring_points=monitoring_points,
            alternative_scenarios=alternative_scenarios,
        )

        return final_prediction

    def _match_historical_patterns(
        self, agent_signals: List[Dict[str, Any]]
    ) -> Dict[str, Any]:
        """Match current signals with historical patterns"""

        # Extract signal types
        signal_types = set()
        total_risk_score = 0

        for signal in agent_signals:
            agent_type = signal.get("agent_type", "")
            risk_score = signal.get("risk_score", 0)

            total_risk_score += risk_score

            # Map agent types to indicators
            if agent_type == "retail_trap" and risk_score > 50:
                signal_types.add("fii_exit")

            if agent_type == "delivery_spike" and risk_score > 50:
                signal_types.add("high_delivery")

            if agent_type == "narrative_risk" and risk_score > 50:
                signal_types.add("hype_news")

            if agent_type == "misinformation" and risk_score > 50:
                signal_types.add("misinformation")

        # Match against historical patterns
        best_match = None
        best_match_score = 0

        for pattern_name, pattern_data in self.historical_patterns.items():
            pattern_indicators = set(pattern_data["indicators"])

            # Calculate overlap
            overlap = len(signal_types & pattern_indicators)
            match_score = overlap / len(pattern_indicators) if pattern_indicators else 0

            if match_score > best_match_score:
                best_match_score = match_score
                best_match = pattern_name

        return {
            "matched_pattern": best_match,
            "match_confidence": best_match_score,
            "detected_indicators": list(signal_types),
            "total_risk_score": (
                total_risk_score / len(agent_signals) if agent_signals else 0
            ),
        }

    def _calculate_risk_indicators(
        self, agent_signals: List[Dict[str, Any]], historical_data: Optional[Dict]
    ) -> Dict[str, Any]:
        """Calculate custom risk indicators"""

        indicators = {
            "high_risk_agents": 0,
            "medium_risk_agents": 0,
            "low_risk_agents": 0,
            "confidence_weighted_risk": 0,
            "signal_diversity": 0,
        }

        total_weighted_risk = 0
        total_confidence = 0

        for signal in agent_signals:
            risk_score = signal.get("risk_score", 0)
            confidence = signal.get("confidence", 0.5)

            if risk_score >= 70:
                indicators["high_risk_agents"] += 1
            elif risk_score >= 40:
                indicators["medium_risk_agents"] += 1
            else:
                indicators["low_risk_agents"] += 1

            total_weighted_risk += risk_score * confidence
            total_confidence += confidence

        if total_confidence > 0:
            indicators["confidence_weighted_risk"] = (
                total_weighted_risk / total_confidence
            )

        # Signal diversity (more diverse signals = higher confidence)
        indicators["signal_diversity"] = len(agent_signals) / 6.0  # 6 total agents

        return indicators

    async def _predict_with_chat_api(
        self,
        symbol: str,
        agent_signals: List[Dict[str, Any]],
        historical_data: Optional[Dict],
        market_context: Optional[Dict],
        pattern_match: Dict[str, Any],
    ) -> Dict[str, Any]:
        """
        Use OnDemand Chat API for AI-powered prediction

        This uses CHAT API for predictive analytics
        """

        system_prompt = """You are a quantitative analyst specializing in predicting stock manipulation outcomes.

Based on the provided signals and data, predict:
1. most_likely_outcome: "pump_and_dump", "gradual_decline", "legitimate_growth", or "consolidation"
2. confidence: 0.0 to 1.0
3. timeline_days: estimated days until outcome materializes
4. key_triggers: events that would confirm the prediction
5. risk_factors: what could go wrong with the prediction
6. reasoning: detailed explanation

Be data-driven and realistic. Don't overstate confidence."""

        # Prepare context
        context_data = {
            "symbol": symbol,
            "agent_signals": agent_signals,
            "pattern_match": pattern_match,
            "historical_data": historical_data or {},
            "market_context": market_context or {},
        }

        user_prompt = f"""Predict the likely outcome for this stock:

Data:
{json.dumps(context_data, indent=2, default=str)}

Return prediction in JSON format:
{{
    "most_likely_outcome": "outcome_type",
    "confidence": 0.0-1.0,
    "timeline_days": number,
    "key_triggers": ["list of triggers"],
    "risk_factors": ["list of risks"],
    "reasoning": "explanation"
}}"""

        try:
            # OnDemand Chat API call
            response = await self.client.chat_completion(
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": user_prompt},
                ],
                temperature=0.4,  # Moderate temperature for predictions
                max_tokens=1500,
            )

            content = (
                response.get("choices", [{}])[0].get("message", {}).get("content", "{}")
            )

            # Parse JSON
            import re

            json_match = re.search(r"\{.*\}", content, re.DOTALL)
            if json_match:
                result = json.loads(json_match.group())
                return result
            else:
                return self._default_prediction()

        except Exception as e:
            print(f"Prediction API error: {e}")
            return self._default_prediction()

    def _generate_monitoring_points(
        self, ai_prediction: Dict[str, Any], agent_signals: List[Dict[str, Any]]
    ) -> List[str]:
        """Generate specific monitoring points"""

        points = []

        # From AI prediction
        key_triggers = ai_prediction.get("key_triggers", [])
        points.extend(key_triggers)

        # From agent signals
        for signal in agent_signals:
            agent_type = signal.get("agent_type", "")
            risk_score = signal.get("risk_score", 0)

            if risk_score > 60:
                if agent_type == "retail_trap":
                    points.append("Monitor FII/DII shareholding changes")
                elif agent_type == "delivery_spike":
                    points.append("Track delivery percentage trends")
                elif agent_type == "microstructure":
                    points.append("Watch for price manipulation patterns")
                elif agent_type == "bulk_block_deals":
                    points.append("Monitor large deal activity")
                elif agent_type == "narrative_risk":
                    points.append("Track news sentiment and hype levels")
                elif agent_type == "misinformation":
                    points.append("Verify news sources and credibility")

        # Remove duplicates
        points = list(set(points))

        return points[:8]  # Top 8 monitoring points

    def _calculate_alternatives(
        self, ai_prediction: Dict[str, Any], pattern_match: Dict[str, Any]
    ) -> List[Dict[str, Any]]:
        """Calculate alternative scenarios"""

        primary_outcome = ai_prediction.get("most_likely_outcome", "unknown")
        primary_confidence = ai_prediction.get("confidence", 0.5)

        alternatives = []

        # Generate alternatives based on pattern match
        matched_pattern = pattern_match.get("matched_pattern")

        for pattern_name, pattern_data in self.historical_patterns.items():
            if pattern_name != matched_pattern:
                # Calculate alternative probability
                alt_confidence = (1 - primary_confidence) * 0.4

                alternatives.append(
                    {
                        "outcome": pattern_name,
                        "probability": alt_confidence,
                        "timeline_days": pattern_data["typical_duration"],
                        "conditions": f"If {pattern_name.replace('_', ' ')} indicators strengthen",
                    }
                )

        # Sort by probability
        alternatives.sort(key=lambda x: x["probability"], reverse=True)

        return alternatives[:3]  # Top 3 alternatives

    def _aggregate_prediction(
        self,
        symbol: str,
        pattern_match: Dict[str, Any],
        risk_indicators: Dict[str, Any],
        ai_prediction: Dict[str, Any],
        monitoring_points: List[str],
        alternative_scenarios: List[Dict[str, Any]],
    ) -> Dict[str, Any]:
        """Aggregate all prediction components"""

        # Calculate final confidence
        pattern_confidence = pattern_match.get("match_confidence", 0.5)
        ai_confidence = ai_prediction.get("confidence", 0.5)
        signal_diversity = risk_indicators.get("signal_diversity", 0.5)

        # Weighted combination
        final_confidence = (
            pattern_confidence * 0.3 + ai_confidence * 0.5 + signal_diversity * 0.2
        )

        # Determine prediction quality
        if final_confidence >= 0.8:
            prediction_quality = "HIGH"
        elif final_confidence >= 0.6:
            prediction_quality = "MEDIUM"
        else:
            prediction_quality = "LOW"

        return {
            "tool_name": self.name,
            "symbol": symbol,
            "predicted_outcome": ai_prediction.get("most_likely_outcome", "unknown"),
            "confidence": final_confidence,
            "prediction_quality": prediction_quality,
            "timeline_days": ai_prediction.get("timeline_days", 0),
            "estimated_date": (
                datetime.now() + timedelta(days=ai_prediction.get("timeline_days", 0))
            ).strftime("%Y-%m-%d"),
            "key_triggers": ai_prediction.get("key_triggers", []),
            "risk_factors": ai_prediction.get("risk_factors", []),
            "monitoring_points": monitoring_points,
            "alternative_scenarios": alternative_scenarios,
            "reasoning": ai_prediction.get("reasoning", ""),
            "pattern_match": {
                "matched_pattern": pattern_match.get("matched_pattern"),
                "match_confidence": pattern_confidence,
                "detected_indicators": pattern_match.get("detected_indicators", []),
            },
            "risk_indicators": risk_indicators,
            "timestamp": datetime.now().isoformat(),
        }

    def _default_prediction(self) -> Dict[str, Any]:
        """Default prediction when API fails"""
        return {
            "most_likely_outcome": "unknown",
            "confidence": 0.5,
            "timeline_days": 30,
            "key_triggers": [],
            "risk_factors": ["Insufficient data for accurate prediction"],
            "reasoning": "Default prediction due to API error",
        }

    def _empty_result(self) -> Dict[str, Any]:
        """Empty result when no signals"""
        return {
            "tool_name": self.name,
            "symbol": "N/A",
            "predicted_outcome": "unknown",
            "confidence": 0,
            "prediction_quality": "LOW",
            "timeline_days": 0,
            "estimated_date": datetime.now().strftime("%Y-%m-%d"),
            "key_triggers": [],
            "risk_factors": ["No agent signals available"],
            "monitoring_points": [],
            "alternative_scenarios": [],
            "reasoning": "Insufficient data",
            "timestamp": datetime.now().isoformat(),
        }


# Singleton instance
_prediction_tool = None


def get_risk_prediction_engine_tool() -> RiskPredictionEngineTool:
    """Get risk prediction engine tool instance"""
    global _prediction_tool
    if _prediction_tool is None:
        _prediction_tool = RiskPredictionEngineTool()
    return _prediction_tool
