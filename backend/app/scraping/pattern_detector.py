"""
Pattern Detector Module
Detects manipulation patterns from market data
"""

import pandas as pd
import numpy as np


class PatternDetector:

    def __init__(self):
        self.detected_patterns = []

    def detect_volume_anomaly(self, ohlcv_data):
        """
        Detect: High volume but minimal price movement
        Red Flag: Operator accumulation/distribution
        """
        if ohlcv_data is None or len(ohlcv_data) < 20:
            return None

        latest = ohlcv_data.iloc[-1]

        # Check if volume is significantly above average
        if pd.notna(latest["Volume_Ratio"]) and latest["Volume_Ratio"] > 2.0:
            # Check if price change is minimal
            if abs(latest["Price_Change_Pct"]) < 1.5:
                severity = "HIGH" if latest["Volume_Ratio"] > 3 else "MEDIUM"
                return {
                    "pattern": "Volume Spike Without Price Confirmation",
                    "severity": severity,
                    "detail": f"Volume is {latest['Volume_Ratio']:.1f}x above 20-day average, but price moved only {latest['Price_Change_Pct']:.2f}%",
                    "score": min(10, latest["Volume_Ratio"] * 2),
                }

        return None

    def detect_wick_pattern(self, ohlcv_data):
        """
        Detect: Unusually long wicks (rejection/fake breakouts)
        Red Flag: Distribution or bull/bear traps
        """
        if ohlcv_data is None or len(ohlcv_data) < 5:
            return None

        # Check last 5 days
        recent = ohlcv_data.tail(5)

        # Count days with high wick-to-body ratio
        high_wick_days = (recent["Wick_Body_Ratio"] > 2.0).sum()

        if high_wick_days >= 3:
            latest = recent.iloc[-1]

            # Determine if upper or lower wick dominant
            if latest["Upper_Wick"] > latest["Lower_Wick"]:
                wick_type = "upper wicks (selling pressure at highs)"
            else:
                wick_type = "lower wicks (buying support at lows)"

            severity = "HIGH" if high_wick_days >= 4 else "MEDIUM"

            return {
                "pattern": "Repeated Wick Pattern",
                "severity": severity,
                "detail": f"{high_wick_days} out of last 5 days show long {wick_type} - possible rejection or trap",
                "score": high_wick_days * 2,
            }

        return None

    def detect_delivery_divergence(self, ohlcv_data, delivery_data):
        """
        Detect: Falling delivery % with rising/flat price (distribution)
               Rising delivery % with flat price (accumulation)
        """
        if delivery_data is None or len(delivery_data) < 10:
            return None

        recent_delivery = delivery_data.tail(10)

        # Calculate delivery trend
        delivery_trend = recent_delivery["Delivery_Pct"].diff().mean()

        # Get price trend from OHLCV
        if ohlcv_data is not None and len(ohlcv_data) >= 10:
            recent_price = ohlcv_data.tail(10)
            price_trend = recent_price["Close"].diff().mean()

            # Falling delivery with flat/rising price = Distribution
            if delivery_trend < -2 and price_trend >= -0.5:
                latest_delivery = recent_delivery.iloc[-1]["Delivery_Pct"]
                return {
                    "pattern": "Distribution Pattern (Delivery Divergence)",
                    "severity": "HIGH",
                    "detail": f"Delivery % declining (currently {latest_delivery:.1f}%) while price stays flat/rises - operators likely selling",
                    "score": 8,
                }

            # Rising delivery with flat price = Accumulation
            elif delivery_trend > 2 and abs(price_trend) < 1:
                latest_delivery = recent_delivery.iloc[-1]["Delivery_Pct"]
                return {
                    "pattern": "Accumulation Pattern (Rising Delivery)",
                    "severity": "MEDIUM",
                    "detail": f"Delivery % rising (currently {latest_delivery:.1f}%) with flat price - possible quiet accumulation before move",
                    "score": 6,
                }

        return None

    def detect_low_delivery_spike(self, delivery_data):
        """
        Detect: High volume but low delivery % (intraday manipulation)
        """
        if delivery_data is None or len(delivery_data) < 5:
            return None

        latest = delivery_data.iloc[-1]
        avg_delivery = delivery_data["Delivery_Pct"].tail(10).mean()

        # Check if current delivery is significantly below average
        if latest["Delivery_Pct"] < avg_delivery * 0.7 and latest["Delivery_Pct"] < 40:
            return {
                "pattern": "Low Delivery Despite High Volume",
                "severity": "MEDIUM",
                "detail": f"Delivery % at {latest['Delivery_Pct']:.1f}% (avg: {avg_delivery:.1f}%) - indicates heavy intraday trading/speculation",
                "score": 5,
            }

        return None

    def detect_bulk_block_signals(self, bulk_deals, block_deals):
        """
        Detect: Recent bulk/block deals (insider activity)
        """
        patterns = []

        if bulk_deals is not None and not bulk_deals.empty:
            for _, deal in bulk_deals.iterrows():
                patterns.append(
                    {
                        "pattern": "Bulk Deal Detected",
                        "severity": "MEDIUM",
                        "detail": f"Bulk deal by {deal.get('CLIENT NAME', 'Unknown')} - {deal.get('BUY/SELL', 'N/A')} {deal.get('QUANTITY', 0):,} shares",
                        "score": 4,
                    }
                )

        if block_deals is not None and not block_deals.empty:
            for _, deal in block_deals.iterrows():
                patterns.append(
                    {
                        "pattern": "Block Deal Detected",
                        "severity": "MEDIUM",
                        "detail": f"Block deal by {deal.get('CLIENT NAME', 'Unknown')} - {deal.get('BUY/SELL', 'N/A')} {deal.get('QUANTITY', 0):,} shares",
                        "score": 4,
                    }
                )

        return patterns if patterns else None

    def detect_price_consolidation(self, ohlcv_data):
        """
        Detect: Tight price range with rising volume (coiling before breakout)
        """
        if ohlcv_data is None or len(ohlcv_data) < 10:
            return None

        recent = ohlcv_data.tail(10)

        # Calculate price range
        price_high = recent["High"].max()
        price_low = recent["Low"].min()
        price_range_pct = ((price_high - price_low) / price_low) * 100

        # Calculate volume trend
        volume_trend = recent["Volume"].diff().mean()

        # Tight range + rising volume
        if price_range_pct < 5 and volume_trend > 0:
            return {
                "pattern": "Price Consolidation with Rising Volume",
                "severity": "MEDIUM",
                "detail": f"Price consolidating in {price_range_pct:.1f}% range with increasing volume - possible breakout setup",
                "score": 5,
            }

        return None

    def detect_all_patterns(self, data):
        """
        Run all pattern detection algorithms
        Returns: List of detected patterns
        """
        print(f"\n{'='*60}")
        print(f"🔍 ANALYZING PATTERNS...")
        print(f"{'='*60}\n")

        patterns = []

        # Run each detector
        detectors = [
            ("Volume Anomaly", lambda: self.detect_volume_anomaly(data["ohlcv"])),
            ("Wick Pattern", lambda: self.detect_wick_pattern(data["ohlcv"])),
            (
                "Delivery Divergence",
                lambda: self.detect_delivery_divergence(
                    data["ohlcv"], data["delivery"]
                ),
            ),
            (
                "Low Delivery Spike",
                lambda: self.detect_low_delivery_spike(data["delivery"]),
            ),
            (
                "Bulk/Block Deals",
                lambda: self.detect_bulk_block_signals(
                    data["bulk_deals"], data["block_deals"]
                ),
            ),
            (
                "Price Consolidation",
                lambda: self.detect_price_consolidation(data["ohlcv"]),
            ),
        ]

        for name, detector in detectors:
            try:
                print(f"   Checking {name}...", end=" ")
                result = detector()

                if result:
                    if isinstance(result, list):
                        patterns.extend(result)
                        print(f"✅ {len(result)} pattern(s) found")
                    else:
                        patterns.append(result)
                        print(f"✅ Pattern detected")
                else:
                    print("✓ Clean")

            except Exception as e:
                print(f"❌ Error: {str(e)}")

        print(f"\n{'='*60}")
        print(f"✅ PATTERN ANALYSIS COMPLETE")
        print(f"   Total patterns detected: {len(patterns)}")
        print(f"{'='*60}\n")

        return patterns
