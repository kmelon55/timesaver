from flask import Blueprint, jsonify, request
from models import db, Course

course_bp = Blueprint('course', __name__)

@course_bp.route('/', methods=['GET'])
def get_all_courses():
    courses = Course.query.all()

    course_list = []
    for course in courses:
        course_data = {
            'id': course.id,
            'name': course.name,
            'user_id': course.user_id
            # Add more course attributes as needed
        }
        course_list.append(course_data)

    return jsonify({'courses': course_list}), 200


@course_bp.route('/', methods=['POST'])
def create_course():
    data = request.get_json()
    name = data.get('name')
    user_id = data.get('user_id')

    if not name or not user_id:
        return jsonify({'message': 'Name and user_id are required'}), 400

    course = Course(name=name, user_id=user_id)
    db.session.add(course)
    db.session.commit()

    return jsonify({'message': 'Course created successfully'}), 201


@course_bp.route('/<int:course_id>', methods=['GET'])
def get_course(course_id):
    course = Course.query.get(course_id)

    if not course:
        return jsonify({'message': 'Course not found'}), 404

    course_data = {
        'id': course.id,
        'name': course.name,
        # Add more course attributes as needed
    }

    return jsonify({'course': course_data}), 200

@course_bp.route('/<int:course_id>', methods=['PUT'])
def update_course(course_id):
    course = Course.query.get(course_id)

    if not course:
        return jsonify({'message': 'Course not found'}), 404

    data = request.get_json()

    # Update course data
    if 'name' in data:
        course.name = data['name']
    # Add more course attributes to update as needed

    db.session.commit()

    return jsonify({'message': 'Course updated successfully'}), 200
