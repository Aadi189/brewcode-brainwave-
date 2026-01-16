import requests
from bs4 import BeautifulSoup
from app.models.models import Shareholding
import time
import lxml


def get_shareholding_from_screener(symbol: str) -> Shareholding:
    """
    Scrape shareholding pattern from Screener.in with multi-quarter tracking.

    This enhanced version captures the latest 2 quarters to detect:
    - FII/DII exit while retail enters (distribution/trap pattern)
    - Promoter stake changes
    - Institutional accumulation/distribution
    """
    url = f"https://www.screener.in/company/{symbol}/consolidated/"

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
    }

    try:
        response = requests.get(url, headers=headers, timeout=15)

        if response.status_code != 200:
            raise ValueError(
                f"Screener returned status {response.status_code} for {symbol}"
            )

        soup = BeautifulSoup(response.text, "lxml")

        # Find shareholding section
        shareholding_section = soup.find("section", {"id": "shareholding"})

        if not shareholding_section:
            raise ValueError(f"Shareholding section not found for {symbol}")

        # Find all tables in the shareholding section
        tables = shareholding_section.find_all("table")

        print(f"\n🔍 Parsing shareholding data for {symbol}...")
        print(f"Found {len(tables)} tables in shareholding section\n")

        # Dictionary to store data for each quarter
        # We'll extract last 4 columns (latest 4 quarters) to detect gradual trends
        quarters_data = []

        for table_idx, table in enumerate(tables):
            rows = table.find_all("tr")

            # Parse header to get quarter labels
            header_row = rows[0] if rows else None
            quarter_labels = []

            if header_row:
                header_cells = header_row.find_all("th")
                # Skip first column (category name), get quarter labels
                quarter_labels = [cell.text.strip() for cell in header_cells[1:]]

            # We want the last 4 quarters (latest, Q-1, Q-2, Q-3)
            num_quarters = len(quarter_labels)

            # Initialize data structures for latest 4 quarters
            if not quarters_data and num_quarters >= 2:
                quarters_data = [
                    {
                        "promoter": 0.0,
                        "fii": 0.0,
                        "dii": 0.0,
                        "retail": 0.0,
                        "mf": 0.0,
                        "pledge": 0.0,
                    }
                    for _ in range(min(4, num_quarters))  # Track up to 4 quarters
                ]

            for row in rows[1:]:  # Skip header row
                data_cells = row.find_all("td")

                if len(data_cells) < 2:
                    continue

                category = data_cells[0].text.strip()
                category_lower = category.lower()

                # Extract values for last 4 quarters
                # data_cells[1:] contains quarter values
                values = []
                for cell in data_cells[1:]:
                    value_text = (
                        cell.text.strip().replace("%", "").replace(",", "").strip()
                    )

                    if not value_text or value_text == "-" or value_text == "":
                        values.append(0.0)
                        continue

                    try:
                        values.append(float(value_text))
                    except ValueError:
                        values.append(0.0)

                # Get last 4 values (latest, Q-1, Q-2, Q-3)
                if len(values) >= 2:
                    # Extract up to 4 quarters
                    num_quarters_to_extract = min(4, len(values))
                    quarter_values = values[-num_quarters_to_extract:][
                        ::-1
                    ]  # Reverse to get [latest, Q-1, Q-2, Q-3]

                    # Categorize and store for each quarter
                    if "promoter" in category_lower and "holding" in category_lower:
                        for i, val in enumerate(quarter_values):
                            if i < len(quarters_data):
                                quarters_data[i]["promoter"] = val

                    elif (
                        "fii" in category_lower
                        or "foreign institutional" in category_lower
                    ):
                        for i, val in enumerate(quarter_values):
                            if i < len(quarters_data):
                                quarters_data[i]["fii"] = val

                    elif (
                        "dii" in category_lower
                        or "domestic institutional" in category_lower
                    ):
                        for i, val in enumerate(quarter_values):
                            if i < len(quarters_data):
                                quarters_data[i]["dii"] = val

                    elif "mutual fund" in category_lower:
                        for i, val in enumerate(quarter_values):
                            if i < len(quarters_data):
                                quarters_data[i]["mf"] = val

                    elif (
                        "public" in category_lower
                        or "retail" in category_lower
                        or "others" in category_lower
                    ):
                        if (
                            "non-promoter" in category_lower
                            or "non promoter" in category_lower
                        ):
                            continue
                        for i, val in enumerate(quarter_values):
                            if i < len(quarters_data):
                                quarters_data[i]["retail"] = val

                    elif "pledge" in category_lower:
                        for i, val in enumerate(quarter_values):
                            if i < len(quarters_data):
                                quarters_data[i]["pledge"] = val

        # Extract quarters data
        if not quarters_data:
            raise ValueError(f"No shareholding data could be parsed for {symbol}")

        latest = quarters_data[0]
        q1 = quarters_data[1] if len(quarters_data) > 1 else None  # Previous quarter
        q2 = quarters_data[2] if len(quarters_data) > 2 else None  # 2 quarters ago
        q3 = quarters_data[3] if len(quarters_data) > 3 else None  # 3 quarters ago

        # ============ QUARTER-OVER-QUARTER CHANGES (QoQ) ============
        promoter_change = None
        fii_change = None
        dii_change = None
        retail_change = None
        mf_change = None

        if q1:
            promoter_change = round(latest["promoter"] - q1["promoter"], 2)
            fii_change = round(latest["fii"] - q1["fii"], 2)
            dii_change = round(latest["dii"] - q1["dii"], 2)
            retail_change = round(latest["retail"] - q1["retail"], 2)
            mf_change = round(latest["mf"] - q1["mf"], 2)

        # ============ MULTI-QUARTER TRENDS (3-4 quarters) ============
        # This detects gradual institutional exits like Brightcom/Yes Bank
        fii_trend_3q = None
        dii_trend_3q = None
        retail_trend_3q = None
        promoter_trend_3q = None

        # Calculate 3-quarter trend if we have at least 3 quarters
        if q2:
            fii_trend_3q = round(latest["fii"] - q2["fii"], 2)
            dii_trend_3q = round(latest["dii"] - q2["dii"], 2)
            retail_trend_3q = round(latest["retail"] - q2["retail"], 2)
            promoter_trend_3q = round(latest["promoter"] - q2["promoter"], 2)

        # ============ PATTERN DETECTION FLAGS ============
        institutional_exit_pattern = False
        retail_trap_risk = False

        # Detect gradual institutional exit (over 3 quarters)
        if fii_trend_3q is not None and dii_trend_3q is not None:
            # Institutional exit: FII or DII declining by >2% over 3 quarters
            institutional_exit_pattern = fii_trend_3q < -2.0 or dii_trend_3q < -2.0

        # Detect retail trap: institutions exiting while retail accumulating
        if institutional_exit_pattern and retail_trend_3q is not None:
            retail_trap_risk = (
                retail_trend_3q > 2.0
            )  # Retail increasing by >2% over 3 quarters

        # Print summary
        print(f"📊 Latest Quarter (Q0):")
        print(f"   Promoter: {latest['promoter']:.2f}%")
        print(f"   FII: {latest['fii']:.2f}%")
        print(f"   DII: {latest['dii']:.2f}%")
        print(f"   Retail: {latest['retail']:.2f}%")
        print(f"   MF: {latest['mf']:.2f}%")
        print(f"   Pledge: {latest['pledge']:.2f}%")

        if q1:
            print(f"\n📈 Quarter-over-Quarter Changes (QoQ):")
            print(f"   Promoter: {promoter_change:+.2f}%")
            print(f"   FII: {fii_change:+.2f}%")
            print(f"   DII: {dii_change:+.2f}%")
            print(f"   Retail: {retail_change:+.2f}%")
            print(f"   MF: {mf_change:+.2f}%")

        if q2:
            print(f"\n📊 3-Quarter Trends (Q0 vs Q-2):")
            print(f"   Promoter: {promoter_trend_3q:+.2f}%")
            print(f"   FII: {fii_trend_3q:+.2f}%")
            print(f"   DII: {dii_trend_3q:+.2f}%")
            print(f"   Retail: {retail_trend_3q:+.2f}%")

        # ============ RETAIL TRAP DETECTION ============
        if retail_trap_risk:
            print(f"\n🚨 CRITICAL WARNING: RETAIL TRAP DETECTED!")
            print(f"   📉 Institutions exiting over 3 quarters")
            print(f"   📈 Retail accumulating (classic distribution pattern)")
            print(f"   ⚠️  Similar to Brightcom Group / Yes Bank pattern")
        elif institutional_exit_pattern:
            print(f"\n⚠️  WARNING: Institutional Exit Pattern Detected")
            print(f"   FII/DII reducing holdings over multiple quarters")
        elif q1 and fii_change and dii_change and retail_change:
            # Single quarter trap detection (legacy)
            institutional_exit = fii_change < -1.0 or dii_change < -1.0
            retail_entry = retail_change > 1.0

            if institutional_exit and retail_entry:
                print(f"\n⚠️  WARNING: POTENTIAL RETAIL TRAP (Single Quarter)")
                print(f"   Institutions exiting while retail entering - Watch closely")

        # Validation
        total = latest["promoter"] + latest["fii"] + latest["dii"] + latest["retail"]
        if total < 30:
            raise ValueError(f"Shareholding data seems incomplete (total: {total}%)")

        return Shareholding(
            promoter=round(latest["promoter"], 2),
            fii=round(latest["fii"], 2),
            dii=round(latest["dii"], 2),
            retail=round(latest["retail"], 2),
            mf=round(latest["mf"], 2),
            pledge=round(latest["pledge"], 2),
            promoter_change=promoter_change,
            fii_change=fii_change,
            dii_change=dii_change,
            retail_change=retail_change,
            mf_change=mf_change,
            fii_trend_3q=fii_trend_3q,
            dii_trend_3q=dii_trend_3q,
            retail_trend_3q=retail_trend_3q,
            promoter_trend_3q=promoter_trend_3q,
            institutional_exit_pattern=institutional_exit_pattern,
            retail_trap_risk=retail_trap_risk,
        )

    except requests.exceptions.RequestException as e:
        raise ValueError(f"Network error while fetching {symbol}: {e}")
    except Exception as e:
        raise ValueError(f"Error parsing shareholding data for {symbol}: {e}")


