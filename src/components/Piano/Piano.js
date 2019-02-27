import React from "react";
import "./Piano.css";

import { Ebony } from "./Ebony";
import { Ivory } from "./Ivory";

export const Piano = ({ currentNote }) => {
  return (
    <div className="piano">
      <div className="whiteKeys">
        <Ivory id="1" note="C" currentNote={currentNote} />
        <Ivory id="3" note="D" currentNote={currentNote} />
        <Ivory id="5" note="E" currentNote={currentNote} />
        <Ivory id="6" note="F" currentNote={currentNote} />
        <Ivory id="8" note="G" currentNote={currentNote} />
        <Ivory id="10" note="A" currentNote={currentNote} />
        <Ivory id="12" note="B" currentNote={currentNote} />
      </div>
      <div className="blackKeys">
        <Ebony id="2" note="Csharp Dflat" currentNote={currentNote} />
        <Ebony id="4" note="Dsharp Eflat" currentNote={currentNote} />
        <Ebony id="7" note="Fsharp Gflat" currentNote={currentNote} />
        <Ebony id="9" note="Gsharp Aflat" currentNote={currentNote} />
        <Ebony id="11" note="Asharp Bflat" currentNote={currentNote} />
      </div>
    </div>
  );
};
