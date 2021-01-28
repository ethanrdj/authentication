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
      <h1>Register</h1>
      <form className="register-form" onSubmit={handleSubmitRegister}>
        <label htmlFor="register-email">Email</label>
        <input
          className="register-input"
          id="register-email"
          type="email"
          name="email"
          required
          onChange={handleChange}
        />
        <label htmlFor="register-username">Username</label>
        <input
          className="register-input"
          id="register-username"
          type="text"
          name="username"
          required
          onChange={handleChange}
        />
        <label htmlFor="register-password">Password</label>
        <input
          className="register-input"
          id="register-password"
          type="password"
          name="password"
          required
          onChange={handleChange}
        />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          className="register-input"
          id="confirm-password"
          type="password"
          name="confirmPassword"
          required
          onChange={handleChange}
        />

        {alertMessage && <Alert alertMessage={alertMessage} />}

        <button>Register and Login</button>

        <Link to="/" onClick={() => setAlertMessage("")}>
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
