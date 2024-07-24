#from schemas import HTTPResponses, HttpResponseModel, UserCreate, User
from schemas.http_response import *
from schemas.user import *
from database.database import server_ as db

class UserService():

    @staticmethod
    async def get_user_by_email(email: str):
        #return db.query(_models.User).filter(_models.User.email == email).first()
        user = db.getUserByEmail(email)
        if user is None:
            return HttpResponseModel(
                message=HTTPResponses.ITEM_NOT_FOUND().message,
                status_code=HTTPResponses.ITEM_NOT_FOUND().status_code,
            )
        return HttpResponseModel(
            message=HTTPResponses.ITEM_FOUND().message,
            status_code=HTTPResponses.ITEM_FOUND().status_code,
            data=user,
            )
    
    @staticmethod
    async def create_user(user: UserCreate):
        response = db.getUserByEmail(email=user.email)
        if response is not None:
            return HttpResponseModel(
                message=HTTPResponses.BAD_REQUEST().message+': Usuário já existe',
                status_code=HTTPResponses.BAD_REQUEST(),
                )
        
        user_obj = User(
            email=user.email, hashed_password=user.hashed_password
        )
        response = db.createUser(user_obj)
        if response is None:
            return HttpResponseModel(
                message=HTTPResponses.SERVER_ERROR().message,
                status_code=HTTPResponses.SERVER_ERROR().status_code,
                )
        return HttpResponseModel(
            message=HTTPResponses.ITEM_CREATED().message,
            status_code=HTTPResponses.ITEM_CREATED().status_code,
            data=response
            )
        
    
    @staticmethod
    async def authenticate_user(email: str, password: str):
        response = db.verify_password(email, password=password)
        
        if response is None:
            return HttpResponseModel(
                message=HTTPResponses.FORBIDDEN().message,
                status_code=HTTPResponses.FORBIDDEN(),
                )

        return HttpResponseModel(
                message=HTTPResponses.ITEM_FOUND().message,
                status_code=HTTPResponses.ITEM_FOUND(),
                data=response['id'],
                )