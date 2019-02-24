import React from "react";

import "./GuessButton.css";

export const GuessButton = ({ note }) => {
  return (
    <button className="guessWrap">
      <span className="guess">{note}</span>
    </button>
  );
};
