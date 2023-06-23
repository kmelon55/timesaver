import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BottomMenu from './BottomMenu';

function Test() {

    const [isClicked, setIsClicked] = useState(false);
    const [clickedData, setClickedData] = useState(null);

    const [isVisible, setIsVisible] = useState([false, false, false, false, false]);
      

    const [tableData, setTableData] = useState([
      ["", "월", "화", "수", "목","금"],
      ["9", "", "", "", "",""],
      ["10", "", "", "", "",""],
      ["11", "", "", "", "",""],
      ["12", "", "", "", "",""],
      ["13", "", "", "", "",""],
      ["14", "", "", "", "",""],
      ["15", "", "", "", "",""],
      ["16", "", "", "", "",""],
      ["17", "", "", "", "",""]
    ]);

    const profiles = [
      {
        day: 'monday',
        name: 'math',
        starttime: 9,
        endtime: 11
      },
      {
        day: 'wednesday',
        name: 'English',
        starttime: 15,
        endtime: 17
      },
      {
        day: 'friday',
        name: 'ai',
        starttime: 15,
        endtime: 17
      },
      {
        day: 'tuesday',
        name: '시스템반도체설계',
        starttime: 16.5,
        endtime: 18
      },
      {
        day: 'thursday',
        name: '시스템반도체설계',
        starttime: 13.5,
        endtime: 15
      }
    ];


    function generateListItems() {
        return profiles.map((profile, index) => (
          <button className='recoList' key={index} onClick={() => addButton(index)}>{profile.name+':'+profile.day+'('+profile.starttime+'~'+profile.endtime+')' }</button>
        ));
    }

    const generateRandomColor = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return randomColor;
    };


    function addButton(key){
        const clickedIndex = parseInt(key, 10);
        const clickedItem = profiles[clickedIndex];
        setClickedData(clickedItem);
        if (clickedItem.day === 'monday') {
            let row, col;
            col = 1;
    
            if (clickedItem.starttime === 9) {
              row = 1;
            } else if (clickedItem.starttime === 11) {
              row = 3;
            } else if (clickedItem.starttime === 13) {
              row = 5;
            } else if (clickedItem.starttime === 15) {
              row = 7;
            }

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
            newTableData[row][col] = <button className='monday'
            style={isVisible[0]?{display:'none'}:{ height: '100px', backgroundColor: generateRandomColor() , display:'block'}} disabled>
            {clickedItem.name}
            </button>;

          
            setTableData(newTableData);
    
        }
        if (clickedItem.day === 'tuesday') {
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
        if (clickedItem.day === 'wednesday') {
          let row, col;
          col = 3;
  
          if (clickedItem.starttime === 9) {
            row = 1;
          } else if (clickedItem.starttime === 11) {
            row = 3;
          } else if (clickedItem.starttime === 13) {
            row = 5;
          } else if (clickedItem.starttime === 15) {
            row = 7;
          }

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
          newTableData[row][col] = <button
          style={isVisible[2]?{display:'none'}:{ height: '100px', backgroundColor: generateRandomColor() , display:'block'}} disabled>
          {clickedItem.name}
          </button>;
          setTableData(newTableData);
  
        }
        if (clickedItem.day === 'thursday') {
          let row, col;
          col = 4;
  
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
          newTableData[row][col] = <button className={('a')+row}
          style={isVisible[3]?{display:'none'}:{ height: '75px', backgroundColor: generateRandomColor() , display:'block'}} disabled>
          {clickedItem.name}
          </button>;
          setTableData(newTableData);
  
        }
        if (clickedItem.day === 'friday') {
          let row, col;
          col = 5;
  
          if (clickedItem.starttime === 9) {
            row = 1;
          } else if (clickedItem.starttime === 11) {
            row = 3;
          } else if (clickedItem.starttime === 13) {
            row = 5;
          } else if (clickedItem.starttime === 15) {
            row = 7;
          }

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
          newTableData[row][col] = <button
          style={isVisible[4]?{display:'none'}:{ height: '100px', backgroundColor: generateRandomColor() , display:'block'}} disabled>
          {clickedItem.name}
          </button>;
          setTableData(newTableData);
  
        }
      

    }

    useEffect(() => {
      const savedData = JSON.parse(localStorage.getItem('tableData'));
      if (savedData) {
        setTableData(savedData);
      }
    }, []);

    useEffect(() => {
      localStorage.setItem('tableData', JSON.stringify(tableData));
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
        <div>
          <button onClick={() => setIsClicked(true)}>추천 시간표 보기</button>
          {isClicked ? generateListItems() : <p>추천 과목이 표시됩니다.</p>}
        </div>
        <BottomMenu />
      </div>
    );
}

export default Test;
