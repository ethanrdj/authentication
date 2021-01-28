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
      <h1 className="login-header">Login</h1>
      <form className="login-form" onSubmit={handleSubmitLogin}>
        <label htmlFor="login-email">Email or Username</label>
        <input
          className="login-input"
          id="login-email"
          type="text"
          name="value"
          required
          onChange={handleChange}
        />
        <label htmlFor="login-password">Password</label>
        <input
          className="login-input"
          id="login-password"
          type="password"
          name="password"
          required
          onChange={handleChange}
        />
        {alertMessage && <Alert alertMessage={alertMessage} />}

        <button type="submit">Submit</button>

        <Link to="/register" onClick={() => setAlertMessage("")}>
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
