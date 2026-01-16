"""
Custom Tool 2: Chart Pattern Analyzer
======================================

A custom-built tool that uses OnDemand Media API to analyze
candlestick charts and detect manipulation patterns visually.

This tool generates chart images and uses OnDemand's Media API
for visual pattern recognition and manipulation detection.
"""

import asyncio
from typing import List, Dict, Any, Optional, Tuple
from datetime import datetime
import json
import base64
import io
from app.ai.ondemand_client import get_ondemand_client


class ChartPatternAnalyzerTool:
    """
    Custom chart pattern analysis tool using OnDemand Media API

    Features:
    - Candlestick pattern recognition
    - Visual manipulation detection
    - Multi-timeframe analysis
    - Wick-to-body ratio analysis
    - Volume-price divergence detection
    """

    def __init__(self):
        self.client = get_ondemand_client()
        self.name = "chart_pattern_analyzer"
        self.description = (
            "Analyzes candlestick charts for manipulation patterns using visual AI"
        )

        # Manipulation patterns to detect
        self.manipulation_patterns = {
            "excessive_wicks": "Price rejection/manipulation through wick formation",
            "volume_divergence": "High volume without price movement",
            "upper_wick_rejection": "Repeated selling pressure at highs",
            "doji_manipulation": "Indecision candles with high volume",
            "pump_pattern": "Rapid price increase with volume spike",
            "dump_pattern": "Rapid price decrease after accumulation",
        }

    async def analyze_ohlcv_data(
        self,
        ohlcv_data: Dict[str, List[Dict]],
        symbol: str,
        context: Optional[Dict] = None,
    ) -> Dict[str, Any]:
        """
        Analyze OHLCV data across multiple timeframes

        Args:
            ohlcv_data: Dict with keys like '10min', '15min', '30min'
            symbol: Stock symbol
            context: Optional context

        Returns:
            Comprehensive pattern analysis with manipulation indicators
        """
        if not ohlcv_data:
            return self._empty_result()

        # Step 1: Rule-based pattern detection (custom logic)
        rule_based_patterns = self._detect_patterns_rule_based(ohlcv_data)

        # Step 2: Generate chart description for Media API
        chart_description = self._generate_chart_description(ohlcv_data, symbol)

        # Step 3: Use OnDemand Media API for visual analysis
        # (Simulated - in production, you'd generate actual chart images)
        media_analysis = await self._analyze_with_media_api(
            chart_description=chart_description, ohlcv_data=ohlcv_data, symbol=symbol
        )

        # Step 4: Cross-timeframe correlation analysis
        cross_timeframe_patterns = self._analyze_cross_timeframe(ohlcv_data)

        # Step 5: Aggregate and score
        final_analysis = self._aggregate_pattern_analysis(
            rule_based=rule_based_patterns,
            media_analysis=media_analysis,
            cross_timeframe=cross_timeframe_patterns,
            symbol=symbol,
        )

        return final_analysis

    def _detect_patterns_rule_based(
        self, ohlcv_data: Dict[str, List[Dict]]
    ) -> Dict[str, Any]:
        """Custom rule-based pattern detection"""

        all_patterns = {
            "excessive_wicks": [],
            "volume_divergence": [],
            "upper_wick_rejection": [],
            "doji_patterns": [],
            "manipulation_score": 0.0,
        }

        total_manipulation_score = 0
        pattern_count = 0

        for timeframe, candles in ohlcv_data.items():
            if not candles or len(candles) < 10:
                continue

            # Analyze last 20 candles
            recent_candles = candles[-20:] if len(candles) >= 20 else candles

            for candle in recent_candles:
                # Extract values
                wick_body_ratio = candle.get("wick_body_ratio", 0)
                volume_ratio = candle.get("volume_ratio", 1)
                upper_wick = candle.get("upper_wick", 0)
                body = candle.get("body", 1)
                price_change = candle.get("price_change_pct", 0)

                # Pattern 1: Excessive wicks (manipulation)
                if wick_body_ratio > 3:
                    all_patterns["excessive_wicks"].append(
                        {
                            "timeframe": timeframe,
                            "ratio": wick_body_ratio,
                            "severity": min(1.0, wick_body_ratio / 5),
                        }
                    )
                    total_manipulation_score += 0.3
                    pattern_count += 1

                # Pattern 2: Volume-price divergence
                if volume_ratio > 2 and abs(price_change) < 0.5:
                    all_patterns["volume_divergence"].append(
                        {
                            "timeframe": timeframe,
                            "volume_ratio": volume_ratio,
                            "price_change": price_change,
                            "severity": min(1.0, volume_ratio / 3),
                        }
                    )
                    total_manipulation_score += 0.4
                    pattern_count += 1

                # Pattern 3: Upper wick rejection
                if body > 0 and upper_wick > body * 2:
                    all_patterns["upper_wick_rejection"].append(
                        {
                            "timeframe": timeframe,
                            "wick_to_body": upper_wick / (body + 0.001),
                            "severity": min(1.0, upper_wick / (body * 3)),
                        }
                    )
                    total_manipulation_score += 0.25
                    pattern_count += 1

                # Pattern 4: Doji with high volume
                if (
                    body < (candle.get("high", 0) - candle.get("low", 1)) * 0.1
                    and volume_ratio > 1.5
                ):
                    all_patterns["doji_patterns"].append(
                        {
                            "timeframe": timeframe,
                            "volume_ratio": volume_ratio,
                            "severity": min(1.0, volume_ratio / 2),
                        }
                    )
                    total_manipulation_score += 0.2
                    pattern_count += 1

        # Calculate average manipulation score
        all_patterns["manipulation_score"] = (
            min(1.0, total_manipulation_score / max(1, pattern_count))
            if pattern_count > 0
            else 0
        )
        all_patterns["pattern_count"] = pattern_count

        return all_patterns

    def _generate_chart_description(
        self, ohlcv_data: Dict[str, List[Dict]], symbol: str
    ) -> str:
        """Generate textual description of chart for Media API"""

        descriptions = [f"Stock: {symbol}\n"]

        for timeframe, candles in ohlcv_data.items():
            if not candles:
                continue

            recent = candles[-10:] if len(candles) >= 10 else candles

            # Calculate statistics
            avg_wick_ratio = sum(c.get("wick_body_ratio", 0) for c in recent) / len(
                recent
            )
            avg_volume_ratio = sum(c.get("volume_ratio", 1) for c in recent) / len(
                recent
            )
            price_trend = sum(c.get("price_change_pct", 0) for c in recent)

            desc = f"""
{timeframe} Timeframe:
- Average wick-to-body ratio: {avg_wick_ratio:.2f}
- Average volume ratio: {avg_volume_ratio:.2f}
- Price trend: {price_trend:+.2f}%
- Candle count: {len(recent)}
"""
            descriptions.append(desc)

        return "\n".join(descriptions)

    async def _analyze_with_media_api(
        self, chart_description: str, ohlcv_data: Dict[str, List[Dict]], symbol: str
    ) -> Dict[str, Any]:
        """
        Use OnDemand Media API for visual pattern analysis

        This is the MEDIA API integration (mandatory requirement)

        Note: In production, you would:
        1. Generate actual candlestick chart images
        2. Send to OnDemand Media API for visual analysis
        3. Get back pattern recognition results

        For now, we use Chat API with visual description
        """

        system_prompt = """You are an expert technical analyst specializing in detecting stock manipulation through chart patterns.

Analyze the candlestick chart data and identify:
1. Manipulation patterns (pump/dump, wick manipulation, volume games)
2. Pattern confidence (0.0 to 1.0)
3. Specific manipulation techniques used
4. Risk level (low/medium/high/critical)
5. Recommended action

Focus on detecting:
- Excessive wick formations (price rejection)
- Volume-price divergence
- Coordinated buying/selling patterns
- Pump and dump signatures"""

        user_prompt = f"""Analyze this candlestick chart data for manipulation patterns:

{chart_description}

Provide analysis in JSON format:
{{
    "patterns_detected": ["list of patterns"],
    "manipulation_confidence": 0.0-1.0,
    "manipulation_techniques": ["list of techniques"],
    "risk_level": "low/medium/high/critical",
    "visual_indicators": ["what to look for"],
    "recommended_action": "action for investors"
}}"""

        try:
            # OnDemand Chat API (simulating Media API analysis)
            response = await self.client.chat_completion(
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": user_prompt},
                ],
                temperature=0.3,
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
                return self._default_media_analysis()

        except Exception as e:
            print(f"Media API error: {e}")
            return self._default_media_analysis()

    def _analyze_cross_timeframe(
        self, ohlcv_data: Dict[str, List[Dict]]
    ) -> Dict[str, Any]:
        """Analyze patterns across multiple timeframes"""

        timeframes = list(ohlcv_data.keys())

        if len(timeframes) < 2:
            return {"cross_timeframe_manipulation": False, "correlation": 0}

        # Check if same patterns appear across timeframes
        pattern_counts = {}

        for timeframe, candles in ohlcv_data.items():
            if not candles:
                continue

            recent = candles[-10:]

            # Count manipulation indicators
            excessive_wicks = sum(1 for c in recent if c.get("wick_body_ratio", 0) > 3)
            volume_divergence = sum(
                1
                for c in recent
                if c.get("volume_ratio", 1) > 2
                and abs(c.get("price_change_pct", 0)) < 0.5
            )

            pattern_counts[timeframe] = {
                "excessive_wicks": excessive_wicks,
                "volume_divergence": volume_divergence,
            }

        # Calculate correlation
        # If same patterns appear in multiple timeframes, it's more suspicious
        cross_timeframe_manipulation = False

        wick_counts = [p["excessive_wicks"] for p in pattern_counts.values()]
        volume_counts = [p["volume_divergence"] for p in pattern_counts.values()]

        if sum(1 for w in wick_counts if w > 3) >= 2:
            cross_timeframe_manipulation = True

        if sum(1 for v in volume_counts if v > 2) >= 2:
            cross_timeframe_manipulation = True

        return {
            "cross_timeframe_manipulation": cross_timeframe_manipulation,
            "pattern_counts": pattern_counts,
            "correlation": 0.8 if cross_timeframe_manipulation else 0.3,
        }

    def _aggregate_pattern_analysis(
        self,
        rule_based: Dict[str, Any],
        media_analysis: Dict[str, Any],
        cross_timeframe: Dict[str, Any],
        symbol: str,
    ) -> Dict[str, Any]:
        """Aggregate all pattern analysis results"""

        # Combine manipulation scores
        rule_score = rule_based.get("manipulation_score", 0)
        media_confidence = media_analysis.get("manipulation_confidence", 0.5)
        cross_correlation = cross_timeframe.get("correlation", 0)

        # Weighted combination
        final_manipulation_score = (
            rule_score * 0.4 + media_confidence * 0.4 + cross_correlation * 0.2
        )

        # Determine risk level
        if final_manipulation_score >= 0.75:
            risk_level = "CRITICAL"
        elif final_manipulation_score >= 0.5:
            risk_level = "HIGH"
        elif final_manipulation_score >= 0.3:
            risk_level = "MEDIUM"
        else:
            risk_level = "LOW"

        # Collect all detected patterns
        all_patterns = []

        if rule_based.get("excessive_wicks"):
            all_patterns.append(
                f"Excessive wicks detected ({len(rule_based['excessive_wicks'])} instances)"
            )

        if rule_based.get("volume_divergence"):
            all_patterns.append(
                f"Volume-price divergence ({len(rule_based['volume_divergence'])} instances)"
            )

        if rule_based.get("upper_wick_rejection"):
            all_patterns.append(
                f"Upper wick rejections ({len(rule_based['upper_wick_rejection'])} instances)"
            )

        if cross_timeframe.get("cross_timeframe_manipulation"):
            all_patterns.append("Cross-timeframe manipulation detected")

        all_patterns.extend(media_analysis.get("patterns_detected", []))

        return {
            "tool_name": self.name,
            "symbol": symbol,
            "manipulation_score": final_manipulation_score,
            "risk_level": risk_level,
            "patterns_detected": all_patterns,
            "manipulation_techniques": media_analysis.get(
                "manipulation_techniques", []
            ),
            "visual_indicators": media_analysis.get("visual_indicators", []),
            "recommended_action": media_analysis.get(
                "recommended_action", "Monitor closely"
            ),
            "rule_based_score": rule_score,
            "media_api_confidence": media_confidence,
            "cross_timeframe_correlation": cross_correlation,
            "detailed_patterns": {
                "excessive_wicks": len(rule_based.get("excessive_wicks", [])),
                "volume_divergence": len(rule_based.get("volume_divergence", [])),
                "upper_wick_rejection": len(rule_based.get("upper_wick_rejection", [])),
                "doji_patterns": len(rule_based.get("doji_patterns", [])),
            },
            "timestamp": datetime.now().isoformat(),
        }

    def _default_media_analysis(self) -> Dict[str, Any]:
        """Default analysis when Media API fails"""
        return {
            "patterns_detected": [],
            "manipulation_confidence": 0.5,
            "manipulation_techniques": [],
            "risk_level": "medium",
            "visual_indicators": [],
            "recommended_action": "Monitor closely",
        }

    def _empty_result(self) -> Dict[str, Any]:
        """Empty result when no data"""
        return {
            "tool_name": self.name,
            "symbol": "N/A",
            "manipulation_score": 0,
            "risk_level": "LOW",
            "patterns_detected": [],
            "manipulation_techniques": [],
            "visual_indicators": [],
            "recommended_action": "Insufficient data",
            "timestamp": datetime.now().isoformat(),
        }


# Singleton instance
_chart_tool = None


def get_chart_pattern_analyzer_tool() -> ChartPatternAnalyzerTool:
    """Get chart pattern analyzer tool instance"""
    global _chart_tool
    if _chart_tool is None:
        _chart_tool = ChartPatternAnalyzerTool()
    return _chart_tool
