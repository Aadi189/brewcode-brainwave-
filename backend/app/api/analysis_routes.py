from fastapi import APIRouter

router = APIRouter(
    prefix="/analysis",
    tags=["Analysis"]
)

@router.get("/latest")
def get_analysis():
    return {"message": "analysis endpoint"}