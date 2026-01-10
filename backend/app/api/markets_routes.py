from fastapi import APIRouter

router = APIRouter(
    prefix="/market",
    tags=["Market"]
)

@router.get("/price")
def get_price():
    return {"message": "Market price endpoint"}