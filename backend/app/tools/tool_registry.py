"""
Tool Registry
=============

Central registry for all custom-built tools in the system.

This demonstrates the "minimum 3 custom tools" requirement:
1. Sentiment Analyzer Tool (Chat API)
2. Chart Pattern Analyzer Tool (Media API)
3. Risk Prediction Engine Tool (Chat API)
"""

from typing import Dict, Any, List
from app.tools.sentiment_analyzer_tool import get_sentiment_analyzer_tool
from app.tools.chart_pattern_analyzer_tool import get_chart_pattern_analyzer_tool
from app.tools.risk_prediction_engine_tool import get_risk_prediction_engine_tool


class ToolRegistry:
    """Registry of all custom tools"""

    def __init__(self):
        # Initialize all custom tools
        self.tools = {
            "sentiment_analyzer": get_sentiment_analyzer_tool(),
            "chart_pattern_analyzer": get_chart_pattern_analyzer_tool(),
            "risk_prediction_engine": get_risk_prediction_engine_tool(),
        }

    def get_tool(self, tool_name: str):
        """Get a specific tool by name"""
        return self.tools.get(tool_name)

    def get_all_tools(self) -> Dict[str, Any]:
        """Get all registered tools"""
        return self.tools

    def list_tools(self) -> List[Dict[str, str]]:
        """List all tools with descriptions"""
        return [
            {"name": tool.name, "description": tool.description}
            for tool in self.tools.values()
        ]


# Singleton instance
_registry = None


def get_tool_registry() -> ToolRegistry:
    """Get tool registry instance"""
    global _registry
    if _registry is None:
        _registry = ToolRegistry()
    return _registry
