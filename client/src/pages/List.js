import React from 'react';
import BottomMenu from './BottomMenu';

function List(){
  const array = ['항목 1', '항목 2', '항목 3'];

  return (
    <div className='container'>
      <h2>강의 목록 조회</h2>
      <ul className='subjectul'>
        {array.map((item, index) => (
          <li key={index} className='subjectli'>{item}</li>
        ))}
      </ul>
      <BottomMenu />
    </div>
  );
};

export default List;