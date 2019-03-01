import React from "react";
import classnames from "classnames";

import "./GuessButton.css";

export const GuessButton = ({
  note,
  checkGuess,
  incorrectGuesses,
  correctGuess
}) => {
  const guessClasses = classnames({
    guessWrap: true,
    success: note === correctGuess,
    failure: incorrectGuesses.includes(note)
  });
  return (
    <button className={guessClasses} id={note} onClick={checkGuess}>
      <span className="guess">{note}</span>
    </button>
  );
};
