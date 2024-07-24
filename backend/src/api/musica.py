from api.utils import *
#from backend.src.api.utils import *

router = APIRouter()

# Musicoterapia
@router.get("/")
async def musica_get(playlistId: Union[str, None]=None,musicaId: Union[str, None]=None ):
    return {'uau': 'musica', 'playlist': playlistId, 'musica': musicaId}
