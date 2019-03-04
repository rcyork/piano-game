import React from "react";

import "./Nav.css";

export const Nav = ({ darkMode, toggleTheme, resetStats }) => {
  const moonIcon = `fas fa-moon fa-2x`;
  const sunIcon = `fas fa-sun fa-2x`;
  return (
    <div className="nav">
      <button className="resetStats" onClick={resetStats}>
        Reset Stats
      </button>
      <i
        className={darkMode ? `${sunIcon}` : `${moonIcon}`}
        onClick={() => toggleTheme()}
      />
    </div>
  );
};
