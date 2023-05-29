db = {
	'user' : 'root',
    'password' : 'test1234',
    'host' : 'localhost',
    'port' : 3306,
    'database' : 'timesaver'
}
DB_URL = f"mysql+mysqlconnector://{db['user']}:{db['password']}@{db['host']}:{db['port']}/{db['database']}?charset=utf8"


SECRET_KEY = "session_test_secret_key"


OPENAI_API_KEY = ""