"""
Market Data Fetcher
Fetches OHLCV, Delivery %, and Bulk/Block Deals from NSE & Yahoo Finance
"""

import yfinance as yf
import pandas as pd
import requests
from datetime import datetime, timedelta
import time
import io


class MarketDataFetcher:

    def __init__(self):
        self.session = requests.Session()
        self.nse_headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Accept": "*/*",
            "Accept-Language": "en-US,en;q=0.9",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
        }
        # Initialize NSE session
        self._init_nse_session()

    def _init_nse_session(self):
        """Initialize NSE session with cookies"""
        try:
            self.session.get(
                "https://www.nseindia.com", headers=self.nse_headers, timeout=10
            )
            time.sleep(1)
        except:
            pass

    def get_ohlcv_data(self, symbol, period="3mo"):
        """
        Fetch OHLCV data from Yahoo Finance
        Returns: DataFrame with OHLC, Volume
        """
        print(f"📊 Fetching OHLCV data for {symbol}...")
        try:
            ticker = yf.Ticker(f"{symbol}.NS")
            data = ticker.history(period=period)

            if data.empty:
                # Try BSE if NSE fails
                ticker = yf.Ticker(f"{symbol}.BO")
                data = ticker.history(period=period)

            if not data.empty:
                # Calculate additional metrics
                data["Price_Change_Pct"] = data["Close"].pct_change() * 100
                data["Volume_MA_20"] = data["Volume"].rolling(window=20).mean()
                data["Volume_Ratio"] = data["Volume"] / data["Volume_MA_20"]

                # Candle metrics
                data["Body"] = abs(data["Close"] - data["Open"])
                data["Upper_Wick"] = data["High"] - data[["Open", "Close"]].max(axis=1)
                data["Lower_Wick"] = data[["Open", "Close"]].min(axis=1) - data["Low"]
                data["Wick_Body_Ratio"] = (data["Upper_Wick"] + data["Lower_Wick"]) / (
                    data["Body"] + 0.01
                )

                print(f"✅ Fetched {len(data)} days of OHLCV data")
                return data
            else:
                print(f"❌ No data found for {symbol}")
                return None

        except Exception as e:
            print(f"❌ Error fetching OHLCV: {str(e)}")
            return None

    def get_delivery_data(self, symbol, days=30):
        """
        Fetch delivery percentage data from NSE Bhavcopy
        Returns: DataFrame with delivery data
        """
        print(f"📦 Fetching delivery data for {symbol}...")
        delivery_records = []

        end_date = datetime.now()
        start_date = end_date - timedelta(days=days)

        current_date = end_date
        attempts = 0
        max_attempts = days + 10  # Try a few extra days to account for holidays

        while current_date >= start_date and attempts < max_attempts:
            attempts += 1

            # Skip weekends
            if current_date.weekday() >= 5:
                current_date -= timedelta(days=1)
                continue

            date_str = current_date.strftime("%d%m%Y")

            try:
                # NSE Bhavcopy URL
                url = f"https://archives.nseindia.com/products/content/sec_bhavdata_full_{date_str}.csv"

                response = self.session.get(url, headers=self.nse_headers, timeout=10)

                if response.status_code == 200:
                    df = pd.read_csv(io.StringIO(response.text))

                    # Filter for the symbol
                    stock_data = df[df["SYMBOL"].str.strip() == symbol.strip()]

                    if not stock_data.empty:
                        record = stock_data.iloc[0]
                        delivery_records.append(
                            {
                                "Date": current_date,
                                "Close": record.get("CLOSE", 0),
                                "Volume": record.get("TOTTRDQTY", 0),
                                "Delivery_Qty": record.get("DELIV_QTY", 0),
                                "Delivery_Pct": record.get("DELIV_PER", 0),
                            }
                        )

                time.sleep(0.5)  # Rate limiting

            except Exception as e:
                # Silently skip errors (holidays, etc.)
                pass

            current_date -= timedelta(days=1)

        if delivery_records:
            df_delivery = pd.DataFrame(delivery_records)
            df_delivery = df_delivery.sort_values("Date").reset_index(drop=True)
            print(f"✅ Fetched {len(df_delivery)} days of delivery data")
            return df_delivery
        else:
            print(
                f"⚠️  Could not fetch delivery data (might be recent listing or data unavailable)"
            )
            return None

    def get_bulk_deals(self, symbol, days=30):
        """
        Fetch bulk deals from NSE
        Returns: DataFrame with bulk deals
        """
        print(f"💼 Fetching bulk deals for {symbol}...")

        try:
            # NSE Bulk Deals URL (updates daily)
            url = "https://archives.nseindia.com/content/equities/bulk.csv"

            response = self.session.get(url, headers=self.nse_headers, timeout=10)

            if response.status_code == 200:
                df = pd.read_csv(io.StringIO(response.text))

                # Filter for symbol
                bulk = df[df["SYMBOL"].str.strip() == symbol.strip()]

                if not bulk.empty:
                    print(f"✅ Found {len(bulk)} bulk deal(s)")
                    return bulk
                else:
                    print(f"✅ No recent bulk deals found")
                    return None
            else:
                print(f"⚠️  Could not fetch bulk deals")
                return None

        except Exception as e:
            print(f"⚠️  Error fetching bulk deals: {str(e)}")
            return None

    def get_block_deals(self, symbol, days=30):
        """
        Fetch block deals from NSE
        Returns: DataFrame with block deals
        """
        print(f"🏢 Fetching block deals for {symbol}...")

        try:
            url = "https://archives.nseindia.com/content/equities/block.csv"

            response = self.session.get(url, headers=self.nse_headers, timeout=10)

            if response.status_code == 200:
                df = pd.read_csv(io.StringIO(response.text))

                # Filter for symbol
                block = df[df["SYMBOL"].str.strip() == symbol.strip()]

                if not block.empty:
                    print(f"✅ Found {len(block)} block deal(s)")
                    return block
                else:
                    print(f"✅ No recent block deals found")
                    return None
            else:
                print(f"⚠️  Could not fetch block deals")
                return None

        except Exception as e:
            print(f"⚠️  Error fetching block deals: {str(e)}")
            return None

    def fetch_all_data(self, symbol):
        """
        Fetch all data sources for a symbol
        Returns: dict with all data
        """
        print(f"\n{'='*60}")
        print(f"🔍 FETCHING DATA FOR: {symbol}")
        print(f"{'='*60}\n")

        data = {
            "ohlcv": self.get_ohlcv_data(symbol),
            "delivery": self.get_delivery_data(symbol),
            "bulk_deals": self.get_bulk_deals(symbol),
            "block_deals": self.get_block_deals(symbol),
        }

        print(f"\n{'='*60}")
        print(f"✅ DATA FETCHING COMPLETE")
        print(f"{'='*60}\n")

        return data
