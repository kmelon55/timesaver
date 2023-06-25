import React, { useEffect, useState } from 'react';
import BottomMenu from './BottomMenu';
import List from './List';

function Table() {


    const [isClicked, setIsClicked] = useState(false);
    const [myTable, setMyTable] = useState(false);

    const [isVisible, setIsVisible] = useState([false, false, false, false, false, false, false, false, false, false]);

    const initialData = [
        ["", "월", "화", "수", "목", "금"],
        ["9", "", "", "", "", ""],
        ["10", "", "", "", "", ""],
        ["11", "", "", "", "", ""],
        ["12", "", "", "", "", ""],
        ["13", "", "", "", "", ""],
        ["14", "", "", "", "", ""],
        ["15", "", "", "", "", ""],
        ["16", "", "", "", "", ""],
        ["17", "", "", "", "", ""]
    ];

    const [tableData, setTableData] = useState(() => {
      const storedArray = sessionStorage.getItem('tableData');
      if (storedArray) {
        return JSON.parse(storedArray);
      } else {
        return initialData;
      }
    });

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

    // function generateListItems() {
    //     return profiles.map((profile, index) => (
    //       <button className='recoList' key={index} onClick={() => addButton(index)}>{profile.name+':'+profile.day+'('+profile.starttime+'~'+profile.endtime+')' }</button>
    //     ));
    // }

    function checkCourse(){
      if(myTable===false){
        setMyTable(true);
      }
      else{
        setMyTable(false);
      }
    }

    const generateRandomColor = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return randomColor;
    };

    console.log(courses);


    function addButton(key){
        const clickedIndex = parseInt(key-1, 10);
        const clickedItem = courses[clickedIndex];
        if (clickedItem.schedule === '월1수1') {

            if(isVisible[0]==false){
            const updatedItems = [...isVisible];
            updatedItems[0] = true;
            setIsVisible(updatedItems);
            }
            else{
            const updatedItems = [...isVisible];
            updatedItems[0] = false;
            setIsVisible(updatedItems);
            }

            const newTableData = [...tableData];
            newTableData[1][1] = <button className='monday'
            style={isVisible[0]?{display:'none'}:{ height: '100px', backgroundColor: generateRandomColor() , display:'block'}} disabled>
            {clickedItem.name}
            </button>
            
            newTableData[1][3] = <button className='monday'
            style={isVisible[0]?{display:'none'}:{ height: '100px', backgroundColor: generateRandomColor() , display:'block'}} disabled>
            {clickedItem.name}
            </button>;

          
            setTableData(newTableData);
    
        }
        if (clickedItem.schedule === '월3수3') {

            if(isVisible[1]==false){
            const updatedItems = [...isVisible];
            updatedItems[1] = true;
            setIsVisible(updatedItems);
            }
            else{
            const updatedItems = [...isVisible];
            updatedItems[1] = false;
            setIsVisible(updatedItems);
            }

            const newTableData = [...tableData];
            newTableData[3][1] = <button className='monday'
            style={isVisible[1]?{display:'none'}:{ height: '100px', backgroundColor: generateRandomColor() , display:'block'}} disabled>
            {clickedItem.name}
            </button>
            
            newTableData[3][3] = <button className='monday'
            style={isVisible[1]?{display:'none'}:{ height: '100px', backgroundColor: generateRandomColor() , display:'block'}} disabled>
            {clickedItem.name}
            </button>;

          
            setTableData(newTableData);
    
        }
        if (clickedItem.schedule === '월5수5') {

            if(isVisible[2]==false){
            const updatedItems = [...isVisible];
            updatedItems[2] = true;
            setIsVisible(updatedItems);
            }
            else{
            const updatedItems = [...isVisible];
            updatedItems[2] = false;
            setIsVisible(updatedItems);
            }

            const newTableData = [...tableData];
            newTableData[5][1] = <button className='monday'
            style={isVisible[2]?{display:'none'}:{ height: '100px', backgroundColor: generateRandomColor() , display:'block'}} disabled>
            {clickedItem.name}
            </button>
            
            newTableData[5][3] = <button className='monday'
            style={isVisible[2]?{display:'none'}:{ height: '100px', backgroundColor: generateRandomColor() , display:'block'}} disabled>
            {clickedItem.name}
            </button>;

          
            setTableData(newTableData);
    
        }
        if (clickedItem.schedule === '월7수7') {

            if(isVisible[3]==false){
            const updatedItems = [...isVisible];
            updatedItems[3] = true;
            setIsVisible(updatedItems);
            }
            else{
            const updatedItems = [...isVisible];
            updatedItems[3] = false;
            setIsVisible(updatedItems);
            }

            const newTableData = [...tableData];
            newTableData[7][1] = <button className='monday'
            style={isVisible[3]?{display:'none'}:{ height: '100px', backgroundColor: generateRandomColor() , display:'block'}} disabled>
            {clickedItem.name}
            </button>
            
            newTableData[7][3] = <button className='monday'
            style={isVisible[3]?{display:'none'}:{ height: '100px', backgroundColor: generateRandomColor() , display:'block'}} disabled>
            {clickedItem.name}
            </button>;

          
            setTableData(newTableData);
    
        }

        if (clickedItem.schedule === '화1목1') {

            if(isVisible[5]==false){
            const updatedItems = [...isVisible];
            updatedItems[5] = true;
            setIsVisible(updatedItems);
            }
            else{
            const updatedItems = [...isVisible];
            updatedItems[5] = false;
            setIsVisible(updatedItems);
            }

            const newTableData = [...tableData];
            newTableData[1][2] = <button className='monday'
            style={isVisible[5]?{display:'none'}:{ height: '75px', backgroundColor: generateRandomColor() , display:'block'}} disabled>
            {clickedItem.name}
            </button>
            
            newTableData[1][4] = <button className='monday'
            style={isVisible[5]?{display:'none'}:{ height: '75px', backgroundColor: generateRandomColor() , display:'block'}} disabled>
            {clickedItem.name}
            </button>;

          
            setTableData(newTableData);
    
        }

        if (clickedItem.schedule === '화2목2') {

            if(isVisible[4]==false){
            const updatedItems = [...isVisible];
            updatedItems[4] = true;
            setIsVisible(updatedItems);
            }
            else{
            const updatedItems = [...isVisible];
            updatedItems[4] = false;
            setIsVisible(updatedItems);
            }

            const newTableData = [...tableData];
            newTableData[2][2] = <button className='monday'
            style={isVisible[4]?{display:'none'}:{ height: '75px', backgroundColor: generateRandomColor() , display:'block'}} disabled>
            {clickedItem.name}
            </button>
            
            newTableData[2][4] = <button className='monday'
            style={isVisible[4]?{display:'none'}:{ height: '75px', backgroundColor: generateRandomColor() , display:'block'}} disabled>
            {clickedItem.name}
            </button>;

          
            setTableData(newTableData);
    
        }

        if (clickedItem.schedule === '화3목3') {

            if(isVisible[6]==false){
            const updatedItems = [...isVisible];
            updatedItems[6] = true;
            setIsVisible(updatedItems);
            }
            else{
            const updatedItems = [...isVisible];
            updatedItems[6] = false;
            setIsVisible(updatedItems);
            }

            const newTableData = [...tableData];
            newTableData[4][2] = <button className='monday'
            style={isVisible[6]?{display:'none'}:{ height: '75px', backgroundColor: generateRandomColor() , display:'block'}} disabled>
            {clickedItem.name}
            </button>
            
            newTableData[4][4] = <button className='monday'
            style={isVisible[6]?{display:'none'}:{ height: '75px', backgroundColor: generateRandomColor() , display:'block'}} disabled>
            {clickedItem.name}
            </button>;

          
            setTableData(newTableData);
    
        }

        if (clickedItem.schedule === '화4목4') {

            if(isVisible[7]==false){
            const updatedItems = [...isVisible];
            updatedItems[7] = true;
            setIsVisible(updatedItems);
            }
            else{
            const updatedItems = [...isVisible];
            updatedItems[7] = false;
            setIsVisible(updatedItems);
            }

            const newTableData = [...tableData];
            newTableData[5][2] = <button className='monday'
            style={isVisible[7]?{display:'none'}:{ height: '75px', backgroundColor: generateRandomColor() , display:'block'}} disabled>
            {clickedItem.name}
            </button>
            
            newTableData[5][4] = <button className='monday'
            style={isVisible[7]?{display:'none'}:{ height: '75px', backgroundColor: generateRandomColor() , display:'block'}} disabled>
            {clickedItem.name}
            </button>;

          
            setTableData(newTableData);
    
        }

        if (clickedItem.schedule === '화5목5') {

            if(isVisible[8]==false){
            const updatedItems = [...isVisible];
            updatedItems[8] = true;
            setIsVisible(updatedItems);
            }
            else{
            const updatedItems = [...isVisible];
            updatedItems[8] = false;
            setIsVisible(updatedItems);
            }

            const newTableData = [...tableData];
            newTableData[7][2] = <button className='monday'
            style={isVisible[8]?{display:'none'}:{ height: '75px', backgroundColor: generateRandomColor() , display:'block'}} disabled>
            {clickedItem.name}
            </button>
            
            newTableData[7][4] = <button className='monday'
            style={isVisible[8]?{display:'none'}:{ height: '75px', backgroundColor: generateRandomColor() , display:'block'}} disabled>
            {clickedItem.name}
            </button>;

          
            setTableData(newTableData);
    
        }

        if (clickedItem.schedule === '화6목6') {

            if(isVisible[9]==false){
            const updatedItems = [...isVisible];
            updatedItems[9] = true;
            setIsVisible(updatedItems);
            }
            else{
            const updatedItems = [...isVisible];
            updatedItems[9] = false;
            setIsVisible(updatedItems);
            }

            const newTableData = [...tableData];
            newTableData[8][2] = <button className='monday'
            style={isVisible[9]?{display:'none'}:{ height: '75px', backgroundColor: generateRandomColor() , display:'block'}} disabled>
            {clickedItem.name}
            </button>
            
            newTableData[8][4] = <button className='monday'
            style={isVisible[9]?{display:'none'}:{ height: '75px', backgroundColor: generateRandomColor() , display:'block'}} disabled>
            {clickedItem.name}
            </button>;

          
            setTableData(newTableData);
    
        }

        if (clickedItem.day === '') {
          let row = 0;
          let col = 2;
  
          if (clickedItem.starttime === 9) {
            row = 1;
          } else if (clickedItem.starttime === 10.5) {
            row = 2;
          } else if (clickedItem.starttime === 12) {
            row = 4;
          } else if (clickedItem.starttime === 13.5) {
            row = 5;
          } else if (clickedItem.starttime === 15) {
            row = 7;
          } else if (clickedItem.starttime === 16.5) {
            row = 8;
          }

          if(isVisible[1]==false){
            const updatedItems = [...isVisible];
            updatedItems[1] = true;
            setIsVisible(updatedItems);
            }
            else{
            const updatedItems = [...isVisible];
            updatedItems[1] = false;
            setIsVisible(updatedItems);
            }

          const newTableData = [...tableData];
          newTableData[row][col] = <button className={('a')+row}
          style={isVisible[1]?{display:'none'}:{ height: '75px', backgroundColor: generateRandomColor() , display:'block'}} disabled>
          {clickedItem.name}
          </button>;

          
          setTableData(newTableData);
  
        }
    }

    useEffect(() => {
      sessionStorage.setItem('tableData', JSON.stringify(tableData));
    }, [tableData]);

    // function saveTable(){
    //   localStorage.setItem('saveTable', tableData);
    // }


    return (
      <div className='container'>
        <div>
          <h3>2023년 1학기</h3>
          <h1>TimeTable</h1>
        </div>
        <table className='time_table'>
          <tbody>
            {tableData.map((row, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => {
                    return <td key={cellIndex}>{cell}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <button style={{float:'right'}}>저장</button>
        <div>
          {/* <button onClick={() => setIsClicked(true)}>추천 시간표 보기</button>
          {isClicked ? generateListItems() : <p>추천 과목이 표시됩니다.</p>} */}
          <button onClick={checkCourse}>전체강좌 보기</button>
          {myTable ? 
          <div className='container'>
          {courses.map((course) => (
            <div key={course.id} className='allcourse'>
              <h3>{course.name}</h3>
              <button className='add' key={course.id} onClick={() => addButton(course.id)}>담기</button>
              <p>교수: {course.professor}</p>
              <p>장소: {course.location}</p>
              <p>시간: {course.schedule}</p>
              {/* 추가적인 데이터 표시 */}
            </div>
          ))}
        </div> : <p></p>}
        </div>
        <div className='space'>
        </div>
        <BottomMenu />
      </div>
    );
}

export default Table;
