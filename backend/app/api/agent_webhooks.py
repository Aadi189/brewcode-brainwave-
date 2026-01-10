from fastapi import APIRouter

router = APIRouter(
    prefix="/agent_webhooks",
    tags=["Agent Webhooks"]
)

@router.get("/latest")
def get_agent_webhooks():
    return {"message": "agent webhooks endpoint"}