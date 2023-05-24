from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    courses = db.relationship('Course', backref='user', lazy=True)

    def __init__(self, username, password):
        self.username = username
        self.password = password


class Course(db.Model):
    __tablename__ = 'courses'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    location = db.Column(db.String(100), nullable=False)  # 수업 장소
    subject = db.Column(db.String(50), nullable=False)  # 교과 구분
    subject_code = db.Column(db.String(20), nullable=False)  # 과목 코드
    target_grade = db.Column(db.String(10), nullable=False)  # 대상 학년
    major_seats = db.Column(db.Integer, nullable=False)  # 자과 여석 (previously known as science_seats)
    other_seats = db.Column(db.Integer, nullable=False)  # 타과 여석
    minor_seats = db.Column(db.Integer, nullable=False)  # 부전공 여석
    professor = db.Column(db.String(80), nullable=False)  # 담당 교수
    schedule = db.Column(db.String(100), nullable=False)  # 강의 시간
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    def __init__(self, name, location, subject, subject_code, target_grade, major_seats, other_seats, minor_seats, professor, schedule, user_id):
        self.name = name
        self.location = location
        self.subject = subject
        self.subject_code = subject_code
        self.target_grade = target_grade
        self.major_seats = major_seats
        self.other_seats = other_seats
        self.minor_seats = minor_seats
        self.professor = professor
        self.schedule = schedule
        self.user_id = user_id
