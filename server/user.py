from flask import Blueprint
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, User


user_bp = Blueprint('user', __name__)


@user_bp.route('/', methods=['GET'])
def get_all_users():
    users = User.query.all()

    user_list = []
    for user in users:
        user_data = {
            'id': user.id,
            'username': user.username,
            'courses': []
        }
        for course in user.courses:
            course_data = {
                'id': course.id,
                'name': course.name,
                'location': course.location,
                'subject': course.subject,
                'subject_code': course.subject_code,
                'target_grade': course.target_grade,
                'major_seats': course.major_seats,
                'other_seats': course.other_seats,
                'minor_seats': course.minor_seats,
                'professor': course.professor,
                'schedule': course.schedule
            }
            user_data['courses'].append(course_data)

        user_list.append(user_data)

    return jsonify({'users': user_list}), 200



@user_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'message': 'Username and password are required'}), 400

    user = User.query.filter_by(username=username).first()

    if user:
        return jsonify({'message': 'Username already exists'}), 409

    new_user = User(username=username, password=password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User created successfully'}), 201



@user_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'message': 'Username and password are required'}), 400

    user = User.query.filter_by(username=username).first()

    if not user or not user.check_password(password):
        return jsonify({'message': 'Invalid username or password'}), 401

    # 로그인 성공 시 로직을 추가하세요
    # 예를 들어, 세션 생성, JWT 토큰 발급 등

    return jsonify({'message': 'Login successful'}), 200



@user_bp.route('/<int:user_id>/courses', methods=['GET'])
def get_user_courses(user_id):
    user = User.query.get(user_id)

    if not user:
        return jsonify({'message': 'User not found'}), 404

    courses = user.courses

    course_list = []
    for course in courses:
        course_data = {
            'id': course.id,
            'name': course.name,
            'location': course.location,
            'subject': course.subject,
            'subject_code': course.subject_code,
            'target_grade': course.target_grade,
            'major_seats': course.major_seats,
            'other_seats': course.other_seats,
            'minor_seats': course.minor_seats,
            'professor': course.professor,
            'schedule': course.schedule
        }
        course_list.append(course_data)

    return jsonify({'courses': course_list}), 200

@user_bp.route('/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'message': 'User not found'}), 404

    db.session.delete(user)
    db.session.commit()

    return jsonify({'message': 'User deleted successfully'}), 200


# Create Flask blueprint for courses
course_bp = Blueprint('course_bp', __name__)


@user_bp.route('/<int:user_id>/profile', methods=['GET'])
def get_user_profile(user_id):
    user = User.query.get(user_id)

    if not user:
        return jsonify({'message': 'User not found'}), 404

    profile = {
        'username': user.username,
        # Add more profile data as needed
    }

    return jsonify({'profile': profile}), 200



@user_bp.route('/<int:user_id>/profile', methods=['PUT'])
def update_user_profile(user_id):
    user = User.query.get(user_id)

    if not user:
        return jsonify({'message': 'User not found'}), 404

    data = request.get_json()

    # Update profile data
    if 'username' in data:
        user.username = data['username']
    # Add more profile data to update as needed

    db.session.commit()

    return jsonify({'message': 'Profile updated successfully'}), 200
