import React from "react";

import "./Stats.css";

export const Stats = ({ totalCorrectGuesses, totalGuesses }) => {
  const correctGuessesPercentage = (
    (totalCorrectGuesses / totalGuesses) *
    100
  ).toFixed(0);
  return (
    <div className="stats">
      <span className="stats__fraction">{`${totalCorrectGuesses} / ${totalGuesses}`}</span>
      <span className="stats__percentage">
        {totalGuesses === 0 ? `0%` : `${correctGuessesPercentage}%`}
      </span>
    </div>
  );
};
