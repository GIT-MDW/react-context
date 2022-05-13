import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

export class ThemeToggler extends Component {
  static contextType = ThemeContext;
  render() {
    // const { toggleTheme } = this.context;
    return (
      <ThemeContext.Consumer
        children={({ toggleTheme }) => {
          return <button onClick={toggleTheme}>Toggle Theme</button>;
        }}
      ></ThemeContext.Consumer>
    );
  }
}

export default ThemeToggler;
