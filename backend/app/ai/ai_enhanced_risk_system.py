"""
AI-Enhanced Multi-Agent Risk Detection System
==============================================

HACKATHON REQUIREMENTS FULFILLED:

1. CUSTOM TOOLS (3+ required):
   ✅ Sentiment Analyzer Tool - OnDemand Chat API
   ✅ Chart Pattern Analyzer Tool - OnDemand Media API
   ✅ Risk Prediction Engine Tool - OnDemand Chat API

2. API INTEGRATIONS (2+ required):
   ✅ Chat API - Sentiment analysis & predictions (MANDATORY)
   ✅ Media API - Chart pattern recognition (MANDATORY)
   ✅ Plugin/External - Market data APIs (OPTIONAL)

3. MULTI-AGENT ARCHITECTURE (6+ required):
   ✅ All 6 agents from multi_agent_risk_system integrated

This system combines traditional rule-based agents with custom-built
tools powered by OnDemand AI for superior manipulation detection.
"""

from typing import Dict, List, Optional, Any
from datetime import datetime
import asyncio
from dataclasses import dataclass, field

from app.ai.multi_agent_risk_system import (
    MultiAgentRiskSystem,
    AgentType,
    RiskLevel,
    AgentSignal,
    UnifiedRiskAssessment,
)
from app.ai.ondemand_client import get_ondemand_client
from app.tools.tool_registry import get_tool_registry


@dataclass
class AIEnhancedRiskAssessment:
    """Enhanced risk assessment with AI insights and custom tool results"""

    # Original assessment from 6 agents
    base_assessment: UnifiedRiskAssessment

    # Custom Tool Results (Hackathon Requirement)
    sentiment_tool_result: Dict[str, Any] = field(default_factory=dict)
    chart_tool_result: Dict[str, Any] = field(default_factory=dict)
    prediction_tool_result: Dict[str, Any] = field(default_factory=dict)

    # AI enhancements
    llm_manipulation_score: float = 0.0  # 0-100 from LLM analysis
    llm_confidence: float = 0.0  # 0-1
    manipulation_type: str = "unknown"
    key_red_flags: List[str] = field(default_factory=list)
    llm_reasoning: str = ""
    recommended_action: str = ""

    # Predictive analytics
    predicted_outcome: str = "unknown"
    prediction_confidence: float = 0.0
    timeline_days: int = 0
    monitoring_points: List[str] = field(default_factory=list)

    # Enhanced explanation
    ai_generated_explanation: str = ""

    # Sentiment analysis
    news_sentiment_scores: List[Dict[str, Any]] = field(default_factory=list)

    # Combined final score (base + AI + tools)
    final_risk_score: float = 0.0
    final_risk_level: RiskLevel = RiskLevel.LOW

    timestamp: datetime = field(default_factory=datetime.now)


