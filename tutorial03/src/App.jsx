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
    if (isWin(board)) {
      console.log(currPlayer + " wins!");
    }
    setCurrPlayer(currPlayer === "X" ? "Y" : "X");
  };

  const resetGame = () => {
    setBoard(generateBoard(3));
  };

  const checkHorizontal = (board) => {
    for (let row of board) {
      const rowSet = new Set(row);
      if (rowSet.size === 1 && !rowSet.has(undefined)) {
        return true;
      }
    }
  };

  const rowsToColumns = (board) => {
    const newBoard = [];
    let column = 0;
    while (column < board.length) {
      const newRow = [];
      for (let row = 0; row < board.length; row++) {
        newRow.push(board[row][column]);
      }
      newBoard.push(newRow);
      column++;
    }
    return newBoard;
  };

  const diagonalToRow = (board) => {
    const newBoard = [[], []];
    let increment = 0,
      decrement = board.length - 1;
    while (increment < board.length) {
      newBoard[0].push(board[increment][decrement]);
      newBoard[1].push(board[increment][decrement]);
      increment++;
      decrement++;
    }
    return newBoard;
  };

  // decide who wins
  const isWin = (board) => {
    // horizontal
    if (checkHorizontal(board)) {
      return true;
    }
    // vertical
    if (checkHorizontal(rowsToColumns(board))) {
      return true;
    }
    // diagonal
    if (checkHorizontal(diagonalToRow(board))) {
      return true;
    }
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
