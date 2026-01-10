from fastapi import APIRouter
from .markets_routes import router as market_router
from .news_routes import router as news_router
from .analysis_routes import router as analysis_router
from .agent_webhooks import router as agent_webhooks_router

api_router = APIRouter()
api_router.include_router(market_router)
api_router.include_router(news_router)
api_router.include_router(analysis_router)
api_router.include_router(agent_webhooks_router)