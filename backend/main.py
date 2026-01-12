import os
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from app.api import profile

from app.middlewares.user import UserMiddleware

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_middleware(UserMiddleware)

app.include_router(profile.router)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/me")
async def read_user_me(request: Request):
    user = getattr(request.state, "user", None)
    return {"user_info": user}
