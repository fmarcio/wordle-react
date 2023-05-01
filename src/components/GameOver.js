import React, { useContext } from "react";
import { AppContext } from "../App";

const GameOver = () => {
  const { correctWord, currAttempt, gameOver } = useContext(AppContext);

  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "Congrats! You guessed the word!"
          : "You didn't guess the word"}
      </h3>
      <h1>Correct word: {correctWord}</h1>
      {gameOver.guessedWord && <h3>You took {currAttempt.attempt} attempts</h3>}
      <button onClick={() => window.location.reload()}>Play again?</button>
    </div>
  );
};

export default GameOver;
