import React, { useEffect, useState } from "react";

const MyComponent = () => {
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

  const [myArray, setMyArray] = useState(() => {
    const storedArray = localStorage.getItem('myArray');
    if (storedArray) {
      return JSON.parse(storedArray);
    } else {
      return initialData;
    }
  });

  const handleUpdateCell = (rowIndex, columnIndex, value) => {
    const updatedArray = [...myArray];
    updatedArray[rowIndex][columnIndex] = value;
    setMyArray(updatedArray);
  };

  useEffect(() => {
    localStorage.setItem('myArray', JSON.stringify(myArray));
  }, [myArray]);

  return (
    <div>
      <table>
        <tbody>
          {myArray.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, columnIndex) => (
                <td key={columnIndex}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyComponent;
