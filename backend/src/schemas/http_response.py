from pydantic import BaseModel
from typing import Optional

class HttpResponseModel(BaseModel):
    message: str
    status_code: int
    data: Optional[dict] | Optional[list] = None

class HTTPResponses:
    """This class contains the basic HTTP responses for the API"""

    @staticmethod
    def ITEM_NOT_FOUND() -> HttpResponseModel:
        return HttpResponseModel(
            message="Item not found",
            status_code=404,
        )

    @staticmethod
    def ITEM_FOUND() -> HttpResponseModel:
        return HttpResponseModel(
            message="Item found",
            status_code=200,
        )

    @staticmethod
    def ITEM_CREATED() -> HttpResponseModel:
        return HttpResponseModel(
            message="Item created",
            status_code=201,
        )

    @staticmethod
    def SERVER_ERROR() -> HttpResponseModel:
        return HttpResponseModel(
            message="Server error",
            status_code=500,
        )

    @staticmethod
    def UNSUPPORTED_MEDIA_TYPE() -> HttpResponseModel:
        return HttpResponseModel(
            message="Unsupported Media Type",
            status_code=415,
        )
    
    @staticmethod
    def BAD_REQUEST() -> HttpResponseModel:
        return HttpResponseModel(
            message="Bad Request",
            status_code=400,
        )
    
    @staticmethod
    def UNAUTHORIZED() -> HttpResponseModel:
        return HttpResponseModel(
            message="Invalid Credentials",
            status_code=401,
        )
    
    @staticmethod
    def FORBIDDEN() -> HttpResponseModel:
        return HttpResponseModel(
            message="Email or Password incorrect",
            status_code=403,
        )
