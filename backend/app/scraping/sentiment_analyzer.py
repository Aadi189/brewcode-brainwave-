"""
News Sentiment Analyzer
Analyzes sentiment of news articles using FinBERT or VADER
"""

from typing import List, Dict
from app.models.models import NewsArticle


class NewsSentimentAnalyzer:
    """Analyze sentiment of news articles"""

    def __init__(self, use_finbert: bool = False):
        """
        Initialize sentiment analyzer

        Args:
            use_finbert: If True, use FinBERT (requires transformers). If False, use VADER (lightweight)
        """
        self.use_finbert = use_finbert
        self.analyzer = None

        if use_finbert:
            try:
                from transformers import pipeline

                self.analyzer = pipeline("sentiment-analysis", model="ProsusAI/finbert")
                print("✓ FinBERT sentiment analyzer loaded")
            except ImportError:
                print("⚠️  transformers not installed, falling back to VADER")
                self.use_finbert = False

        if not self.use_finbert:
            try:
                from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

                self.analyzer = SentimentIntensityAnalyzer()
                print("✓ VADER sentiment analyzer loaded")
            except ImportError:
                print(
                    "⚠️  vaderSentiment not installed. Install with: pip install vaderSentiment"
                )
                self.analyzer = None

    def analyze_text(self, text: str) -> Dict[str, float]:
        """
        Analyze sentiment of a single text

        Returns:
            {
                'label': 'positive' | 'negative' | 'neutral',
                'score': float (-1 to +1, where -1 is very negative, +1 is very positive)
            }
        """
        if not self.analyzer:
            return {"label": "neutral", "score": 0.0}

        if self.use_finbert:
            # FinBERT analysis
            result = self.analyzer(text[:512])[0]  # FinBERT has 512 token limit
            label = result["label"].lower()
            confidence = result["score"]

            # Convert to -1 to +1 scale
            if label == "positive":
                score = confidence
            elif label == "negative":
                score = -confidence
            else:
                score = 0.0

            return {"label": label, "score": score}

        else:
            # VADER analysis
            scores = self.analyzer.polarity_scores(text)
            compound = scores["compound"]  # Already -1 to +1

            # Determine label
            if compound >= 0.05:
                label = "positive"
            elif compound <= -0.05:
                label = "negative"
            else:
                label = "neutral"

            return {"label": label, "score": compound}

    def analyze_news_articles(self, articles: List[NewsArticle]) -> Dict:
        """
        Analyze sentiment of multiple news articles

        Returns:
            {
                'overall_sentiment': 'positive' | 'negative' | 'neutral',
                'sentiment_score': float (-1 to +1),
                'positive_count': int,
                'negative_count': int,
                'neutral_count': int,
                'article_sentiments': List[Dict]
            }
        """
        if not articles:
            return {
                "overall_sentiment": "neutral",
                "sentiment_score": 0.0,
                "positive_count": 0,
                "negative_count": 0,
                "neutral_count": 0,
                "article_sentiments": [],
            }

        article_sentiments = []
        scores = []
        labels = []

        for article in articles:
            # Analyze headline (most important) and summary if available
            text = article.headline
            if article.summary:
                text += " " + article.summary

            sentiment = self.analyze_text(text)

            article_sentiments.append(
                {
                    "headline": article.headline,
                    "url": article.url,
                    "sentiment": sentiment["label"],
                    "score": sentiment["score"],
                }
            )

            scores.append(sentiment["score"])
            labels.append(sentiment["label"])

        # Calculate overall sentiment
        avg_score = sum(scores) / len(scores)
        positive_count = labels.count("positive")
        negative_count = labels.count("negative")
        neutral_count = labels.count("neutral")

        # Determine overall label
        if avg_score >= 0.05:
            overall_sentiment = "positive"
        elif avg_score <= -0.05:
            overall_sentiment = "negative"
        else:
            overall_sentiment = "neutral"

        return {
            "overall_sentiment": overall_sentiment,
            "sentiment_score": round(avg_score, 3),
            "positive_count": positive_count,
            "negative_count": negative_count,
            "neutral_count": neutral_count,
            "total_articles": len(articles),
            "article_sentiments": article_sentiments,
        }

    def get_sentiment_risk_contribution(self, sentiment_score: float) -> float:
        """
        Convert sentiment score to risk contribution (0-2 scale)

        Negative news = Higher risk
        Positive news = Lower risk

        Returns:
            Risk contribution (0-2):
            - Very negative news: +2.0 risk
            - Negative news: +1.0 risk
            - Neutral: +0.5 risk
            - Positive: +0.0 risk
        """
        if sentiment_score <= -0.5:
            return 2.0  # Very negative news
        elif sentiment_score <= -0.1:
            return 1.0  # Negative news
        elif sentiment_score <= 0.1:
            return 0.5  # Neutral news
        else:
            return 0.0  # Positive news


# Example usage
if __name__ == "__main__":
    # Test with sample news
    from app.models.models import NewsArticle

    sample_articles = [
        NewsArticle(
            headline="Company reports record profits, stock surges",
            url="http://example.com/1",
            source="Example News",
        ),
        NewsArticle(
            headline="Regulatory probe launched into company practices",
            url="http://example.com/2",
            source="Example News",
        ),
        NewsArticle(
            headline="Company announces new product launch",
            url="http://example.com/3",
            source="Example News",
        ),
    ]

    # Try VADER (lightweight, no ML dependencies)
    analyzer = NewsSentimentAnalyzer(use_finbert=False)
    results = analyzer.analyze_news_articles(sample_articles)

    print("\n📊 Sentiment Analysis Results:")
    print(f"Overall Sentiment: {results['overall_sentiment']}")
    print(f"Sentiment Score: {results['sentiment_score']}")
    print(
        f"Positive: {results['positive_count']}, Negative: {results['negative_count']}, Neutral: {results['neutral_count']}"
    )
    print(
        f"\nRisk Contribution: {analyzer.get_sentiment_risk_contribution(results['sentiment_score'])}"
    )

    print("\n📰 Individual Articles:")
    for article in results["article_sentiments"]:
        print(f"  {article['sentiment'].upper()}: {article['headline'][:60]}...")
