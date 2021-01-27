import React from "react";
import "../styles/App.css";
import Login from "./Login";
import Register from "./Register";
import { Route } from "react-router-dom";

import "../styles/main.scss";

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Login />} />
      <Route exact path="/register" component={Register} />
    </div>
  );
}

export default App;
