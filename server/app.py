from flask import Flask, session
from flask_sqlalchemy import SQLAlchemy
from config import DB_URL, SECRET_KEY
from flask_migrate import Migrate
from flask_cors import CORS


def create_app(debug=True):
    app = Flask(__name__)
    CORS(app)

    app.config['SQLALCHEMY_DATABASE_URI'] = DB_URL
    app.secret_key = SECRET_KEY

    from user import user_bp
    from course import course_bp
    from timesaver_gpt import timetable_bp

    from models import db

    db.init_app(app)
    
    with app.app_context():
        migrate = Migrate(app, db)

        app.register_blueprint(user_bp, url_prefix='/user')
        app.register_blueprint(course_bp, url_prefix='/course')
        app.register_blueprint(timetable_bp, url_prefix='/timetable')

        @app.route("/test", methods=['GET'])
        def test():
            return {"test": ["1", "2"]}

    return app



if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)