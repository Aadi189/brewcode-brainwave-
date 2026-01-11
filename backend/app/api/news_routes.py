from fastapi import FastAPI, APIRouter
from app.services.supabase import supabase

router = APIRouter()
router.get("/news")
def get_news():
    