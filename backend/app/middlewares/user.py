from fastapi import Request
from fastapi.responses import JSONResponse
from app.services.supabase import supabase


async def auth_middleware(request: Request, call_next):
    """
    Middleware to verify JWT token from cookies or Authorization header.
    Sets request.state.user if token is valid.
    """

    # List of public endpoints that don't require authentication
    public_paths = ["/", "/docs", "/openapi.json", "/redoc", "/health"]

    # Initialize user as None
    request.state.user = None

    # Skip authentication for public paths
    if request.url.path in public_paths:
        response = await call_next(request)
        return response

    token = None

    # Try to get token from cookies first
    token = request.cookies.get("access_token")

    # If not in cookies, try Authorization header
    if not token:
        auth_header = request.headers.get("authorization")
        if auth_header and auth_header.startswith("Bearer "):
            token = auth_header.split("Bearer ")[1]

    # If token exists, verify it
    if token:
        # Remove 'Bearer ' prefix if it exists in the token itself
        if token.startswith("Bearer "):
            token = token.split("Bearer ")[1]

        try:
            # Use Supabase to verify the token
            user_response = supabase.auth.get_user(token)

            if user_response and user_response.user:
                user = user_response.user
                # Set user info in request state
                request.state.user = {
                    "id": user.id,
                    "email": user.email,
                    "user": user,
                }
                print(f"✅ Token valid! User: {user.email}")  # DEBUG
            else:
                print("❌ Invalid token: No user returned")  # DEBUG
                request.state.auth_error = "Invalid token"

        except Exception as e:
            print(f"❌ Auth error: {e}")  # DEBUG
            request.state.auth_error = f"Authentication error: {str(e)}"

    # Always continue to the next middleware/endpoint
    response = await call_next(request)
    return response
