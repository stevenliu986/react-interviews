import { useState } from "react";

import "./App.css";

function App() {
  const generateBoard = (size) => {
    const newBoard = [];
    for (let i = 0; i < size; i++) {
      newBoard.push([...Array(size)]);
    }
    return newBoard;
  };

  const [board, setBoard] = useState(generateBoard(3));
  const [currPlayer, setCurrPlayer] = useState("X");

  const handleClickBoard = (row, col) => {
    board[row][col] = currPlayer;
    setBoard([...board]);
    setCurrPlayer(currPlayer === "X" ? "Y" : "X");
  };

  const resetGame = () => {
    setBoard(generateBoard(3));
  };

  // decide who wins
  const winner = (row, col) => {
    console.log(row, col);
  };

  return (
    <div>
      {board.map((row, r) => {
        return (
          <div
            key={r}
            style={{
              display: "flex",
            }}
          >
            {row.map((cell, c) => {
              return (
                <div
                  onClick={() => handleClickBoard(r, c)}
                  key={c}
                  style={{
                    width: "50px",
                    height: "50px",
                    border: "1px solid black",
                    lineHeight: "50px",
                  }}
                >
                  {cell}
                </div>
              );
            })}
          </div>
        );
      })}
      <button onClick={resetGame} style={{ marginTop: "30px" }}>
        Reset Game
      </button>
    </div>
  );
}

export default App;
