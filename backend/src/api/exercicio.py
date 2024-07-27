from api.utils import *
#from backend.src.api.utils import *
from db.server import server_

router = APIRouter()

# ExerciseVideoPage
@router.get("/{area}/{music_id}")
async def musica_get(area: str, music_id: str):
    info, mcontent, econtent = server_.getVideoExerciseLOCAL(music_id, '0')
    return {'uau': 'exercicio', 'area': area, 'info': info}#, 'musica': str(mcontent), 'exercicio': str(econtent)}

# ExerciseCompletePage /exercicio/:area/:id/completo
@router.get("/{area}/{id}/completo")
async def musica_get(area: str, id: str):
    return {'uau': 'exercicio completo', 'area': area, 'id': id}
