from pydantic import BaseModel
from typing import Optional, List, Union

class UserBase(BaseModel):
    email: str

class UserCreate(UserBase):
    hashed_password: str # resolver criptografia disso dps

class User(UserBase):
    user_id: int
