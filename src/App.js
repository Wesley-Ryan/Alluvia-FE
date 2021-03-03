import React from "react";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddSubscriptionForm from "./components/AddSubscriptionForm";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/account/login" component={() => <Login />} />
      <Route exact path="/" component={() => <Homepage />} />
      <Route exact path="/user/:id" component={() => <Dashboard />} />
      <Route
        exact
        path="/user/:id/subscriptions/add-subscription"
        component={() => <AddSubscriptionForm />}
      />

      <header className="App-header"></header>
    </div>
  );
}

export default App;
