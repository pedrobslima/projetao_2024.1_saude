import json

default= 'dvd@cin.ufpe.br'

class ServerClass():

    def __init__(self, path:str='backend/src/db/database.json'):
        self.path = path
        self.__load()
        
    def __load(self)->None:
        with open(self.path, 'r') as database:
            self.db = json.load(database)

    def __write(self)->None:
        with open(self.path, 'w') as database:
            json.dump(self.db, database, indent=4)

    # GET:
    def search(self, drc:str, item_id:str) -> dict|None:
        if((drc in self.db.keys()) and (item_id in self.db[drc].keys())):
            return self.db[drc][item_id]
        return None
    
    def getUserInfo(self, email:str=default) -> dict|None:
        return self.search('users', email)
    
    def checkProgress(self, email:str=default) -> bool|None:
        userInfo = self.getUserInfo(email)
        
        if(userInfo is not None):
            userInfo = userInfo["meta_diaria"]==len(userInfo["progresso_diario"])

        return userInfo

    def getBestMusic(self, user:str=default):
        pass

    def getVideoExercise(self, user:str=default):
        pass

    def getVideoExerciseLOCAL(self, music_id:str, exercise_id:str):
        music_info = self.search('musicas', music_id)
        exercise_info = self.search('exercicios', exercise_id)

        if((music_info is not None) and (exercise_info is not None)):
            with open(f"backend/src/db/musicas/{music_id}.mp3", 'rb') as f:
                music_content = f.read()
            with open(f"backend/src/db/videos/{exercise_info['video_id']}.mp4", 'rb') as f:
                exercise_content = f.read()
            return (music_info, music_content, exercise_content)
        return None

    # EDIT:
    def editUserInfo(self, input_info:dict, user:str=default) -> bool:
        if(self.getUserInfo(user) is not None):
            for stat, value in input_info.items():
                if(stat in self.db['users'][user]):
                    self.db['users'][user][stat] = value
            self.__write()
            return True
        return False


    def exerciseDone(self, exercise_id:str, user:str=default)->bool:
        if(self.getUserInfo(user) is not None):
            self.db['users'][user]['progresso_diario'].append(exercise_id)
            self.__write()
            return True
        return False
    
    #def editMusicGenres(self, input_info:list, user:str=default) -> bool:
    #    if(self.getUserInfo(user) is not None):
            

    # POST:
    #def postX(self):
    #    pass

server_ = ServerClass()