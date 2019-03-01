import React from "react";

import { Nav } from "./components/Nav/Nav";
import { Stats } from "./components/Stats/Stats";
import { Piano } from "./components/Piano/Piano";
import { ButtonGrid } from "./components/ButtonGrid/ButtonGrid";
import { NOTES } from "./notes";

import "./App.css";

const getRandomNote = () => {
  const randomNumber = Math.floor(Math.random() * 12);
  return NOTES[randomNumber];
};

export class App extends React.Component {
  state = {
    darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
    currentNote: null,
    mostRecentGuess: null,
    numberOfCorrectGuesses: null,
    totalGuesses: null,
    incorrectGuesses: [],
    correctGuess: ""
  };

  componentDidMount() {
    this.randomHighlight();
  }

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
    const { currentNote } = this.state;
    let newNote = currentNote;

    while (newNote === currentNote) {
      newNote = getRandomNote();
    }

    this.setState({ currentNote: newNote });
  };

  checkGuess = guess => {
    if (!this.state.currentNote.includes(guess)) {
      this.setState(prevState => ({
        incorrectGuesses: [...prevState.incorrectGuesses, guess]
      }));

      return;
    }

    this.setState({ correctGuess: guess, incorrectGuesses: [] });

    setTimeout(() => {
      this.setState({ correctGuess: "" });
    }, 200);

    this.randomHighlight();
  };

  render() {
    const dark = this.state.darkMode ? "dark" : "";
    return (
      <div className={`${dark} container`}>
        <div className="app">
          <Nav darkMode={this.state.darkMode} toggleTheme={this.toggleTheme} />
          <Stats />
          <Piano currentNote={this.state.currentNote} />
          <ButtonGrid
            checkGuess={this.checkGuess}
            incorrectGuesses={this.state.incorrectGuesses}
            correctGuess={this.state.correctGuess}
          />
        </div>
      </div>
    );
  }
}
