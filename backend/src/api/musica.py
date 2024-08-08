from api.utils import *
from fastapi import status
from fastapi.responses import RedirectResponse
from db.server import server_
from schemas import *
from services import *
#from backend.src.api.utils import *

router = APIRouter()

# Musicoterapia
@router.get("/{playlistId}")
async def playlist_get(playlistId: str):
    response = MusicService().getPlaylist(playlistId)
    return response


@router.get("/{playlistId}/{musicaId}")
async def musica_get(playlistId: str, musicaId: Union[str, None]=None):
    response = MusicService().getPlaylist(playlistId, musicaId)
    return response
