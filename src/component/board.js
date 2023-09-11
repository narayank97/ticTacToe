import React, { useEffect, useState } from 'react';

function Board() {
  // Component logic and JSX here

  const boardSize = 3;
  const [board, setBoard] = useState([]);

  useEffect(() => {
    let boardRow = Array(boardSize).fill(null);
    let newBoard = [];
    for (let i = 0; i < boardSize; i++) {
      newBoard.push(boardRow);
    }
    setBoard(newBoard);
  }, []);



  return (
    <div>
      {board &&
        board.map((row, index) => {
          return (
            <div
              key={index}
              style={
                {
                  display: "flex",
                  flexDirection: "row",
                }
              }
            >
              {
                row.map((col, indexC) => {
                  return (
                    <div
                      key={indexC}
                      style={
                        {
                          border: "1px solid black",
                          width: "200px",
                          height: "200px",
                        }
                      }
                    >
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  );
};

export default Board;