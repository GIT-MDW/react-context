import React, { useState } from "react";

export const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  });

  const toggleTheme = () => {
    setTheme((prevState) => {
      return { ...prevState, isLightTheme: !theme.isLightTheme };
    });
  };

  return <ThemeContext.Provider value={{ ...theme, toggleTheme: toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
