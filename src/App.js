import React, { useState } from "react";
import { UserContext } from "./utils/userContext";
import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    message: "Welcome Default User",
    username: "",
    userId: 0,
  });
  return (
    <div className="App">
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <Route path="/account/login" component={() => <Login />} />
        <Route exact path="/" component={() => <Homepage />} />
        <Route exact path="/user/:id" component={() => <Dashboard />} />
      </UserContext.Provider>

      <header className="App-header"></header>
    </div>
  );
}

export default App;
