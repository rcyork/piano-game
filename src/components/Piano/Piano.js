import React from "react";
import "./Piano.css";

import { Ebony } from "./Ebony";
import { Ivory } from "./Ivory";

export const Piano = () => {
  return (
    <div className="piano">
      <div className="whiteKeys">
        <Ivory note="C" />
        <Ivory note="D" />
        <Ivory note="E" />
        <Ivory note="F" />
        <Ivory note="G" />
        <Ivory note="A" />
        <Ivory note="B" />
      </div>
      <div className="blackKeys">
        <Ebony note="CsharpDflat" />
        <Ebony note="DsharpEflat" />
        <Ebony note="FsharpGflat" />
        <Ebony note="GsharpAflat" />
        <Ebony note="AsharpBflat" />
      </div>
    </div>
  );
};
