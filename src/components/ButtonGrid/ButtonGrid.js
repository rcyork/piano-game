import React from "react";
import { GuessButton } from "./GuessButton";

import "./ButtonGrid.css";

const NOTES = [
  "C#",
  "D#",
  "E#",
  "F#",
  "G#",
  "A#",
  "B#",
  "C",
  "D",
  "E",
  "F",
  "G",
  "A",
  "B",
  "Cb",
  "Db",
  "Eb",
  "Fb",
  "Gb",
  "Ab",
  "Bb"
];

export const ButtonGrid = ({ checkGuess, incorrectGuesses, correctGuess }) => {
  return (
    <div className="buttonGrid">
      {NOTES.map(note => (
        <GuessButton
          key={note}
          note={note}
          checkGuess={() => checkGuess(note)}
          incorrectGuesses={incorrectGuesses}
          correctGuess={correctGuess}
        />
      ))}
    </div>
  );
};
