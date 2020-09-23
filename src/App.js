import React, { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import MoviesLists from "./MoviesLists";

// STATICS
import "./App.css";
import requests from "./requests";

function App() {
  // STATE
  const [selectedOption, setSelectedOption] = useState(
    requests.fetchActionMovies
  );
  // HOOKS && CONTEXTS
  // FUNTIONS
  return (
    <div className="app">
      <Header />
      <Navbar setSelectedOption={setSelectedOption} />
      <MoviesLists selectedOptions={selectedOption} />
    </div>
  );
}

export default App;
