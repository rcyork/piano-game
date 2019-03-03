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

const MODIFIER_KEYS = ["ArrowUp", "ArrowDown"];

export class App extends React.Component {
  state = {
    darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
    currentNote: null,
    mostRecentGuess: null,
    numberOfCorrectGuesses: null,
    totalGuesses: null,
    incorrectGuesses: [],
    correctGuess: "",
    guessRowHighlight: null
  };

  down = false;

  componentDidMount() {
    this.highlightRandomNote();
    window.addEventListener("keydown", this.handleModifierKey);
    window.addEventListener("keyup", event => {
      this.handleKeyUp(event.key);
    });
    window.addEventListener("keypress", event => {
      this.handleGuessKey(event.key);
    });
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleModifierKey);
    window.removeEventListener("keyup", this.handleKeyUp);
    window.removeEventListener("keydown", this.handleGuessKey);
  }

  handleModifierKey = event => {
    const { key } = event;

    if (this.down || !MODIFIER_KEYS.includes(key)) return;

    this.down = true;

    this.setState({ guessRowHighlight: key === "ArrowUp" ? "#" : "b" });
  };

  handleGuessKey = key => {
    const modifier = this.state.guessRowHighlight || "";
    const guess = `${key.toUpperCase()}${modifier}`;
    // prevent checking guess of bogus keys
    const validKeys = ["a", "b", "c", "d", "e", "f", "g"];
    if (validKeys.includes(key)) {
      this.checkGuess(guess);
    }
    return;
  };

  handleKeyUp = key => {
    if (MODIFIER_KEYS.includes(key)) {
      this.down = false; // stops repeating keys from being ignored
      this.setState({ guessRowHighlight: null });
    }
    return;
  };

  toggleTheme = () => {
    this.setState(
      prevState => {
        return {
          darkMode: !prevState.darkMode
        };
      },
      () =>
        localStorage.setItem("darkMode", JSON.stringify(this.state.darkMode))
    );
  };

  highlightRandomNote = () => {
    const { currentNote } = this.state;
    let newNote = currentNote;

    while (newNote === currentNote) {
      newNote = getRandomNote();
    }

    this.setState({ currentNote: newNote });
  };

  checkGuess = guess => {
    console.log("guess", guess);
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

    this.highlightRandomNote();
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
            rowHighlight={this.state.guessRowHighlight}
          />
        </div>
      </div>
    );
  }
}
