import os
from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from app.api import profile
from app.middlewares.user import auth_middleware
from app.api.analysis_routes import router as analysis_router
from app.api.news_routes import router as news_router
from app.api.stock_routes import router as stock_router
from app.api.shareholding_routes import router as shareholding_router

# from app.api.telegram_routes import router as telegram_router  # Disabled
from app.api.market_routes import router as market_router
from app.api.pattern_routes import router as pattern_router
from app.api.risk_routes import router as risk_router
from app.api.multi_agent_analysis import router as multi_agent_router
from app.api.ai_enhanced_routes import router as ai_enhanced_router

load_dotenv()

app = FastAPI(
    title="BrewCode Brainwave - Stock Analysis API",
    version="2.0.0",
    description="Comprehensive stock market analysis API with manipulation detection",
)

# CORS middleware (outermost - runs first)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:3000",  # Vite dev server
        "http://localhost:3001",  # Vite dev server
        "http://127.0.0.1:5173",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:8000",
        "http://localhost:8000",
        "https://brewcode-brainwave-8g69.vercel.app/"
        "*",  # Allow all for hackathon demo
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Auth middleware (innermost - runs second, after CORS)
# app.middleware("http")(auth_middleware)

# Include routers with prefix for better organization
app.include_router(profile.router, prefix="/api", tags=["profile"])
app.include_router(analysis_router, prefix="/api/analysis", tags=["analysis"])
app.include_router(news_router, prefix="/api", tags=["news"])
app.include_router(stock_router, prefix="/api", tags=["stock"])
app.include_router(shareholding_router, prefix="/api", tags=["shareholding"])
# app.include_router(telegram_router, prefix="/api", tags=["telegram"])  # Disabled
app.include_router(market_router, prefix="/api", tags=["market"])
app.include_router(pattern_router, prefix="/api", tags=["patterns"])
app.include_router(risk_router, prefix="/api", tags=["risk"])
app.include_router(multi_agent_router, tags=["multi-agent"])
app.include_router(ai_enhanced_router, tags=["ai-enhanced"])


@app.get("/")
def read_root():
    return {"message": "API is running", "status": "ok"}


@app.get("/me")
async def read_user_me(request: Request):
    """Get current authenticated user info"""
    user = getattr(request.state, "user", None)

    if user is None:
        raise HTTPException(status_code=401, detail="Not authenticated")

    return {"user_info": user}


@app.get("/health")
def health_check():
    """Health check endpoint"""
    return {"status": "healthy"}
