import React from "react";
import { GuessButton } from "./GuessButton";

import "./ButtonGrid.css";

export const ButtonGrid = () => {
  return (
    <div className="buttonGrid">
      <GuessButton note="C#" />
      <GuessButton note="D#" />
      <GuessButton note="E#" />
      <GuessButton note="F#" />
      <GuessButton note="G#" />
      <GuessButton note="A#" />
      <GuessButton note="B#" />
      <GuessButton note="C" />
      <GuessButton note="D" />
      <GuessButton note="E" />
      <GuessButton note="F" />
      <GuessButton note="G" />
      <GuessButton note="A" />
      <GuessButton note="B" />
      <GuessButton note="Cb" />
      <GuessButton note="Db" />
      <GuessButton note="Eb" />
      <GuessButton note="Fb" />
      <GuessButton note="Gb" />
      <GuessButton note="Ab" />
      <GuessButton note="Bb" />
    </div>
  );
};
