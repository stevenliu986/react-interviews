import { useState, useEffect } from "react";
import { mockData } from "./mockData";
import "./App.css";

// const API_URL = "https://api.frontendexpert.io/api/fe/wordle-words";

function App() {
  // useEffect(() => {
  //   fetch(API_URL, { method: "GET", mode: "no-cors" }).then((response) =>
  //     console.log(response)
  //   );
  // }, []);

  // const [guesses, setGuesses] = useState(Array(6).fill(null));

  // const randomIndex = Math.floor(Math.random() * mockData.length);
  // const randomWord = mockData[randomIndex];

  const guesses = new Array(6).fill("H");

  return (
    <>
      {guesses.map((guess, index) => (
        <Line key={index} guess={guess} />
      ))}
    </>
  );
}

export default App;

function Line({ guess }) {
  const tiles = [];
  for (let i = 0; i < 5; i++) {
    const char = guess[i];
    tiles.push(
      <div key={i} className="tile">
        {char}
      </div>
    );
  }

  return <div className="line"> {tiles}</div>;
}
