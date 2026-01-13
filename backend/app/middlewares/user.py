from fastapi import Request
from fastapi.responses import JSONResponse
from app.services.supabase import supabase


async def auth_middleware(request: Request, call_next):
    """
    Middleware to verify JWT token from cookies or Authorization header.
    Sets request.state.user if token is valid.
    """

    public_paths = ["/", "/docs", "/openapi.json", "/redoc", "/health"]

    request.state.user = None

    if request.url.path in public_paths:
        response = await call_next(request)
        return response

    token = None

    token = request.cookies.get("access_token")

    if not token:
        auth_header = request.headers.get("authorization")
        print("checking localStorage")
        if auth_header and auth_header.startswith("Bearer "):
            token = auth_header.split("Bearer ")[1]
    if token:
        if token.startswith("Bearer "):
            token = token.split("Bearer ")[1]

        try:
            user_response = supabase.auth.get_user(token)

            if user_response and user_response.user:
                user = user_response.user
                request.state.user = {
                    "id": user.id,
                    "email": user.email,
                    "user": user,
                }
                print(f"✅ Token valid! User: {user.email}")
            else:
                print("❌ Invalid token: No user returned")
                request.state.auth_error = "Invalid token"

        except Exception as e:
            print(f"❌ Auth error: {e}")
            request.state.auth_error = f"Authentication error: {str(e)}"

    response = await call_next(request)
    return response
