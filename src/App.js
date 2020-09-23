import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import MoviesLists from "./MoviesLists";

// STATICS
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <MoviesLists />
    </div>
  );
}

export default App;
