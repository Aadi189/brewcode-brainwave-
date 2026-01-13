from fastapi import APIRouter, Request, HTTPException

router = APIRouter()


@router.get("/profile")
async def get_profile(request: Request):
    """
    Get the current user's profile.
    Requires authentication.
    """
    # Check if there was an auth error in middleware
    auth_error = getattr(request.state, "auth_error", None)
    if auth_error:
        raise HTTPException(status_code=401, detail=auth_error)

    user = getattr(request.state, "user", None)
    if user is None:
        raise HTTPException(status_code=401, detail="Unauthorized - Please login")

    return {"user_info": user}


@router.get("/profile/me")
async def get_current_user(request: Request):
    """
    Alternative endpoint to get current user info.
    """
    # Check if there was an auth error in middleware
    auth_error = getattr(request.state, "auth_error", None)
    if auth_error:
        raise HTTPException(status_code=401, detail=auth_error)

    user = getattr(request.state, "user", None)
    if user is None:
        raise HTTPException(status_code=401, detail="Not authenticated")

    return {"id": user.get("id"), "email": user.get("email")}
