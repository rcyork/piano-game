import React from "react";
import "./Ivory.css";

export const Ivory = ({ note, id, currentNote }) => {
  const highlight = id === currentNote ? "highlight" : "";
  return <div className={`ivory ${note} ${highlight}`} />;
};
