import React from "react";
import "./Ebony.css";

export const Ebony = ({ note, currentNote }) => {
  const highlight = note === currentNote ? "highlight" : "";
  return <div className={`${note} ebony ${highlight}`} />;
};
