from config import  OPENAI_API_KEY
import openai
import json
import traceback
import ast
from models import db, Course
from flask import session, Blueprint, jsonify


timetable_bp = Blueprint('timetable', __name__)

openai.api_key = OPENAI_API_KEY

@timetable_bp.route('/recommend', methods=['GET'])
def recommend_timetable():
	user_data = {
		"grade": [3],
		"preferences": ["math", "computer science"],
		"interests": ["artificial intelligence", "machine learning"],
		"requirements": ["morning classes", "no classes on Friday"],
		"schedule": ["월1", "수3"]
	}

	grade = user_data["grade"]
	schedule = user_data["schedule"]

	# course filtering
	filtered_courses = db.session.query(Course).filter(Course.target_grade.in_(grade)).all()

	# schedule filtering
	available_courses = []
	for course in filtered_courses:
		course_schedule = [course.schedule[i:i+2] for i in range(0, len(course.schedule), 2)]
		if not any(time in course_schedule for time in schedule):
			available_courses.append({
				"id": course.id,
				"name": course.name,
				"schedule": course.schedule,
				"target_grade": course.target_grade
			})

	for course in available_courses:
		print(course)

	# TODO : Exclude courses that users are taking from timetable data
	# TODO : Implementing a preprocessing process that leaves the minimum data needed only for timetable recommendations


	user_data_jsonl = json.dumps(user_data, ensure_ascii=False, separators=(",", ":"))
	timetable_data_jsonl = "".join(json.dumps(course, ensure_ascii=False, separators=(",", ":")) for course in available_courses)
	
	question = (
		f"Given the user data in JSONL format:\n{user_data_jsonl}\n"
		f"and the timetable data in JSONL format:\n{timetable_data_jsonl}\n"
    	"please recommend a suitable timetable for the user by providing a Python array of course IDs."
	)

	# gpt_response = openai.Completion.create(
	#     engine="text-davinci-003",
	#     prompt=question,
	#     max_tokens=150,
	#     n=1,
	#     stop=None,
	#     temperature=0.7,
	# )


	gpt_response = {
		"choices": [
			{
			"finish_reason": "stop",
			"index": 0,
			"text": "\n\nrecommended_timetable = [7, 9, 15, 20]"
			}
		],
		"created": 1686058213,
		"id": "cmpl-7OR3Fb6YqCTFDvsqv1PPA4BpX4DCb",
		"model": "text-davinci-003",
		"object": "text_completion",
		"usage": {
			"completion_tokens": 18,
			"prompt_tokens": 297,
			"total_tokens": 315
		}
	}


	# print("Question:", question)
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

