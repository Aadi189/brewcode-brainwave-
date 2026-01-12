from starlette.middleware.base import BaseHTTPMiddleware
from fastapi import Request, Response
import jwt
import os


class UserMiddleware(BaseHTTPMiddleware):
    def __init__(self, app):
        super().__init__(app)
        self.jwt_secret = os.getenv("SUPABASE_JWT_SECRET")

    async def dispatch(self, request: Request, call_next):
        if request.method == "OPTIONS":
            return await call_next(request)

        if request.url.path in ["/docs", "/openapi.json", "/redoc", "/"]:
            return await call_next(request)

        auth_header = request.headers.get("Authorization")
        if not auth_header or " " not in auth_header:
            return Response("Missing or malformed token", status_code=401)

        try:
            token = auth_header.split(" ")[1]

            payload = jwt.decode(
                token,
                self.jwt_secret,
                algorithms=["HS256"],
                audience="authenticated",
            )
            request.state.user = payload

        except jwt.ExpiredSignatureError:
            return Response("Token expired", status_code=401)
        except jwt.InvalidTokenError:
            return Response("Invalid token", status_code=401)
        except Exception:
            return Response("Unauthorized", status_code=401)

        return await call_next(request)
