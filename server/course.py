from flask import Blueprint, jsonify, request
from models import db, Course, User, Review

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

    reviews = Review.query.filter_by(course_id=course_id).all()
    review_data = []
    for review in reviews:
        review_data.append({
            'id': review.id,
            'user_id': review.user_id,
            'rating': review.rating,
            'comment': review.comment
        })

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
        'user_ids': user_ids,
        'reviews': review_data

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


# Review API

@course_bp.route('/<int:course_id>/review', methods=['POST'])
def create_review(course_id):
    data = request.get_json()
    user_id = data.get('user_id')
    rating = data.get('rating')
    comment = data.get('comment')

    user = User.query.get(user_id)
    course = Course.query.get(course_id)

    if not user:
        return jsonify({'message': 'User not found'}), 404
    if not course:
        return jsonify({'message': 'Course not found'}), 404

    review = Review(user=user, course=course, rating=rating, comment=comment)
    db.session.add(review)
    db.session.commit()

    return jsonify({'message': 'Review created successfully'}), 201


@course_bp.route('/review/<int:review_id>', methods=['PUT'])
def update_review(review_id):
    data = request.get_json()
    rating = data.get('rating')
    comment = data.get('comment')

    review = Review.query.get(review_id)
    if not review:
        return jsonify({'message': 'Review not found'}), 404

    review.rating = rating
    review.comment = comment
    db.session.commit()

    return jsonify({'message': 'Review updated successfully'})


@course_bp.route('/review/<int:review_id>', methods=['DELETE'])
def delete_review(review_id):
    review = Review.query.get(review_id)
    if not review:
        return jsonify({'message': 'Review not found'}), 404

    db.session.delete(review)
    db.session.commit()

    return jsonify({'message': 'Review deleted successfully'})