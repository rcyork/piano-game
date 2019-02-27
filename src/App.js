import React from "react";

import { Nav } from "./components/Nav/Nav";
import { Stats } from "./components/Stats/Stats";
import { Piano } from "./components/Piano/Piano";
import { ButtonGrid } from "./components/ButtonGrid/ButtonGrid";

import "./App.css";

export class App extends React.Component {
  state = {
    darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
    currentNote: null,
    mostRecentGuess: null,
    numberOfCorrectGuesses: null,
    totalGuesses: null
  };

  toggleTheme = () => {
    this.setState(
      prevState => {
        return {
          ...prevState,
          darkMode: !prevState.darkMode
        };
      },
      () =>
        localStorage.setItem("darkMode", JSON.stringify(this.state.darkMode))
    );
  };

  randomHighlight = () => {
    const randomNumber = (Math.floor(Math.random() * 12) + 1).toString();
    this.setState({ currentNote: randomNumber });
  };

  render() {
    const dark = this.state.darkMode ? "dark" : "";
    return (
      <div className={`${dark} container`}>
        <div className="app">
          <Nav darkMode={this.state.darkMode} toggleTheme={this.toggleTheme} />
          <Stats />
          <Piano currentNote={this.state.currentNote} />
          <ButtonGrid />
        </div>
      </div>
    );
  }
}
