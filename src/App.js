import React from "react";
import Homepage from "./components/Homepage";

import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={() => <Homepage />} />

      <header className="App-header"></header>
    </div>
  );
}

export default App;