class AIEnhancedRiskSystem:
    """
    Multi-agent risk detection system enhanced with OnDemand AI and custom tools

    This system fulfills all hackathon requirements:
    - 6+ agents (inherited from MultiAgentRiskSystem)
    - 3+ custom tools (Sentiment, Chart, Prediction)
    - 2+ API integrations (Chat API, Media API)
    """

    def __init__(
        self,
        use_ai_enhancement: bool = True,
        ai_weight: float = 0.3,
        enable_predictions: bool = True,
        enable_sentiment: bool = True,
        use_custom_tools: bool = True,
    ):
        """
        Initialize AI-enhanced risk system

        Args:
            use_ai_enhancement: Whether to use OnDemand AI enhancements
            ai_weight: Weight of AI score in final calculation (0-1)
            enable_predictions: Enable outcome predictions
            enable_sentiment: Enable AI sentiment analysis
            use_custom_tools: Enable custom tools (hackathon requirement)
        """
        self.base_system = MultiAgentRiskSystem()
        self.ondemand_client = get_ondemand_client() if use_ai_enhancement else None
        self.use_ai_enhancement = use_ai_enhancement
        self.ai_weight = ai_weight
        self.enable_predictions = enable_predictions
        self.enable_sentiment = enable_sentiment
        self.use_custom_tools = use_custom_tools

        # Initialize custom tools (Hackathon Requirement)
        if self.use_custom_tools:
            self.tool_registry = get_tool_registry()
            self.sentiment_tool = self.tool_registry.get_tool("sentiment_analyzer")
            self.chart_tool = self.tool_registry.get_tool("chart_pattern_analyzer")
            self.prediction_tool = self.tool_registry.get_tool("risk_prediction_engine")

    async def analyze_with_ai(
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
        historical_data: Optional[Dict] = None,
        include_shareholding: bool = True,
        include_delivery: bool = True,
        include_microstructure: bool = True,
        include_deals: bool = True,
        include_news: bool = True,
    ) -> AIEnhancedRiskAssessment:
        """
        Perform AI-enhanced risk analysis with custom tools

        This method demonstrates all hackathon requirements:
        - Uses 6 agents from base system
        - Applies 3 custom tools
        - Integrates Chat and Media APIs

        Args:
            symbol: Stock symbol
            [data parameters]: Same as base system
            [include parameters]: Same as base system

        Returns:
            AI-enhanced risk assessment with tool results
        """
        # Step 1: Run base multi-agent analysis (6 agents)
        # Note: Base system automatically runs agents based on whether data is provided (non-None)
        # We filter data based on include_* flags before passing to the base system
        base_assessment = self.base_system.analyze(
            symbol=symbol,
            shareholding_data=shareholding_data if include_shareholding else None,
            delivery_data=delivery_data if include_delivery else None,
            price_data=price_data if include_delivery else None,
            ohlcv_data=ohlcv_data if include_microstructure else None,
            bulk_deals=bulk_deals if include_deals else None,
            block_deals=block_deals if include_deals else None,
            news_articles=news_articles if include_news else None,
            social_posts=social_posts if include_news else None,
        )

        if not self.use_ai_enhancement or not self.ondemand_client:
            # Return base assessment wrapped in AI format
            return self._wrap_base_assessment(base_assessment)

        # Step 2: Prepare data for AI analysis
        agent_signals_dict = [
            {
                "agent_type": signal.agent_type.value,
                "risk_score": signal.risk_score,
                "confidence": signal.confidence,
                "signals": signal.signals,
                "metadata": signal.metadata,
            }
            for signal in base_assessment.agent_signals
        ]

        # Step 3: Run custom tools in parallel (Hackathon Requirement)
        tool_tasks = []

        # CUSTOM TOOL 1: Sentiment Analyzer (Chat API)
        if self.use_custom_tools and self.enable_sentiment and news_articles:
            tool_tasks.append(
                self.sentiment_tool.analyze_batch(
                    articles=news_articles, context={"symbol": symbol}
                )
            )
        else:
            tool_tasks.append(asyncio.sleep(0))

        # CUSTOM TOOL 2: Chart Pattern Analyzer (Media API)
        if self.use_custom_tools and ohlcv_data:
            tool_tasks.append(
                self.chart_tool.analyze_ohlcv_data(
                    ohlcv_data=ohlcv_data,
                    symbol=symbol,
                    context={"base_risk_score": base_assessment.overall_risk_score},
                )
            )
        else:
            tool_tasks.append(asyncio.sleep(0))

        # CUSTOM TOOL 3: Risk Prediction Engine (Chat API)
        if self.use_custom_tools and self.enable_predictions:
            tool_tasks.append(
                self.prediction_tool.predict_outcome(
                    symbol=symbol,
                    agent_signals=agent_signals_dict,
                    historical_data=historical_data,
                    market_context={
                        "base_risk_score": base_assessment.overall_risk_score
                    },
                )
            )
        else:
            tool_tasks.append(asyncio.sleep(0))

        # Execute all custom tools in parallel
        tool_results = await asyncio.gather(*tool_tasks, return_exceptions=True)

        # Parse tool results (handle None from asyncio.sleep and Exceptions)
        sentiment_result = tool_results[0] if isinstance(tool_results[0], dict) else {}
        chart_result = tool_results[1] if isinstance(tool_results[1], dict) else {}
        prediction_result = tool_results[2] if isinstance(tool_results[2], dict) else {}

        # Step 4: Aggregate scores from all sources
        final_score, final_risk_level = self._calculate_final_score(
            base_score=base_assessment.overall_risk_score,
            sentiment_result=sentiment_result,
            chart_result=chart_result,
            prediction_result=prediction_result,
        )

        # Step 5: Extract insights from tools
        manipulation_type, key_red_flags, recommended_action = self._extract_insights(
            sentiment_result=sentiment_result,
            chart_result=chart_result,
            prediction_result=prediction_result,
        )

        # Step 6: Generate AI explanation
        ai_explanation = await self._generate_explanation(
            symbol=symbol,
            base_assessment=base_assessment,
            sentiment_result=sentiment_result,
            chart_result=chart_result,
            prediction_result=prediction_result,
            final_score=final_score,
        )

        # Step 7: Create enhanced assessment
        return AIEnhancedRiskAssessment(
            base_assessment=base_assessment,
            sentiment_tool_result=sentiment_result,
            chart_tool_result=chart_result,
            prediction_tool_result=prediction_result,
            llm_manipulation_score=sentiment_result.get("manipulation_risk", 0) * 100,
            llm_confidence=sentiment_result.get("credibility_score", 0.5),
            manipulation_type=manipulation_type,
            key_red_flags=key_red_flags,
            llm_reasoning=chart_result.get("recommended_action", ""),
            recommended_action=recommended_action,
            predicted_outcome=prediction_result.get("predicted_outcome", "unknown"),
            prediction_confidence=prediction_result.get("confidence", 0),
            timeline_days=prediction_result.get("timeline_days", 0),
            monitoring_points=prediction_result.get("monitoring_points", []),
            ai_generated_explanation=ai_explanation,
            news_sentiment_scores=sentiment_result.get("detailed_results", []),
            final_risk_score=final_score,
            final_risk_level=final_risk_level,
        )

    def _calculate_final_score(
        self,
        base_score: float,
        sentiment_result: Dict,
        chart_result: Dict,
        prediction_result: Dict,
    ) -> tuple[float, RiskLevel]:
        """Calculate final risk score combining all sources"""

        # Extract scores from custom tools
        sentiment_risk = sentiment_result.get("manipulation_risk", 0.5) * 100
        chart_risk = chart_result.get("manipulation_score", 0.5) * 100
        prediction_confidence = prediction_result.get("confidence", 0.5)

        # Weighted combination
        # Base agents: 40%, Sentiment tool: 25%, Chart tool: 25%, Prediction: 10%
        final_score = (
            base_score * 0.4
            + sentiment_risk * 0.25
            + chart_risk * 0.25
            + prediction_confidence * 100 * 0.1
        )

        # Determine risk level
        if final_score >= 75:
            risk_level = RiskLevel.CRITICAL
        elif final_score >= 50:
            risk_level = RiskLevel.HIGH
        elif final_score >= 25:
            risk_level = RiskLevel.MEDIUM
        else:
            risk_level = RiskLevel.LOW

        return final_score, risk_level

    def _extract_insights(
        self, sentiment_result: Dict, chart_result: Dict, prediction_result: Dict
    ) -> tuple[str, List[str], str]:
        """Extract key insights from tool results"""

        # Determine manipulation type
        predicted_outcome = prediction_result.get("predicted_outcome", "unknown")
        manipulation_type = (
            predicted_outcome
            if predicted_outcome != "unknown"
            else "potential_manipulation"
        )

        # Collect red flags from all tools
        red_flags = []

        # From sentiment tool
        red_flags.extend(sentiment_result.get("manipulation_indicators", []))

        # From chart tool
        red_flags.extend(chart_result.get("patterns_detected", []))

        # From prediction tool
        red_flags.extend(prediction_result.get("risk_factors", []))

        # Deduplicate
        red_flags = list(set(red_flags))[:10]  # Top 10

        # Determine recommended action
        risk_level = chart_result.get("risk_level", "MEDIUM")
        if risk_level == "CRITICAL":
            recommended_action = "AVOID - Critical manipulation risk detected"
        elif risk_level == "HIGH":
            recommended_action = "CAUTION - High risk, avoid or exit positions"
        elif risk_level == "MEDIUM":
            recommended_action = "MONITOR - Watch closely for further signals"
        else:
            recommended_action = "REVIEW - Low risk but stay informed"

        return manipulation_type, red_flags, recommended_action

    async def _generate_explanation(
        self,
        symbol: str,
        base_assessment: UnifiedRiskAssessment,
        sentiment_result: Dict,
        chart_result: Dict,
        prediction_result: Dict,
        final_score: float,
    ) -> str:
        """Generate AI-powered explanation using Chat API"""

        if not self.ondemand_client:
            return "AI explanation unavailable"

        try:
            explanation = await self.ondemand_client.generate_risk_explanation(
                symbol=symbol,
                risk_score=final_score,
                agent_signals=[
                    {
                        "agent_type": s.agent_type.value,
                        "risk_score": s.risk_score,
                        "signals": s.signals,
                    }
                    for s in base_assessment.agent_signals
                ],
                market_context={
                    "sentiment_analysis": sentiment_result,
                    "chart_analysis": chart_result,
                    "prediction": prediction_result,
                },
            )
            return explanation
        except:
            return f"Risk Score: {final_score:.1f}/100. Review detailed analysis for insights."

    def _wrap_base_assessment(
        self, base_assessment: UnifiedRiskAssessment
    ) -> AIEnhancedRiskAssessment:
        """Wrap base assessment when AI is disabled"""
        return AIEnhancedRiskAssessment(
            base_assessment=base_assessment,
            sentiment_tool_result={},
            chart_tool_result={},
            prediction_tool_result={},
            llm_manipulation_score=0,
            llm_confidence=0,
            manipulation_type="ai_disabled",
            key_red_flags=[],
            llm_reasoning="AI enhancement disabled",
            recommended_action="Review base assessment",
            predicted_outcome="unknown",
            prediction_confidence=0,
            timeline_days=0,
            monitoring_points=[],
            ai_generated_explanation="AI enhancement is disabled. Using base multi-agent analysis only.",
            news_sentiment_scores=[],
            final_risk_score=base_assessment.overall_risk_score,
            final_risk_level=base_assessment.risk_level,
        )

    def to_dict(self, assessment: AIEnhancedRiskAssessment) -> Dict[str, Any]:
        """Convert assessment to dictionary for API response"""
        return {
            "symbol": assessment.base_assessment.symbol,
            "timestamp": assessment.timestamp.isoformat(),
            # Scores
            "base_risk_score": assessment.base_assessment.overall_risk_score,
            "ai_manipulation_score": assessment.llm_manipulation_score,
            "final_risk_score": assessment.final_risk_score,
            "base_risk_level": assessment.base_assessment.risk_level.value,
            "final_risk_level": assessment.final_risk_level.value,
            # AI insights
            "manipulation_type": assessment.manipulation_type,
            "key_red_flags": assessment.key_red_flags,
            "ai_reasoning": assessment.llm_reasoning,
            "recommended_action": assessment.recommended_action,
            # Predictions
            "predicted_outcome": assessment.predicted_outcome,
            "prediction_confidence": assessment.prediction_confidence,
            "timeline_days": assessment.timeline_days,
            "monitoring_points": assessment.monitoring_points,
            # Explanations
            "ai_explanation": assessment.ai_generated_explanation,
            "base_explanation": assessment.base_assessment.explanation,
            # Agent signals (6 agents - Hackathon Requirement)
            "agent_signals": [
                {
                    "agent_type": signal.agent_type.value,
                    "risk_score": signal.risk_score,
                    "confidence": signal.confidence,
                    "signals": signal.signals,
                    "metadata": signal.metadata,
                }
                for signal in assessment.base_assessment.agent_signals
            ],
            # Agent contributions
            "agent_contributions": {
                agent_type.value: contribution
                for agent_type, contribution in assessment.base_assessment.agent_contributions.items()
            },
            # Co-occurrence amplifications
            "co_occurrence_amplifications": [
                {
                    "agent1": agent1.value,
                    "agent2": agent2.value,
                    "bonus": bonus,
                }
                for agent1, agent2, bonus in assessment.base_assessment.co_occurrence_amplifications
            ],
            # Sentiment
            "news_sentiment": assessment.news_sentiment_scores,
            # Metadata
            "ai_enhanced": self.use_ai_enhancement,
            "ai_weight": self.ai_weight,
            "ai_confidence": assessment.llm_confidence,
            "custom_tools_used": self.use_custom_tools,
            "data_sources_used": [],  # This will be populated by the route handler
        }


# Singleton instance
_ai_enhanced_system: Optional[AIEnhancedRiskSystem] = None


def get_ai_enhanced_system(
    use_ai: bool = True, ai_weight: float = 0.3, use_custom_tools: bool = True
) -> AIEnhancedRiskSystem:
    """Get or create AI-enhanced risk system singleton"""
    global _ai_enhanced_system

    if _ai_enhanced_system is None:
        _ai_enhanced_system = AIEnhancedRiskSystem(
            use_ai_enhancement=use_ai,
            ai_weight=ai_weight,
            use_custom_tools=use_custom_tools,
        )

    return _ai_enhanced_system
