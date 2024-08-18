from fastapi import status
from fastapi.responses import RedirectResponse
from api.utils import *
#from backend.src.api.utils import *
from schemas import *
from services import *
from typing import List

# Definindo o esquema do corpo da requisição
class SelectedAreasRequest(BaseModel):
    selectedAreas: List[str]

router = APIRouter()

@router.post('/update-areas',
            response_model=HttpResponseModel,
            status_code=status.HTTP_200_OK,
            description="Update User Areas",
            tags = ['fetch_user_areas'],
            responses={
                status.HTTP_200_OK:{
                    "model": HttpResponseModel,
                    "description": "Update Success"
                },
                status.HTTP_500_INTERNAL_SERVER_ERROR:{
                    "model": HttpResponseModel,
                    "description": "Update Error"
                }
            })
async def updateUserAreas(request: SelectedAreasRequest, user: str = "dvd@cin.ufpe.br"):
    # Acessar os dados da requisição
    selectedAreas = request.selectedAreas
    response = FormService().updateAreas(selectedAreas, user)
    return response