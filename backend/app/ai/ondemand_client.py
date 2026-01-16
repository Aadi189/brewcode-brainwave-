"""
OnDemand API Client
===================

Client for integrating with OnDemand AI platform for agentic workflows.
Uses the official OnDemand Chat API with session-based conversations.

API Flow:
1. Create a chat session: POST /chat/v1/sessions
2. Submit query: POST /chat/v1/sessions/{sessionId}/query
"""

import os
import httpx
from typing import Dict, List, Optional, Any
from datetime import datetime
import json
from dotenv import load_dotenv

load_dotenv()


class OnDemandClient:
    """Client for OnDemand AI Platform API (Official Implementation)"""

    def __init__(self, api_key: Optional[str] = None):
        """
        Initialize OnDemand client

        Args:
            api_key: OnDemand API key (defaults to env var ONDEMAND_API_KEY)
        """
        self.api_key = api_key or os.getenv("ONDEMAND_API_KEY")

        if not self.api_key:
            raise ValueError(
                "OnDemand API key not provided. Set ONDEMAND_API_KEY environment variable."
            )

        # OnDemand's official API base URL
        self.base_url = os.getenv(
            "ONDEMAND_BASE_URL", "https://api.on-demand.io"
        ).rstrip("/")

        self.headers = {
            "apikey": self.api_key,
            "Content-Type": "application/json",
        }

        # Cache for active session IDs
        self._session_cache: Dict[str, str] = {}

        # Default endpoint for LLM calls
        self.default_endpoint = "predefined-openai-gpt4o"

    async def create_session(self, external_user_id: str = "risk-system-user") -> str:
        """
        Create a new chat session

        Args:
            external_user_id: External user identifier

        Returns:
            Session ID
        """
        async with httpx.AsyncClient(timeout=30.0) as client:
            response = await client.post(
                f"{self.base_url}/chat/v1/sessions",
                headers=self.headers,
                json={
                    "agentIds": [],
                    "externalUserId": external_user_id,
                },
            )
            response.raise_for_status()
            data = response.json()
            return data["data"]["id"]

    async def submit_query(
        self,
        session_id: str,
        query: str,
        endpoint_id: Optional[str] = None,
        response_mode: str = "sync",
    ) -> Dict[str, Any]:
        """
        Submit a query to a chat session

        Args:
            session_id: The session ID
            query: The query/prompt to submit
            endpoint_id: LLM endpoint (default: predefined-openai-gpt4o)
            response_mode: 'sync' or 'stream'

        Returns:
            Response dict with answer and metadata
        """
        endpoint = endpoint_id or self.default_endpoint

        async with httpx.AsyncClient(timeout=120.0) as client:
            response = await client.post(
                f"{self.base_url}/chat/v1/sessions/{session_id}/query",
                headers=self.headers,
                json={
                    "endpointId": endpoint,
                    "query": query,
                    "responseMode": response_mode,
                },
            )
            response.raise_for_status()
            return response.json()

    async def chat_completion(
        self,
        messages: List[Dict[str, str]],
        model: str = "gpt-4o",
        temperature: float = 0.7,
        max_tokens: int = 2000,
        **kwargs,
    ) -> Dict[str, Any]:
        """
        Get chat completion from OnDemand LLM (convenience method)

        Mimics OpenAI-style interface but uses OnDemand's session-based API.

        Args:
            messages: List of message dicts with 'role' and 'content'
            model: Model name (maps to OnDemand endpoints)
            temperature: Not directly used (OnDemand manages this)
            max_tokens: Not directly used (OnDemand manages this)

        Returns:
            Response dict formatted like OpenAI's response
        """
        # Map model names to OnDemand endpoints
        endpoint_map = {
            "gpt-4": "predefined-openai-gpt4o",
            "gpt-4o": "predefined-openai-gpt4o",
            "gpt-4-turbo": "predefined-openai-gpt4o",
            "gpt-3.5-turbo": "predefined-openai-gpt4o",  # Use GPT-4o as default
            "claude-3": "predefined-openai-gpt4o",  # Fallback to GPT-4o
        }

        endpoint_id = endpoint_map.get(model, self.default_endpoint)

        # Combine messages into a single query
        # Format: System message first, then combine user/assistant messages
        query_parts = []

        for msg in messages:
            role = msg.get("role", "user")
            content = msg.get("content", "")

            if role == "system":
                query_parts.insert(0, f"SYSTEM INSTRUCTIONS:\n{content}\n")
            elif role == "user":
                query_parts.append(f"USER:\n{content}")
            elif role == "assistant":
                query_parts.append(f"ASSISTANT:\n{content}")

        query = "\n\n".join(query_parts)

        # Create a new session for each completion (stateless approach)
        session_id = await self.create_session(f"chat-{datetime.now().timestamp()}")

        # Submit the query
        result = await self.submit_query(
            session_id=session_id,
            query=query,
            endpoint_id=endpoint_id,
        )

        # Extract answer
        answer = result.get("data", {}).get("answer", "")

        # Format response like OpenAI
        return {
            "id": result.get("data", {}).get("messageId", ""),
            "object": "chat.completion",
            "created": int(datetime.now().timestamp()),
            "model": model,
            "choices": [
                {
                    "index": 0,
                    "message": {
                        "role": "assistant",
                        "content": answer,
                    },
                    "finish_reason": "stop",
                }
            ],
            "usage": {
                "prompt_tokens": result.get("data", {})
                .get("metrics", {})
                .get("inputTokens", 0),
                "completion_tokens": result.get("data", {})
                .get("metrics", {})
                .get("outputTokens", 0),
                "total_tokens": result.get("data", {})
                .get("metrics", {})
                .get("totalTokens", 0),
            },
            "_ondemand_session_id": session_id,
            "_ondemand_raw": result,
        }

    async def analyze_sentiment(
        self, texts: List[str], model: str = "gpt-4o"
    ) -> List[Dict[str, Any]]:
        """
        Analyze sentiment of financial texts using OnDemand

        Args:
            texts: List of text strings to analyze
            model: Model to use

        Returns:
            List of sentiment results
        """
        prompt = f"""You are a financial sentiment analysis expert. Analyze the sentiment of the following texts and return a JSON array with sentiment (positive/negative/neutral) and confidence score (0-1) for each text.

Texts to analyze:
{json.dumps(texts, indent=2)}

Return ONLY a valid JSON array like:
[{{"text_index": 0, "sentiment": "positive", "confidence": 0.85}}, ...]"""

        response = await self.chat_completion(
            messages=[{"role": "user", "content": prompt}],
            model=model,
        )

        content = (
            response.get("choices", [{}])[0].get("message", {}).get("content", "[]")
        )

        try:
            import re

            json_match = re.search(r"\[.*\]", content, re.DOTALL)
            if json_match:
                return json.loads(json_match.group())
            else:
                return []
        except:
            return []

    async def detect_manipulation_patterns(
        self, stock_data: Dict[str, Any], agent_signals: List[Dict[str, Any]]
    ) -> Dict[str, Any]:
        """
        Use OnDemand LLM to detect sophisticated manipulation patterns

        Args:
            stock_data: Stock data including price, volume, shareholding
            agent_signals: Signals from individual agents

        Returns:
            Enhanced analysis with LLM insights
        """
        prompt = f"""You are an expert in detecting stock market manipulation and pump-and-dump schemes.

Analyze the following data and agent signals to identify potential manipulation:

STOCK DATA:
{json.dumps(stock_data, indent=2)}

AGENT SIGNALS:
{json.dumps(agent_signals, indent=2)}

Provide a detailed analysis in JSON format with:
1. "manipulation_likelihood": score from 0-100
2. "key_red_flags": list of concerning patterns
3. "manipulation_type": type of manipulation detected (pump_and_dump, circular_trading, insider_manipulation, etc.)
4. "confidence": confidence level (0-1)
5. "reasoning": detailed explanation
6. "recommended_action": what investors should do

Return ONLY valid JSON."""

        response = await self.chat_completion(
            messages=[
                {
                    "role": "system",
                    "content": "You are a financial forensics expert specializing in market manipulation detection. Provide precise, data-driven analysis. Always return valid JSON.",
                },
                {"role": "user", "content": prompt},
            ],
        )

        content = (
            response.get("choices", [{}])[0].get("message", {}).get("content", "{}")
        )

        try:
            import re

            json_match = re.search(r"\{.*\}", content, re.DOTALL)
            if json_match:
                return json.loads(json_match.group())
            else:
                return self._default_manipulation_response()
        except Exception as e:
            return self._default_manipulation_response(str(e))

    def _default_manipulation_response(self, error: str = "") -> Dict[str, Any]:
        """Default response when parsing fails"""
        return {
            "manipulation_likelihood": 0,
            "key_red_flags": [],
            "manipulation_type": "unknown",
            "confidence": 0,
            "reasoning": f"Failed to parse LLM response. {error}".strip(),
            "recommended_action": "Manual review required",
        }

    async def generate_risk_explanation(
        self,
        symbol: str,
        risk_score: float,
        agent_signals: List[Dict[str, Any]],
        market_context: Optional[Dict[str, Any]] = None,
    ) -> str:
        """
        Generate human-readable risk explanation using OnDemand LLM

        Args:
            symbol: Stock symbol
            risk_score: Overall risk score
            agent_signals: Signals from all agents
            market_context: Optional market context

        Returns:
            Detailed explanation string
        """
        prompt = f"""Generate a clear, concise risk assessment report for stock {symbol}.

RISK SCORE: {risk_score}/100

AGENT SIGNALS:
{json.dumps(agent_signals, indent=2)}

{f"MARKET CONTEXT: {json.dumps(market_context, indent=2)}" if market_context else ""}

Create a professional risk report that:
1. Summarizes the overall risk level
2. Highlights the most critical warning signs
3. Explains what each signal means for investors
4. Provides actionable recommendations
5. Uses clear, non-technical language

Keep it concise but comprehensive (max 500 words)."""

        response = await self.chat_completion(
            messages=[
                {
                    "role": "system",
                    "content": "You are a financial analyst writing risk assessment reports for retail investors. Be clear, honest, and actionable.",
                },
                {"role": "user", "content": prompt},
            ],
        )

        return response.get("choices", [{}])[0].get("message", {}).get("content", "")

    async def predict_outcome(
        self,
        symbol: str,
        historical_data: Dict[str, Any],
        current_signals: List[Dict[str, Any]],
    ) -> Dict[str, Any]:
        """
        Predict likely outcome using OnDemand LLM with historical context

        Args:
            symbol: Stock symbol
            historical_data: Historical price and signal data
            current_signals: Current agent signals

        Returns:
            Prediction with confidence and timeline
        """
        prompt = f"""Based on historical patterns and current signals, predict the likely outcome for {symbol}.

HISTORICAL DATA:
{json.dumps(historical_data, indent=2)}

CURRENT SIGNALS:
{json.dumps(current_signals, indent=2)}

Provide prediction in JSON format:
{{
    "predicted_outcome": "pump_and_dump" | "legitimate_growth" | "consolidation" | "decline",
    "confidence": 0.0-1.0,
    "timeline_days": estimated days until outcome,
    "key_indicators": list of indicators supporting prediction,
    "alternative_scenarios": list of alternative possibilities,
    "monitoring_points": what to watch for
}}

Return ONLY valid JSON."""

        response = await self.chat_completion(
            messages=[
                {
                    "role": "system",
                    "content": "You are a quantitative analyst with expertise in pattern recognition and market prediction. Base predictions on data and historical patterns. Always return valid JSON.",
                },
                {"role": "user", "content": prompt},
            ],
        )

        content = (
            response.get("choices", [{}])[0].get("message", {}).get("content", "{}")
        )

        try:
            import re

            json_match = re.search(r"\{.*\}", content, re.DOTALL)
            if json_match:
                return json.loads(json_match.group())
            else:
                return self._default_prediction_response()
        except:
            return self._default_prediction_response()

    def _default_prediction_response(self) -> Dict[str, Any]:
        """Default prediction when parsing fails"""
        return {
            "predicted_outcome": "unknown",
            "confidence": 0,
            "timeline_days": 0,
            "key_indicators": [],
            "alternative_scenarios": [],
            "monitoring_points": [],
        }


# Singleton instance
_ondemand_client: Optional[OnDemandClient] = None


def get_ondemand_client() -> OnDemandClient:
    """Get or create OnDemand client singleton"""
    global _ondemand_client

    if _ondemand_client is None:
        _ondemand_client = OnDemandClient()

    return _ondemand_client
