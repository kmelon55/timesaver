import React, { useEffect, useState } from 'react';

function List(){
    const [courses, setCourses] = useState([]);

    useEffect(() => {
      getCourses();
    }, []);
  
    const getCourses = async() => {
      await fetch('/course')
        .then(response => response.json())
        .then(data => {
          const { courses } = data;
          setCourses(courses);
        })
        .catch(error => {
          console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
        });
    };
    console.log(courses);
  

  return (
    <div className='container'>
      {courses.map((course) => (
        <div key={course.id} className='allcourse'>
          <h3>{course.name}</h3>
          <button className='add'>+</button>
          <p>교수: {course.professor}</p>
          <p>장소: {course.location}</p>
          <p>시간: {course.schedule}</p>
          {/* 추가적인 데이터 표시 */}
        </div>
      ))}
    </div>
  );
};

export default List;