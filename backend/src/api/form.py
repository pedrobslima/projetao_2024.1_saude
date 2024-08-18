from fastapi import status
from fastapi.responses import RedirectResponse
from api.utils import *
#from backend.src.api.utils import *
from schemas import *
from services import *

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
async def updateUserAreas(selectedAreas, user:str="dvd@cin.ufpe.br"):
    response = FormService().updateAreas(selectedAreas, user)
    # Redirect to /docs (relative URL) http://127.0.0.1:8000/exercicio/pes
    #return {'response': response.data}
    return response