def shareholding_scraper(symbol: str) -> Shareholding:
    """
    Fetch shareholding pattern for an Indian stock.

    Args:
        symbol: NSE symbol (e.g., 'TATAPOWER', 'RELIANCE')

    Returns:
        Shareholding object with ownership percentages

    Raises:
        ValueError: If data cannot be fetched
    """
    symbol = symbol.upper().strip()

    try:
        return get_shareholding_from_screener(symbol)
    except Exception as e:
        raise ValueError(f"Failed to fetch shareholding data for {symbol}: {e}")


if __name__ == "__main__":
    # Test with multiple symbols
    test_symbols = ["TATAPOWER", "RELIANCE", "TCS", "INFY"]

    for symbol in test_symbols:
        try:
            print(f"\n{'='*60}")
            print(f"Testing: {symbol}")
            print("=" * 60)

            result = shareholding_scraper(symbol)

            print(f"\n✓ SUCCESS!")
            print(f"  Promoter: {result.promoter}%")
            print(f"  FII: {result.fii}%")
            print(f"  DII: {result.dii}%")
            print(f"  Retail: {result.retail}%")
            print(f"  MF: {result.mf}%")
            print(f"  Pledge: {result.pledge}%")
            print(
                f"  Total: {result.promoter + result.fii + result.dii + result.retail}%"
            )

            time.sleep(2)  # Be nice to the server

        except Exception as e:
            print(f"\n✗ FAILED: {e}")
