from api.utils import *
#from backend.src.api.utils import *

router = APIRouter()

# ExerciseVideoPage
@router.get("/{area}/{id}")
async def musica_get(area: str, id: str):
    return {'uau': 'exercicio', 'area': area, 'id': id}

# ExerciseCompletePage /exercicio/:area/:id/completo
@router.get("/{area}/{id}/completo")
async def musica_get(area: str, id: str):
    return {'uau': 'exercicio completo', 'area': area, 'id': id}
