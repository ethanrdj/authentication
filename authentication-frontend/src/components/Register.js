import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="Register">
      <h1>Register</h1>
      <form className="register-form">
        <label htmlFor="register-email">Email</label>
        <input
          className="register-input"
          id="register-email"
          type="type"
          name="email"
          required
        />
        <label htmlFor="register-password">Password</label>
        <input
          className="register-input"
          id="register-password"
          type="password"
          name="password"
          required
        />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          className="register-input"
          id="confirm-password"
          type="password"
          name="confirmPassword"
          required
        />
        <button>Register</button>

        <Link to="/">Already have an account? Login here!</Link>
      </form>
    </div>
  );
};

export default Register;
