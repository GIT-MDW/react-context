import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeToggler from "./components/ThemeToggler";
import AuthContextProvider from "./context/AuthContext";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggler />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
