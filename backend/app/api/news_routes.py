from fastapi import APIRouter

router = APIRouter(
    prefix="/news",
    tags=["News"]
)

@router.get("/latest")
def get_latest_news():
    return {"message": "Latest news endpoint"}