import React from "react";
import Homepage from "./components/Homepage";
import Login from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={() => <Homepage />} />
      <Route exact path="/account/login" component={() => <Login />} />
      <Route exact path="/dashboard" component={() => <Dashboard />} />

      <header className="App-header"></header>
    </div>
  );
}

export default App;
