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
      <h1>
        Correct word: <span className="correct-word">{correctWord}</span>
      </h1>
      {gameOver.guessedWord && (
        <h3>
          You took <span className="attempts">{currAttempt.attempt}</span>{" "}
          attempts
        </h3>
      )}
      <button onClick={() => window.location.reload()}>Play again?</button>
    </div>
  );
};

export default GameOver;
