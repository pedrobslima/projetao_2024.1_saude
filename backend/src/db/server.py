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
    def _search(self, drc:str, item_id:str) -> dict|None:
        if((drc in self.db.keys()) and (item_id in self.db[drc].keys())):
            return self.db[drc][item_id]
        return None
    
    def getUserInfo(self, email:str=default) -> dict|None:
        return self._search('users', email)
    
    def checkProgress(self, email:str=default) -> bool|None:
        userInfo = self.getUserInfo(email)
        
        if(userInfo is not None):
            userInfo = len(userInfo["meta_diaria"])==len(userInfo["progresso_diario"])

        return userInfo

    def getPlaylist(self, playId:str):
        data = self._search("playlists", playId)
        if(data is not None):
            return {'playlist': data}
            

    def getBestMusic(self, user:str=default):
        pass

    def getVideoExercise(self, user:str=default):
        pass

    def getLatestExerc(self, user:str=default) -> int|None:
        done = self.checkProgress(user)
        if(done is None):
            return None
        #elif(done == True):
        #    return 0
        user_info = self.getUserInfo(user)
        latest = len(user_info['progresso_diario'])
        return user_info['progresso_diario'][latest-1]

    def getVideoExerciseLOCAL(self, music_id:str, exercise_id:str) -> dict|None:
        music_info = self._search('musicas', music_id)
        exercise_info = self._search('exercicios', exercise_id)

        if((music_info is not None) and (exercise_info is not None)):
            with open(f"backend/src/db/musicas/{music_id}.mp3", 'rb') as f:
                music_content = f.read()
            with open(f"backend/src/db/videos/{exercise_info['video_id']}.mp4", 'rb') as f:
                exercise_content = f.read()
            return {'info': music_info, 'music': music_content, 'video': exercise_content}
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


    def exerciseDone(self, exercise_id:str, user:str=default) -> int|None:
        user_info = self.getUserInfo(user)
        if(user_info is not None):
            if(exercise_id not in user_info['progresso_diario']):
                self.db['users'][user]['progresso_diario'].append(exercise_id)
                self.__write()
                user_info = self.db['users'][user]
            progress = len(user_info['progresso_diario'])
            goal = user_info['meta_diaria']
            return (progress, goal)
        return None
    
    #def editMusicGenres(self, input_info:list, user:str=default) -> bool:
    #    if(self.getUserInfo(user) is not None):
            

    # POST:
    #def postX(self):
    #    pass

server_ = ServerClass()
#print(server_.getLatestExerc())