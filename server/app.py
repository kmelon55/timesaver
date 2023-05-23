from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import DB_URL


def create_app(debug=True):
    app = Flask(__name__)
    app.debug = debug
    app.config['SQLALCHEMY_DATABASE_URI'] = DB_URL

    from user import user_bp
    from models import db

    db.init_app(app)
    
    with app.app_context():
        db.create_all()

        app.register_blueprint(user_bp, url_prefix='/user')

        @app.route("/test", methods=['GET'])
        def test():
            return {"test": ["1", "2"]}

    return app



if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)