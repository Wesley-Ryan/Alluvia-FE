import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/account/login" component={() => <Login />} />
      <Homepage />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
