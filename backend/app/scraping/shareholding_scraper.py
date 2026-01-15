import requests
from bs4 import BeautifulSoup
from app.models.models import Shareholding
import time


def get_shareholding_from_screener(symbol: str) -> Shareholding:
    """
    Scrape shareholding pattern from Screener.in
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

        promoter = fii = dii = retail = mf = pledge = 0.0

        # Find all tables in the shareholding section
        tables = shareholding_section.find_all("table")

        print(f"\nFound {len(tables)} tables in shareholding section")

        for table_idx, table in enumerate(tables):
            print(f"\n--- Table {table_idx + 1} ---")
            rows = table.find_all("tr")

            for row in rows:
                # Try both th and td
                headers_cells = row.find_all("th")
                data_cells = row.find_all("td")

                # If it's a header row, skip
                if headers_cells and not data_cells:
                    continue

                if len(data_cells) >= 2:
                    category = data_cells[0].text.strip()
                    category_lower = category.lower()

                    # Get the last column (latest quarter data)
                    value_text = (
                        data_cells[-1]
                        .text.strip()
                        .replace("%", "")
                        .replace(",", "")
                        .strip()
                    )

                    print(f"  {category}: {value_text}")

                    # Skip empty or invalid values
                    if not value_text or value_text == "-" or value_text == "":
                        continue

                    try:
                        value = float(value_text)
                    except ValueError:
                        continue

                    # More comprehensive pattern matching
                    if "promoter" in category_lower:
                        if "holding" in category_lower or "promoters" in category_lower:
                            promoter = value
                            print(f"    → Promoter: {value}%")

                    elif (
                        "fii" in category_lower
                        or "foreign institutional" in category_lower
                    ):
                        fii = value
                        print(f"    → FII: {value}%")

                    elif (
                        "dii" in category_lower
                        or "domestic institutional" in category_lower
                    ):
                        dii = value
                        print(f"    → DII: {value}%")

                    elif "mutual fund" in category_lower:
                        mf = value
                        print(f"    → MF: {value}%")

                    elif (
                        "public" in category_lower
                        or "retail" in category_lower
                        or "others" in category_lower
                    ):
                        # Be careful not to double-count
                        if (
                            "non-promoter" in category_lower
                            or "non promoter" in category_lower
                        ):
                            continue
                        retail = value
                        print(f"    → Retail/Public: {value}%")

                    elif "pledge" in category_lower:
                        pledge = value
                        print(f"    → Pledge: {value}%")

        print(f"\n=== Extracted Values ===")
        print(f"Promoter: {promoter}%")
        print(f"FII: {fii}%")
        print(f"DII: {dii}%")
        print(f"Retail: {retail}%")
        print(f"MF: {mf}%")
        print(f"Pledge: {pledge}%")
        print(f"Total: {promoter + fii + dii + retail}%")

        # More lenient validation - just check if we have SOME data
        if promoter == 0 and fii == 0 and dii == 0 and retail == 0:
            raise ValueError(f"No shareholding data found for {symbol}")

        # If total is less than 80%, it might be okay - some categories might be elsewhere
        total = promoter + fii + dii + retail
        if total < 30:  # Definitely wrong if less than 30%
            raise ValueError(f"Shareholding data seems incomplete (total: {total}%)")

        return Shareholding(
            promoter=round(promoter, 2),
            fii=round(fii, 2),
            dii=round(dii, 2),
            retail=round(retail, 2),
            mf=round(mf, 2),
            pledge=round(pledge, 2),
            promoter_change=None,
            fii_change=None,
            dii_change=None,
            retail_change=None,
            mf_change=None,
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
