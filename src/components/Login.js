import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
      <div className="create-account">
        <p>Don't have an account?</p>
        <Link to="/create-account">Create New Account</Link>
      </div>
    </div>
  );
};

export default Login;
