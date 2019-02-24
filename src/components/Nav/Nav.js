import React from "react";

import "./Nav.css";

export const Nav = ({ darkMode, toggleTheme }) => {
  const moonIcon = `fas fa-moon fa-2x`;
  const sunIcon = `fas fa-sun fa-2x`;
  return (
    <div className="nav">
      <i className="fas fa-cog fa-2x" />
      <i
        className={darkMode ? `${sunIcon}` : `${moonIcon}`}
        onClick={() => toggleTheme()}
      />
    </div>
  );
};
