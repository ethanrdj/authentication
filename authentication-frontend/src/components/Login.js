import React from "react";
import { Link } from "react-router-dom";
import Alert from "./Alert";
import PropTypes from "prop-types";

const Login = ({
  handleChange,
  handleSubmitLogin,
  alertMessage,
  setAlertMessage,
}) => {
  return (
    <div className="Login">
      <h1 className="header">Login</h1>
      <form className="form" onSubmit={handleSubmitLogin}>
        <label className="form-labels" htmlFor="login-email">
          Email or Username
        </label>
        <input
          className="form-input"
          id="login-email"
          type="text"
          name="value"
          required
          onChange={handleChange}
        />
        <label className="form-labels" htmlFor="login-password">
          Password
        </label>
        <input
          className="form-input"
          id="login-password"
          type="password"
          name="password"
          required
          onChange={handleChange}
        />
        {alertMessage && <Alert alertMessage={alertMessage} />}

        <button className="form-button" type="submit">
          Submit
        </button>

        <Link
          className="link-to"
          to="/register"
          onClick={() => setAlertMessage("")}
        >
          Not a member? Sign up here!
        </Link>
      </form>
    </div>
  );
};

Login.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmitLogin: PropTypes.func.isRequired,
  alertMessage: PropTypes.string,
  setAlertMessage: PropTypes.func,
};

export default Login;
