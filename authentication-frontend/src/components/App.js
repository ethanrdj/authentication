import React, { useState } from "react";
import "../styles/App.css";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import { Route, Redirect, useHistory } from "react-router-dom";
import axios from "axios";

import "../styles/main.scss";

function App() {
  const [value, setValue] = useState();
  const [user, setUser] = useState();
  const [alertMessage, setAlertMessage] = useState("");

  const history = useHistory();

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  // LOGIN

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/login", {
        value: value.value,
        password: value.password,
      })
      .then(({ data }) => {
        setUser(data);
        history.push("/home");
      })
      .catch(() =>
        setAlertMessage(
          "Either your email, username or password is incorrect, please try again."
        )
      );
  };

  // REGISTER
  const handleSubmitRegister = (e) => {
    e.preventDefault();

    if (value.password === value.confirmPassword) {
      axios
        .post("http://localhost:5000/register", {
          email: value.email,
          username: value.username,
          password: value.password,
        })
        .then(({ data }) => {
          setUser(data);
          history.push("/home");
        })
        .catch((error) => console.log(error));
    } else {
      setAlertMessage("Your passwords do not match");
    }
  };
  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={() => (
          <Login
            handleChange={handleChange}
            handleSubmitLogin={handleSubmitLogin}
            alertMessage={alertMessage}
            setAlertMessage={setAlertMessage}
          />
        )}
      />
      <Route
        exact
        path="/register"
        render={() => (
          <Register
            handleChange={handleChange}
            handleSubmitRegister={handleSubmitRegister}
            alertMessage={alertMessage}
            setAlertMessage={setAlertMessage}
          />
        )}
      />
      <Route
        exact
        path="/home"
        render={() => (user ? <Home user={user} /> : <Redirect to="/" />)}
      />
    </div>
  );
}

export default App;
