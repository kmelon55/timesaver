from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.mysql import JSON

db = SQLAlchemy()


course_user_association = db.Table('course_user_association',
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('course_id', db.Integer, db.ForeignKey('courses.id'), primary_key=True)
)


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer, unique=True, nullable=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    preferences = db.Column(JSON, nullable=True)
    interests = db.Column(JSON, nullable=True)
    requirements = db.Column(JSON, nullable=True)
    grade = db.Column(db.Integer, nullable=False)
    semester = db.Column(db.Integer, nullable=False)
    major = db.Column(db.String(80), nullable=False)
    courses = db.relationship('Course', secondary=course_user_association, backref='users', lazy=True)


    def __init__(self, student_id, username, password_hash, preferences, interests, requirements, grade, major, semester):
        self.student_id = student_id
        self.username = username
        self.password_hash = password_hash
        self.preferences = preferences
        self.interests = interests
        self.requirements = requirements
        self.grade = grade
        self.major = major
        self.semester = semester


class Course(db.Model):
    __tablename__ = 'courses'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    location = db.Column(db.String(100), nullable=False)  # 수업 장소
    subject = db.Column(db.String(50), nullable=True)  # 교과 구분
    subject_code = db.Column(db.String(20), nullable=False)  # 과목 코드
    target_grade = db.Column(db.String(10), nullable=False)  # 대상 학년
    major_seats = db.Column(db.Integer, nullable=False)  # 자과 여석
    other_seats = db.Column(db.Integer, nullable=False)  # 타과 여석
    minor_seats = db.Column(db.Integer, nullable=False)  # 부전공 여석
    professor = db.Column(db.String(80), nullable=False)  # 담당 교수
    schedule = db.Column(db.String(100), nullable=False)  # 강의 시간

    def __init__(self, name, location, subject, subject_code, target_grade, major_seats, other_seats, minor_seats, professor, schedule):
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
