import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

interface LetterProps {
  letterPos: number;
  attemptVal: number;
}

const Letter: React.FC<LetterProps> = ({ letterPos, attemptVal }) => {
  const context = useContext(AppContext);

  if (!context) return null;

  const { board, correctWord, currAttempt, setDisabledLetters } = context;
  const letter = board[attemptVal][letterPos];

  const correct = correctWord.toUpperCase()[letterPos] === letter;

  // it cant be correct; it cant be a empty string correctWord must contains the letter
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost && currAttempt.attempt > attemptVal) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div className="letter" id={letterState ? letterState : undefined}>
      {letter}
    </div>
  );
};

export default Letter;
