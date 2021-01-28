import React from "react";
import { Link } from "react-router-dom";
import Alert from "./Alert";
import PropTypes from "prop-types";

const Register = ({
  handleChange,
  handleSubmitRegister,
  alertMessage,
  setAlertMessage,
}) => {
  return (
    <div className="Register">
      <h1 className="header">Register</h1>
      <form className="form" onSubmit={handleSubmitRegister}>
        <label className="form-labels" htmlFor="register-email">
          Email
        </label>
        <input
          className="form-input"
          id="register-email"
          type="email"
          name="email"
          required
          onChange={handleChange}
        />
        <label className="form-labels" htmlFor="register-username">
          Username
        </label>
        <input
          className="form-input"
          id="register-username"
          type="text"
          name="username"
          required
          onChange={handleChange}
        />
        <label className="form-labels" htmlFor="register-password">
          Password
        </label>
        <input
          className="form-input"
          id="register-password"
          type="password"
          name="password"
          required
          onChange={handleChange}
        />
        <label className="form-labels" htmlFor="confirm-password">
          Confirm Password
        </label>
        <input
          className="form-input"
          id="confirm-password"
          type="password"
          name="confirmPassword"
          required
          onChange={handleChange}
        />

        {alertMessage && <Alert alertMessage={alertMessage} />}

        <button className="form-button">Register and Login</button>

        <Link className="link-to" to="/" onClick={() => setAlertMessage("")}>
          Already have an account? Login here!
        </Link>
      </form>
    </div>
  );
};

Register.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmitRegister: PropTypes.func.isRequired,
  alertMessage: PropTypes.string,
  setAlertMessage: PropTypes.func,
};

export default Register;
