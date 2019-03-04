import React from "react";
import "./Piano.css";

import { Ebony } from "./Ebony";
import { Ivory } from "./Ivory";

export const Piano = ({ currentNote }) => {
  return (
    <div className="pianoWrap">
      <div className="piano">
        <div className="whiteKeys">
          <Ivory note="C" currentNote={currentNote} />
          <Ivory note="D" currentNote={currentNote} />
          <Ivory note="E Fb" currentNote={currentNote} />
          <Ivory note="F E#" currentNote={currentNote} />
          <Ivory note="G" currentNote={currentNote} />
          <Ivory note="A" currentNote={currentNote} />
          <Ivory note="B Cb" currentNote={currentNote} />
        </div>
        <div className="blackKeys">
          <Ebony note="C# Db" currentNote={currentNote} />
          <Ebony note="D# Eb" currentNote={currentNote} />
          <Ebony note="F# Gb" currentNote={currentNote} />
          <Ebony note="G# Ab" currentNote={currentNote} />
          <Ebony note="A# Bb" currentNote={currentNote} />
        </div>
      </div>
    </div>
  );
};
