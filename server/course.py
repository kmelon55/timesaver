from flask import Blueprint, jsonify, request
from models import db, Course, User

course_bp = Blueprint('course', __name__)

@course_bp.route('/', methods=['GET'])
def get_all_courses():
    courses = Course.query.all()

    course_list = []
    for course in courses:
        user_ids = [user.id for user in course.users]
        course_data = {
            'id': course.id,
            'name': course.name,
            'location': course.location,
            'subject': course.subject,
            'target_grade': course.target_grade,
            'major_seats': course.major_seats,
            'other_seats': course.other_seats,
            'minor_seats': course.minor_seats,
            'professor': course.professor,
            'schedule': course.schedule,
            'user_ids': user_ids
        }
        course_list.append(course_data)

    return jsonify({'courses': course_list}), 200




@course_bp.route('/', methods=['POST'])
def create_course():
    data = request.get_json()
    name = data.get('name')
    location = data.get('location')
    subject = data.get('subject')
    subject_code = data.get('subject_code')
    target_grade = data.get('target_grade')
    major_seats = data.get('major_seats')
    other_seats = data.get('other_seats')
    minor_seats = data.get('minor_seats')
    professor = data.get('professor')
    schedule = data.get('schedule')
    user_ids = data.get('user_ids', [])

    if not name:
        return jsonify({'message': 'Name is required'}), 400

    course = Course(name=name, location=location, subject=subject, subject_code=subject_code,
                    target_grade=target_grade, major_seats=major_seats, other_seats=other_seats,
                    minor_seats=minor_seats, professor=professor, schedule=schedule)

    # Fetch users with the provided user_ids
    users = User.query.filter(User.id.in_(user_ids)).all()
    course.users = users

    db.session.add(course)
    db.session.commit()

    return jsonify({'message': 'Course created successfully'}), 201



@course_bp.route('/<int:course_id>', methods=['GET'])
def get_course(course_id):
    course = Course.query.get(course_id)

    if not course:
        return jsonify({'message': 'Course not found'}), 404

    user_ids = [user.id for user in course.users]

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
        'schedule': course.schedule,
        'user_ids': user_ids
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
    if 'location' in data:
        course.location = data['location']
    if 'subject' in data:
        course.subject = data['subject']
    if 'subject_code' in data:
        course.subject_code = data['subject_code']
    if 'target_grade' in data:
        course.target_grade = data['target_grade']
    if 'major_seats' in data:
        course.major_seats = data['major_seats']
    if 'other_seats' in data:
        course.other_seats = data['other_seats']
    if 'minor_seats' in data:
        course.minor_seats = data['minor_seats']
    if 'professor' in data:
        course.professor = data['professor']
    if 'schedule' in data:
        course.schedule = data['schedule']


    db.session.commit()

    return jsonify({'message': 'Course updated successfully'}), 200


@course_bp.route('/<int:course_id>', methods=['DELETE'])
def delete_course(course_id):
    course = Course.query.get(course_id)
    if not course:
        return jsonify({'message': 'Course not found'}), 404

    db.session.delete(course)
    db.session.commit()

    return jsonify({'message': 'Course deleted successfully'}), 200