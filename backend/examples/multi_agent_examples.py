"""
Example Usage of Multi-Agent Risk Detection System
==================================================

This script demonstrates how to use the multi-agent system
both programmatically and via API calls.
"""

import requests
import json
from datetime import datetime

# API Base URL
BASE_URL = "http://localhost:8000"


def example_1_full_analysis():
    """Example 1: Full analysis with all agents"""

    print("=" * 70)
    print("EXAMPLE 1: Full Multi-Agent Analysis")
    print("=" * 70)

    symbol = "RELIANCE"

    response = requests.get(f"{BASE_URL}/api/multi-agent/analyze/{symbol}")

    if response.status_code == 200:
        data = response.json()

        print(f"\n📊 Analysis for {data['symbol']}")
        print(f"⏰ Timestamp: {data['timestamp']}")
        print(f"\n{'='*70}")
        print(f"🎯 OVERALL RISK SCORE: {data['overall_risk_score']}/100")
        print(f"⚠️  RISK LEVEL: {data['risk_level']}")
        print(f"{'='*70}")

        print(f"\n📋 Data Sources Used:")
        for source in data["data_sources_used"]:
            print(f"  ✓ {source}")

        print(f"\n🤖 Agent Signals:")
        for signal in data["agent_signals"]:
            print(f"\n  Agent: {signal['agent_type'].upper()}")
            print(f"  Risk Score: {signal['risk_score']}/100")
            print(f"  Confidence: {signal['confidence']:.2f}")
            print(f"  Signals Detected:")
            for sig in signal["signals"]:
                print(f"    • {sig}")

        print(f"\n💡 Agent Contributions:")
        for agent, contribution in data["agent_contributions"].items():
            print(f"  {agent}: {contribution:.2f} points")

        if data["co_occurrence_amplifications"]:
            print(f"\n🔥 Co-occurrence Amplifications:")
            for amp in data["co_occurrence_amplifications"]:
                print(
                    f"  {amp['agent1']} + {amp['agent2']}: +{amp['amplification_bonus']:.2f} points"
                )

        print(f"\n📝 Detailed Explanation:")
        print(data["explanation"])

    else:
        print(f"❌ Error: {response.status_code}")
        print(response.text)


def example_2_selective_agents():
    """Example 2: Analysis with selective agents"""

    print("\n\n" + "=" * 70)
    print("EXAMPLE 2: Selective Agent Analysis")
    print("=" * 70)

    symbol = "TCS"

    # Only run retail trap, delivery spike, and narrative risk agents
    params = {
        "include_shareholding": True,
        "include_delivery": True,
        "include_microstructure": False,
        "include_deals": False,
        "include_news": True,
    }

    response = requests.get(
        f"{BASE_URL}/api/multi-agent/analyze/{symbol}", params=params
    )

    if response.status_code == 200:
        data = response.json()

        print(f"\n📊 Selective Analysis for {data['symbol']}")
        print(f"🎯 Risk Score: {data['overall_risk_score']}/100")
        print(f"⚠️  Risk Level: {data['risk_level']}")

        print(f"\n🤖 Active Agents:")
        for signal in data["agent_signals"]:
            print(f"  • {signal['agent_type']}: {signal['risk_score']}/100")
    else:
        print(f"❌ Error: {response.status_code}")


def example_3_provide_feedback():
    """Example 3: Provide feedback to improve the system"""

    print("\n\n" + "=" * 70)
    print("EXAMPLE 3: Providing Feedback")
    print("=" * 70)

    # Scenario: We analyzed a stock and it turned out to be a pump-and-dump
    feedback_data = {
        "symbol": "RELIANCE",
        "actual_outcome": "pump_and_dump",
        "agent_feedback": {
            "retail_trap": 0.9,  # This agent performed well
            "delivery_spike": 0.7,  # Good performance
            "microstructure": 0.6,  # Moderate performance
            "bulk_block_deals": 0.8,  # Good performance
            "narrative_risk": 0.95,  # Excellent performance
            "misinformation": 0.85,  # Very good performance
        },
    }

    response = requests.post(f"{BASE_URL}/api/multi-agent/feedback", json=feedback_data)

    if response.status_code == 200:
        result = response.json()
        print(f"\n✅ {result['message']}")
        print(f"   Symbol: {result['symbol']}")
        print(f"   Outcome: {result['outcome']}")
    else:
        print(f"❌ Error: {response.status_code}")


def example_4_check_weights():
    """Example 4: Check current agent weights"""

    print("\n\n" + "=" * 70)
    print("EXAMPLE 4: Current Agent Weights")
    print("=" * 70)

    response = requests.get(f"{BASE_URL}/api/multi-agent/weights")

    if response.status_code == 200:
        data = response.json()

        print(f"\n📊 Current Agent Weights (Last Updated: {data['last_updated']})")
        print(f"   Total Feedback Records: {data['total_feedback_records']}")
        print(f"\n   Weights:")

        # Sort by weight
        sorted_weights = sorted(
            data["weights"].items(), key=lambda x: x[1], reverse=True
        )

        for agent, weight in sorted_weights:
            bar = "█" * int(weight * 100)
            print(f"   {agent:20s}: {weight:.3f} {bar}")
    else:
        print(f"❌ Error: {response.status_code}")


