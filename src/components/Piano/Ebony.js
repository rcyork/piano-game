import React from "react";
import "./Ebony.css";

export const Ebony = ({ note, id, currentNote }) => {
  const highlight = id === currentNote ? "highlight" : "";
  return <div className={`ebony ${note} ${highlight}`} />;
};
