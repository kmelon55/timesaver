from config import  OPENAI_API_KEY
import openai
import json

openai.api_key = OPENAI_API_KEY

user_data = {
    "preferences": ["math", "computer science"],
    "interests": ["artificial intelligence", "machine learning"],
    "requirements": ["morning classes", "no classes on Friday"],
}

timetable_data = [
    {
        "id": 1,
        "course_name": "Introduction to AI",
        "time": "Monday 9AM",
        "category": "computer science",
    },
    {
        "id": 2,
        "course_name": "Linear Algebra",
        "time": "Tuesday 10AM",
        "category": "math",
    },
]

# TODO : Exclude lectures that users are taking from timetable data
# TODO : Implementing a preprocessing process that leaves the minimum data needed only for timetable recommendations


user_data_jsonl = json.dumps(user_data, ensure_ascii=False, separators=(",", ":"))
timetable_data_jsonl = "".join(json.dumps(course, ensure_ascii=False, separators=(",", ":")) for course in timetable_data)


question = (
    f"Given the user data in JSONL format:\n{user_data_jsonl}\n"
    f"and the timetable data in JSONL format:\n{timetable_data_jsonl}\n"
    "please recommend a suitable timetable for the user in a JSON format."
)
"""

# GPT-3 API를 호출합니다.
response = openai.Completion.create(
    engine="text-davinci-003",
    prompt=question,
    max_tokens=150,
    n=1,
    stop=None,
    temperature=0.7,
)

# API 응답에서 가장 적합한 답변을 추출합니다.

print("Question:", question)
print("Answer:", response)
"""


gpt_response = {
  "choices": [
    {
      "finish_reason": "stop",
      "index": 0,
      "logprobs": None,
      "text": "\n\n{\n  \"Recommendation\": [\n    {\n      \"id\": 1,\n      \"course_name\": \"Introduction to AI\",\n      \"time\": \"Monday 9AM\",\n      \"category\": \"computer science\"\n    },\n    {\n      \"id\": 2,\n      \"course_name\": \"Linear Algebra\",\n      \"time\": \"Tuesday 10AM\",\n      \"category\": \"math\"\n    }\n  ]\n}"
    }
  ],
  "created": 1685344792,
  "id": "cmpl-7LRSSLMmLyaOHTLjqNts2l1ll6z9V",
  "model": "text-davinci-003",
  "object": "text_completion",
  "usage": {
    "completion_tokens": 103,
    "prompt_tokens": 115,
    "total_tokens": 218
  }
}

recommended_timetable_text = gpt_response["choices"][0]["text"].strip()

recommended_timetable_json = json.loads(recommended_timetable_text)

print("Recommended Timetable (JSON):", recommended_timetable_json)

# TODO : Implement response validation and data postprocessing