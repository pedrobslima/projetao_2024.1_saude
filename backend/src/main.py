# fastapi dev backend/src/main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from db.server import server_
import uvicorn

import os
import sys

project_root = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, project_root)

from api.items import router as items_router
from api.musica import router as music_router
from api.exercicio import router as excercise_router

app = FastAPI()

origins = [
    'http://localhost:3000' # Permite comunicação frontxend por esse endereço (e port)
]

app.add_middleware(
    CORSMiddleware, # Middleware frontxback
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
    allow_origins=origins,
)

# Home
@app.get("/")
async def read_root():
    user_email = "dvd@cin.ufpe.br"
    user_info = server_.getUserInfo(user_email)
    return user_info

# [TESTES] 
app.include_router(items_router, prefix='/items', tags=['items'])
# Musicoterapia
app.include_router(music_router, prefix='/musica', tags=['musica'])
# Exercises
app.include_router(excercise_router, prefix='/exercicio', tags=['exercicio'])
