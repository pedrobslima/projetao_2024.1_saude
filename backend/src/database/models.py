class User():
    def __init__(self, cursor):
        cursor.execute('SELECT * FROM Post')
        self.count = len(cursor.fetchall())
        self.cursor = cursor
        #self.count = 0
    
    def verfify_password(self, password:str):
        return

    def criaPost(self, post):
        index = self.count
        self.count = self.count + 1

        self.cursor.execute('INSERT INTO Post (id, user, title, body) VALUES ({0}, "{1}", "{2}", "{3}")'.format(index, post['user'], post['title'], post['body']))
        for tag in post['tags']:
            self.cursor.execute('INSERT INTO Post_tag (post, tag) VALUES ({0}, "{1}")'.format(index, tag))
        