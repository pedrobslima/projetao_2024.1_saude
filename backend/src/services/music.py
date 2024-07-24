#from schemas import HTTPResponses, HttpResponseModel, UserCreate, User
from schemas.http_response import *
from database.database import server_ as db

class MusicService():
    
    @staticmethod
    async def getPlaylist():
        # placeholder
        return HttpResponseModel(
                message=HTTPResponses.BAD_REQUEST().message,
                status_code=HTTPResponses.BAD_REQUEST(),
                )

    @staticmethod
    async def getMusic():
        # placeholder
        return HttpResponseModel(
                message=HTTPResponses.BAD_REQUEST().message,
                status_code=HTTPResponses.BAD_REQUEST(),
                )