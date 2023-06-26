from config import  OPENAI_API_KEY
import openai
import json
import traceback
import ast
from models import db, Course, User
from flask import session, Blueprint, jsonify
import random


timetable_bp = Blueprint('timetable', __name__)

openai.api_key = OPENAI_API_KEY

@timetable_bp.route('/recommend', methods=['GET'])
def recommend_timetable():
	if 'userId' not in session:
		return jsonify({'message': 'Login is required'}), 401

	user_id = session['userId']
	user = db.session.query(User).get(user_id)

	if user:
		print(user.id)
		schedules = []
		for course in user.courses:
			course_schedule = [course.schedule[i:i+2] for i in range(0, len(course.schedule), 2)]
			course_schedules = [slot[:2] for slot in course_schedule if len(slot) >= 2]
			schedules.extend(course_schedules) 

		user_data = {
			"grade": [user.grade],
			"preferences": user.preferences,
			"interests": user.interests,
			"requirements": user.requirements,
			"schedule": schedules
		}


	# grade = user_data["grade"]
	# schedule = user_data["schedule"]

	# course filtering
	filtered_courses = db.session.query(Course).filter(
    (Course.target_grade == 'ALL') | Course.target_grade.in_(user_data["grade"])).all()

	# schedule filtering
	available_courses = []

	for course in filtered_courses:
		course_schedule = [course.schedule[i:i+2] for i in range(0, len(course.schedule), 2)]
		if not any(time in course_schedule for time in user_data["schedule"]):
			available_courses.append({
				"id": course.id,
				"name": course.name,
				"schedule": course.schedule,
				"target_grade": course.target_grade
			})

	if not available_courses:
		return jsonify({'message': 'No available courses'}), 401

	max_courses = 10  # 최대 요소 개수 설정

	if len(available_courses) > max_courses:
		available_courses = random.sample(available_courses, max_courses)

	print(available_courses)

	# TODO : Exclude courses that users are taking from timetable data
	# TODO : Implementing a preprocessing process that leaves the minimum data needed only for timetable recommendations


	user_data_jsonl = json.dumps(user_data, ensure_ascii=False, separators=(",", ":"))
	timetable_data_jsonl = "".join(json.dumps(course, ensure_ascii=False, separators=(",", ":")) for course in available_courses)
	
	question = (
		f"Given the user data in JSONL format:\n{user_data_jsonl}\n"
		f"and the timetable data in JSONL format:\n{timetable_data_jsonl}\n"
    	"please recommend a suitable timetable for the user by providing a Python array of course IDs."
	)


	gpt_response = openai.Completion.create(
	    engine="text-davinci-003",
	    prompt=question,
	    max_tokens=150,
	    n=1,
	    stop=None,
	    temperature=0.4,
	)


	# gpt_response = {
	# 	"choices": [
	# 		{
	# 		"finish_reason": "stop",
	# 		"index": 0,
	# 		"text": "\n\nrecommended_timetable = [7, 9, 15, 20]"
	# 		}
	# 	],
	# 	"created": 1686058213,
	# 	"id": "cmpl-7OR3Fb6YqCTFDvsqv1PPA4BpX4DCb",
	# 	"model": "gpt-3.5-turbo",
	# 	"object": "text_completion",
	# 	"usage": {
	# 		"completion_tokens": 18,
	# 		"prompt_tokens": 297,
	# 		"total_tokens": 315
	# 	}
	# }


	print("Question:", question)
	print("Answer:", gpt_response)




	# TODO : Implement response validation and data postprocessing


	try:
		response_text = gpt_response["choices"][0]["text"]
		array_start = response_text.find("[")
		array_end = response_text.find("]", array_start)
		array_str = response_text[array_start:array_end+1]
		recommended_ids = ast.literal_eval(array_str)
		
		if isinstance(recommended_ids, list):
			print(recommended_ids)
		else:
			raise ValueError("Response does not contain a valid array")


		recommended_courses = db.session.query(Course).filter(Course.id.in_(recommended_ids)).all()

		timetable_json = [
			{
				"id": course.id,
				"name": course.name,
				"schedule": course.schedule,
				"target_grade": course.target_grade
			}
			for course in recommended_courses
		]

		return jsonify(timetable_json), 200

	except (KeyError, IndexError, json.JSONDecodeError) as e:
		traceback.print_exc()
		return jsonify({"error": str(e)}), 500

