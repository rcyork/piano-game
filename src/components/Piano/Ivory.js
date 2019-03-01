import React from "react";
import "./Ivory.css";

export const Ivory = ({ note, currentNote }) => {
  const highlight = note === currentNote ? "highlight" : "";
  return <div className={`${note} ivory ${highlight}`} />;
};
