from api.utils import *
from fastapi import status
from fastapi.responses import RedirectResponse
from db.server import server_
from schemas import *
from services import *
#from backend.src.api.utils import *

router = APIRouter()

# Musicoterapia
@router.get("/")
async def playlist_get():
    response = MusicService().getMultPlays()
    return response

@router.get("/{playlistId}")
async def playlist_get(playlistId: str):
    response = MusicService().getPlaylist(playlistId)
    return response


@router.get("/{playlistId}/{musicaIndex}")
async def musica_get(playlistId: str, musicaIndex: Union[str, None]=None):
    response = MusicService().getPlaylist(playlistId, musicaIndex)
    return response
