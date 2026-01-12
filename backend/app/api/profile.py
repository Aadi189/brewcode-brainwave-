from app.services.supabase import supabase
from fastapi import APIRouter, Request, Response

router = APIRouter()


@router.get("/profile")
def get_profile(request: Request):
    user = getattr(request.state, "user", None)
    if user is None:
        return Response("Unauthorized", status_code=401)
    return {"user_info": user}
