from schemas import HTTPResponses, HttpResponseModel#, UserCreate, User
from schemas import *
from db.server import server_ as db

class ExerciseService():
    @staticmethod
    def nextExercise(user:str='dvd@cin.ufpe.br') -> HttpResponseModel:
        """Get item by id and category method implementation"""
        exercise_id = db.getLatestExerc(user)
        if(exercise_id is None):
            return HttpResponseModel(
                message=HTTPResponses.ITEM_NOT_FOUND().message,
                status_code=HTTPResponses.ITEM_NOT_FOUND().status_code,
            )
        return HttpResponseModel(
                message=HTTPResponses.ITEM_FOUND().message,
                status_code=HTTPResponses.ITEM_FOUND().status_code,
                data=exercise_id,
            )

    @staticmethod
    def getExercise(exercise_id:str) -> HttpResponseModel:
        response = db.getVideoExerciseLOCAL('8000', exercise_id)
        if(response is None):
            return HttpResponseModel(
                message=HTTPResponses.ITEM_NOT_FOUND().message,
                status_code=HTTPResponses.ITEM_NOT_FOUND().status_code,
            )
        return HttpResponseModel(
                message=HTTPResponses.ITEM_FOUND().message,
                status_code=HTTPResponses.ITEM_FOUND().status_code,
                data=response
            ) 

    @staticmethod
    def postExercise(exercise_id:str, user:str="dvd@cin.ufpe.br") -> HttpResponseModel:
        """Post a new post method implementation"""
        post_response = db.exerciseDone(exercise_id, user)
        if post_response is None:
            return HttpResponseModel(
                message=HTTPResponses.SERVER_ERROR().message,
                status_code=HTTPResponses.SERVER_ERROR().status_code,
            )
        
        return HttpResponseModel(
                message=HTTPResponses.ITEM_EDITED().message,
                status_code=HTTPResponses.ITEM_EDITED().status_code,
                data=post_response
            )

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
    
#print(ExerciseService().nextExercise().data)