import React from "react";
import classnames from "classnames";

import "./GuessButton.css";

export const GuessButton = ({
  note,
  checkGuess,
  incorrectGuesses,
  correctGuess,
  rowHighlight
}) => {
  const guessClasses = classnames({
    guessWrap: true,
    success: note === correctGuess,
    failure: incorrectGuesses.includes(note),
    rowHighlight: note.includes(rowHighlight)
  });
  return (
    <button className={guessClasses} id={note} onClick={checkGuess}>
      <span className="guess">{note}</span>
    </button>
  );
};
