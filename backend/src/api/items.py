from api.utils import *
#from backend.src.api.utils import *

router = APIRouter()

@router.get("/{item_id}")
async def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}