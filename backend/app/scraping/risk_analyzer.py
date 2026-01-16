"""
Risk Analyzer Module
Calculates unified risk score and generates reports
"""

import pandas as pd
from datetime import datetime


class RiskAnalyzer:

    def __init__(self):
        self.risk_thresholds = {
            "LOW": (0, 3),
            "MEDIUM": (3, 6),
            "HIGH": (6, 8),
            "CRITICAL": (8, 10),
        }

    def calculate_risk_score(self, patterns):
        """
        Calculate overall risk score from detected patterns
        Score range: 0-10
        """
        if not patterns:
            return 0

        total_score = sum(p["score"] for p in patterns)

        # Normalize to 0-10 scale
        # Weight high severity patterns more
        weighted_score = 0
        for p in patterns:
            if p["severity"] == "CRITICAL":
                weighted_score += p["score"] * 1.5
            elif p["severity"] == "HIGH":
                weighted_score += p["score"] * 1.2
            elif p["severity"] == "MEDIUM":
                weighted_score += p["score"] * 1.0
            else:
                weighted_score += p["score"] * 0.8

        # Normalize (assuming max realistic weighted score is ~50)
        normalized_score = min(10, (weighted_score / 5))

        return round(normalized_score, 1)

    def get_risk_level(self, score):
        """
        Convert numeric score to risk level
        """
        for level, (min_score, max_score) in self.risk_thresholds.items():
            if min_score <= score < max_score:
                return level
        return "CRITICAL"

    def generate_explanation(self, patterns, risk_level, score):
        """
        Generate AI-like explanation in simple English
        """
        if not patterns:
            return "No significant manipulation patterns detected. Stock appears to be trading normally."

        # Count severity types
        high_severity = sum(
            1 for p in patterns if p["severity"] in ["HIGH", "CRITICAL"]
        )
        medium_severity = sum(1 for p in patterns if p["severity"] == "MEDIUM")

        # Build explanation
        explanation = []

        if risk_level == "CRITICAL":
            explanation.append(
                "⚠️ CRITICAL RISK: Multiple strong manipulation signals detected."
            )
        elif risk_level == "HIGH":
            explanation.append(
                "🚨 HIGH RISK: Significant manipulation patterns identified."
            )
        elif risk_level == "MEDIUM":
            explanation.append("⚡ MEDIUM RISK: Some concerning patterns detected.")
        else:
            explanation.append(
                "ℹ️ LOW RISK: Minor patterns observed, likely normal market behavior."
            )

        # Summarize key findings
        if high_severity > 0:
            explanation.append(f"Found {high_severity} high-severity red flag(s).")

        # Add specific insights
        pattern_types = set(p["pattern"] for p in patterns)

        if "Volume Spike Without Price Confirmation" in pattern_types:
            explanation.append(
                "Unusual volume activity without proportional price movement detected - possible operator accumulation or distribution."
            )

        if "Distribution Pattern (Delivery Divergence)" in pattern_types:
            explanation.append(
                "Delivery percentage is falling while price remains stable - classic distribution pattern where operators sell to retail investors."
            )

        if "Accumulation Pattern (Rising Delivery)" in pattern_types:
            explanation.append(
                "Rising delivery percentage with stable prices suggests quiet accumulation - could precede a breakout or news event."
            )

        if any(
            "Bulk Deal" in p["pattern"] or "Block Deal" in p["pattern"]
            for p in patterns
        ):
            explanation.append(
                "Recent bulk/block deals detected - insider or institutional activity confirmed."
            )

        # Recommendation
        explanation.append("")
        if risk_level in ["HIGH", "CRITICAL"]:
            explanation.append(
                "⚠️ RECOMMENDATION: Exercise extreme caution. Consider waiting for clearer signals or avoiding this stock."
            )
        elif risk_level == "MEDIUM":
            explanation.append(
                "💡 RECOMMENDATION: Monitor closely before taking positions. Wait for confirmation."
            )
        else:
            explanation.append(
                "✓ RECOMMENDATION: Patterns detected are minor. Use standard risk management."
            )

        return " ".join(explanation)

    def generate_report(self, symbol, data, patterns):
        """
        Generate complete risk analysis report
        """
        score = self.calculate_risk_score(patterns)
        risk_level = self.get_risk_level(score)
        explanation = self.generate_explanation(patterns, risk_level, score)

        # Get latest price info
        latest_price = None
        price_change = None
        volume_info = None

        if data["ohlcv"] is not None and not data["ohlcv"].empty:
            latest = data["ohlcv"].iloc[-1]
            latest_price = latest["Close"]
            price_change = latest["Price_Change_Pct"]
            volume_info = (
                f"{latest['Volume']:,.0f} (Avg: {latest['Volume_MA_20']:,.0f})"
            )

        # Get latest delivery info
        delivery_info = None
        if data["delivery"] is not None and not data["delivery"].empty:
            latest_delivery = data["delivery"].iloc[-1]
            delivery_info = f"{latest_delivery['Delivery_Pct']:.1f}%"

        report = {
            "symbol": symbol,
            "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "risk_score": score,
            "risk_level": risk_level,
            "latest_price": latest_price,
            "price_change_pct": price_change,
            "volume": volume_info,
            "delivery_pct": delivery_info,
            "patterns_detected": len(patterns),
            "patterns": patterns,
            "explanation": explanation,
        }

        return report

    def print_report(self, report):
        """
        Print formatted report to terminal
        """
        print("\n" + "=" * 80)
        print(f"📊 MARKET MANIPULATION RISK ANALYSIS REPORT")
        print("=" * 80)
        print(f"\nStock Symbol: {report['symbol']}")
        print(f"Analysis Time: {report['timestamp']}")
        print(f"\n{'─'*80}")

        # Risk Score Section
        risk_colors = {
            "LOW": "\033[92m",  # Green
            "MEDIUM": "\033[93m",  # Yellow
            "HIGH": "\033[91m",  # Red
            "CRITICAL": "\033[95m",  # Magenta
        }
        reset_color = "\033[0m"

        color = risk_colors.get(report["risk_level"], "")
        print(f"\n🎯 OVERALL RISK ASSESSMENT:")
        print(f"   Risk Level: {color}{report['risk_level']}{reset_color}")
        print(f"   Risk Score: {color}{report['risk_score']}/10{reset_color}")

        # Price Info
        print(f"\n💰 CURRENT MARKET DATA:")
        if report["latest_price"]:
            change_symbol = (
                "📈"
                if report["price_change_pct"] > 0
                else "📉" if report["price_change_pct"] < 0 else "➡️"
            )
            print(
                f"   Price: ₹{report['latest_price']:.2f} {change_symbol} {report['price_change_pct']:+.2f}%"
            )
        if report["volume"]:
            print(f"   Volume: {report['volume']}")
        if report["delivery_pct"]:
            print(f"   Delivery %: {report['delivery_pct']}")

        # Detected Patterns
        print(f"\n🚩 MANIPULATION SIGNALS DETECTED: {report['patterns_detected']}")

        if report["patterns"]:
            print(f"\n{'─'*80}\n")
            for i, pattern in enumerate(report["patterns"], 1):
                severity_symbol = {
                    "CRITICAL": "🔴",
                    "HIGH": "🟠",
                    "MEDIUM": "🟡",
                    "LOW": "🟢",
                }.get(pattern["severity"], "⚪")

                print(
                    f"{i}. {severity_symbol} {pattern['pattern']} [{pattern['severity']}]"
                )
                print(f"   {pattern['detail']}")
                print()

        # AI Explanation
        print(f"{'─'*80}")
        print(f"\n🤖 AI ANALYSIS:\n")
        print(f"   {report['explanation']}")

        print(f"\n{'='*80}\n")

        return report
