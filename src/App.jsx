import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [getState, setState] = useState({ n: 5 });

  const increment = () => {
    setState({ n: getState.n + 1 });
  };

  const decrement = () => {
    setState({ n: getState.n - 1 });
  };

  return (
    <div data-test="app">
      <h1 data-test="counter-display">{getState.n}</h1>
      <br />
      <button data-test="dec" onClick={decrement}>Decrement</button>
      <button data-test="inc" onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
