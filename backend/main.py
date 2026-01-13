import os
from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from app.api import profile
from app.middlewares.user import auth_middleware

load_dotenv()

app = FastAPI(title="Your API", version="1.0.0")

# CORS middleware (outermost - runs first)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:8000",
        "http://localhost:8000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Auth middleware (innermost - runs second, after CORS)
app.middleware("http")(auth_middleware)

# Include routers with prefix for better organization
app.include_router(profile.router, prefix="/api", tags=["profile"])


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
