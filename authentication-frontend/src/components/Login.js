import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="Login">
      <h1 className="login-header">Login</h1>
      <form className="login-form">
        <label htmlFor="login-email">Email</label>
        <input
          className="login-input"
          id="login-email"
          type="text"
          name="email"
          required
        />
        <label htmlFor="login-password">Password</label>
        <input
          className="login-input"
          id="login-password"
          type="password"
          name="password"
          required
        />
        <button type="submit">Submit</button>

        <Link to="/register">Not a member? Sign up here!</Link>
      </form>
    </div>
  );
};

export default Login;
