import React, { useEffect, useState } from 'react';
import BottomMenu from './BottomMenu';

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
  

  return (
    <div className='container'>
      <h2>강의 목록 조회</h2>
      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <p>교수: {course.professor}</p>
          <p>장소: {course.location}</p>
          {/* 추가적인 데이터 표시 */}
        </div>
      ))}
      <BottomMenu />
    </div>
  );
};

export default List;