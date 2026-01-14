import os
import praw
from datetime import datetime
from dotenv import load_dotenv
from app.models.models import RedditPost

load_dotenv()


def reddit_scraper(company: str) -> List[RedditPost]:
    reddit = praw.Reddit(
        client_id=os.getenv("REDDIT_CLIENT_ID"),
        client_secret=os.getenv("REDDIT_CLIENT_SECRET"),
        user_agent="scraper-agent",
    )
    subreddits = ["IndianStockMarket", "stocks", "wallstreetbets", "investing"]
    posts_output = []
    query = f"{company} stock"

    for sub in subreddits:
        subreddit = reddit.subreddit(sub)
        results = subreddit.search(query, limit=25)

        for post in results:
            posts_output.append(
                RedditPost(
                    title=post.title,
                    url=f"https://reddit.com{post.permalink}",
                    score=post.score,
                    comments=post.num_comments,
                    created_at=str(datetime.utcfromtimestamp(post.created)),
                    subreddit=sub,
                )
            )
    return posts_output
