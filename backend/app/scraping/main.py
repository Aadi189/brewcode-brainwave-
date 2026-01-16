#!/usr/bin/env python3
"""
Market Manipulation Detector
Terminal-based tool to detect manipulation patterns in Indian stocks
"""

import sys
from colorama import init, Fore, Style
from app.scraping.data_fetcher import MarketDataFetcher
from app.scraping.pattern_detector import PatternDetector
from app.scraping.risk_analyzer import RiskAnalyzer

# Initialize colorama for cross-platform colored output
init(autoreset=True)


def print_banner():
    """Print welcome banner"""
    banner = f"""
{Fore.CYAN}{'='*80}
{Fore.CYAN}██████╗ ███████╗████████╗ █████╗ ██╗██╗         
{Fore.CYAN}██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██║██║         
{Fore.CYAN}██████╔╝█████╗     ██║   ███████║██║██║         
{Fore.CYAN}██╔══██╗██╔══╝     ██║   ██╔══██║██║██║         
{Fore.CYAN}██║  ██║███████╗   ██║   ██║  ██║██║███████╗    
{Fore.CYAN}╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚══════╝    
                                                       
{Fore.YELLOW}████████╗██████╗  █████╗ ██████╗     ██████╗ ███████╗████████╗███████╗ ██████╗████████╗ ██████╗ ██████╗ 
{Fore.YELLOW}╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗    ██╔══██╗██╔════╝╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗
{Fore.YELLOW}   ██║   ██████╔╝███████║██████╔╝    ██║  ██║█████╗     ██║   █████╗  ██║        ██║   ██║   ██║██████╔╝
{Fore.YELLOW}   ██║   ██╔══██╗██╔══██║██╔═══╝     ██║  ██║██╔══╝     ██║   ██╔══╝  ██║        ██║   ██║   ██║██╔══██╗
{Fore.YELLOW}   ██║   ██║  ██║██║  ██║██║         ██████╔╝███████╗   ██║   ███████╗╚██████╗   ██║   ╚██████╔╝██║  ██║
{Fore.YELLOW}   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝         ╚═════╝ ╚══════╝   ╚═╝   ╚══════╝ ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝
{Fore.CYAN}{'='*80}
{Fore.WHITE}🔍 AI-Powered Market Manipulation Detection System
{Fore.WHITE}📊 Analyzes Volume, Delivery %, Bulk/Block Deals & Price Patterns
{Fore.CYAN}{'='*80}
"""
    print(banner)


def get_stock_symbol():
    """Get stock symbol from user"""
    print(f"\n{Fore.GREEN}Enter Stock Symbol (NSE):{Style.RESET_ALL} ", end="")
    symbol = input().strip().upper()

    if not symbol:
        print(f"{Fore.RED}❌ Invalid symbol{Style.RESET_ALL}")
        return None

    return symbol


def main():
    """Main application loop"""
    print_banner()

    # Initialize components
    fetcher = MarketDataFetcher()
    detector = PatternDetector()
    analyzer = RiskAnalyzer()

    while True:
        try:
            # Get stock symbol
            symbol = get_stock_symbol()

            if not symbol:
                continue

            # Fetch all data
            data = fetcher.fetch_all_data(symbol)

            # Check if we got any data
            if data["ohlcv"] is None:
                print(
                    f"\n{Fore.RED}❌ Could not fetch data for {symbol}. Please check the symbol and try again.{Style.RESET_ALL}"
                )
                print(
                    f"{Fore.YELLOW}💡 Tip: Use NSE symbols (e.g., RELIANCE, TCS, INFY){Style.RESET_ALL}\n"
                )
                continue

            # Detect patterns
            patterns = detector.detect_all_patterns(data)

            # Generate risk report
            report = analyzer.generate_report(symbol, data, patterns)

            # Print report
            analyzer.print_report(report)

            # Ask to continue
            print(f"{Fore.CYAN}{'─'*80}{Style.RESET_ALL}")
            print(
                f"\n{Fore.GREEN}Analyze another stock? (y/n):{Style.RESET_ALL} ", end=""
            )
            choice = input().strip().lower()

            if choice != "y":
                print(
                    f"\n{Fore.CYAN}👋 Thank you for using Retail Trap Detector!{Style.RESET_ALL}\n"
                )
                break

        except KeyboardInterrupt:
            print(f"\n\n{Fore.YELLOW}⚠️  Analysis interrupted by user{Style.RESET_ALL}")
            print(f"{Fore.CYAN}👋 Goodbye!{Style.RESET_ALL}\n")
            sys.exit(0)
        except Exception as e:
            print(f"\n{Fore.RED}❌ Error: {str(e)}{Style.RESET_ALL}\n")
            import traceback

            traceback.print_exc()
            continue


if __name__ == "__main__":
    main()