def example_5_agent_info():
    """Example 5: Get agent information"""

    print("\n\n" + "=" * 70)
    print("EXAMPLE 5: Agent Information")
    print("=" * 70)

    response = requests.get(f"{BASE_URL}/api/multi-agent/agent-info")

    if response.status_code == 200:
        data = response.json()

        print(f"\n🤖 Available Agents:")
        for agent in data["agents"]:
            print(f"\n  {agent['name']}")
            print(f"  Type: {agent['type']}")
            print(f"  Description: {agent['description']}")
            print(f"  Key Signals:")
            for signal in agent["signals"][:3]:  # Show first 3
                print(f"    • {signal}")

        print(f"\n\n🔥 Co-occurrence Amplifications:")
        for amp in data["co_occurrence_amplifications"]:
            print(f"\n  {amp['agents'][0]} + {amp['agents'][1]}")
            print(f"  Amplification: {amp['amplification']}x")
            print(f"  Reason: {amp['reason']}")
    else:
        print(f"❌ Error: {response.status_code}")


def example_6_programmatic_usage():
    """Example 6: Using the system programmatically (without API)"""

    print("\n\n" + "=" * 70)
    print("EXAMPLE 6: Programmatic Usage")
    print("=" * 70)

    from app.ai.multi_agent_risk_system import MultiAgentRiskSystem

    # Initialize the system
    system = MultiAgentRiskSystem()

    # Example data (in real usage, this would come from scrapers)
    shareholding_data = {
        "retail_change": 5.2,
        "fii_change": -3.5,
        "dii_change": -2.1,
        "retail_trend_3q": 8.5,
        "fii_trend_3q": -6.2,
        "dii_trend_3q": -4.8,
    }

    delivery_data = [
        {"date": "2026-01-10", "delivery_pct": 75.5},
        {"date": "2026-01-11", "delivery_pct": 78.2},
        {"date": "2026-01-12", "delivery_pct": 72.8},
        {"date": "2026-01-13", "delivery_pct": 76.5},
        {"date": "2026-01-14", "delivery_pct": 74.1},
    ]

    price_data = [
        {"date": "2026-01-10", "close": 100.0, "price_change_pct": 0.5},
        {"date": "2026-01-11", "close": 100.3, "price_change_pct": 0.3},
        {"date": "2026-01-12", "close": 100.1, "price_change_pct": -0.2},
        {"date": "2026-01-13", "close": 100.4, "price_change_pct": 0.3},
        {"date": "2026-01-14", "close": 100.6, "price_change_pct": 0.2},
    ]

    news_articles = [
        {
            "headline": "Stock to the moon! Massive gains expected!",
            "summary": "Analysts predict explosive growth...",
            "source": "Unknown Blog",
        },
        {
            "headline": "Next multibagger stock - Don't miss out!",
            "summary": "Limited time opportunity...",
            "source": "Anonymous",
        },
    ]

    # Run analysis
    assessment = system.analyze(
        symbol="EXAMPLE",
        shareholding_data=shareholding_data,
        delivery_data=delivery_data,
        price_data=price_data,
        news_articles=news_articles,
    )

    print(f"\n📊 Programmatic Analysis Result:")
    print(f"   Symbol: {assessment.symbol}")
    print(f"   Risk Score: {assessment.overall_risk_score}/100")
    print(f"   Risk Level: {assessment.risk_level.value}")
    print(f"\n   Active Agents: {len(assessment.agent_signals)}")

    for signal in assessment.agent_signals:
        print(f"\n   {signal.agent_type.value}:")
        print(f"     Score: {signal.risk_score}/100")
        print(f"     Confidence: {signal.confidence:.2f}")
        for sig in signal.signals[:2]:
            print(f"     • {sig}")


def main():
    """Run all examples"""

    print("\n" + "=" * 70)
    print("MULTI-AGENT RISK DETECTION SYSTEM - EXAMPLES")
    print("=" * 70)
    print("\nMake sure the FastAPI server is running on http://localhost:8000")
    print("Start it with: uvicorn main:app --reload")

    try:
        # Check if server is running
        response = requests.get(f"{BASE_URL}/health", timeout=2)
        if response.status_code != 200:
            print("\n❌ Server is not responding correctly")
            return
    except requests.exceptions.RequestException:
        print("\n❌ Cannot connect to server. Please start the FastAPI server first.")
        print("   Run: uvicorn main:app --reload")
        return

    print("\n✅ Server is running!\n")

    # Run examples
    try:
        example_1_full_analysis()
        example_2_selective_agents()
        example_3_provide_feedback()
        example_4_check_weights()
        example_5_agent_info()

        # Programmatic example (doesn't need server)
        print("\n\n" + "=" * 70)
        print("Running programmatic example (no API needed)...")
        print("=" * 70)
        example_6_programmatic_usage()

    except Exception as e:
        print(f"\n❌ Error running examples: {e}")
        import traceback

        traceback.print_exc()

    print("\n\n" + "=" * 70)
    print("Examples completed!")
    print("=" * 70)


if __name__ == "__main__":
    main()
