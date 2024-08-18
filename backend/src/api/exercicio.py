from fastapi import status
from fastapi.responses import RedirectResponse
from api.utils import *
from schemas import *
from services import *

router = APIRouter()

@router.get('/')
async def main(user:str="dvd@cin.ufpe.br"):
    response = ExerciseService().nextExercise(user)
    if(response.status_code == 404):
        return response
    # Redirect to /docs (relative URL) http://127.0.0.1:8000/exercicio/pes
    #return {'response': response.data}
    return response.data

@router.get("/{area}",
            response_model=HttpResponseModel,
            status_code=status.HTTP_200_OK,
            description="Get User Areas",
            tags = ['fetch_user_areas'],
            responses={
                status.HTTP_200_OK:{
                    "model": HttpResponseModel,
                    "description": "Fetch Success"
                },
                status.HTTP_404_NOT_FOUND:{
                    "model": HttpResponseModel,
                    "description": "Fetch Error"
                }
            })
async def area(area:str, user:str="dvd@cin.ufpe.br"):
    if(area == 'user-areas'): # gambiarra, mas não quero arrumar as rotas no frontend tbm
        response = ExerciseService().getUserAreas(user)
    else:
        response = ExerciseService().getAreaExerc(area)
    # Redirect to /docs (relative URL) http://127.0.0.1:8000/exercicio/pes
    return response
    #return RedirectResponse(url=f"/exercicio/{area}/{response.data}", status_code=status.HTTP_302_FOUND)

# ExerciseVideoPage
@router.get("/{area}/{exercise_id}")
async def exercise_get(area: str, exercise_id: str):
    response = ExerciseService().getExercise(exercise_id)
    return response.data['info'] # response

# ExerciseCompletePage /exercicio/:area/:id/completo
@router.post("/{area}/{exercise_id}/completo", 
            response_model=HttpResponseModel,
            status_code=status.HTTP_200_OK,
            description="Exercise done",
            tags = ['exercise done'],
            responses={
                status.HTTP_200_OK:{
                    "model": HttpResponseModel,
                    "description": "Successfully created a new post"
                },
                status.HTTP_500_INTERNAL_SERVER_ERROR:{
                    "model": HttpResponseModel,
                    "description": "Error in creating post"
                }
            })
async def exerciseDone(area: str, exercise_id: str)->HttpResponseModel:
    post_response = ExerciseService.postExercise(exercise_id, "dvd@cin.ufpe.br")
    return post_response
    #return {'uau': 'exercicio completo', 'area': area, 'progress': f'{progress}/{goal}'}
