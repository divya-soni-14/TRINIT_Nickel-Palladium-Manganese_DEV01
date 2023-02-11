import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className=" login__container card">
      <form className="login__col login__rightForm" action="">
        <h2 className="login__title">Welcome Back!</h2>
        <div className="">
          <div className="inputField">
            <label className="label" htmlFor="email">
              Email Address
            </label>
            <input
              type="text"
              className="form-field"
              name="email"
              placeholder="hello@example.com"
              id=""
            />
          </div>
          <div className="inputField">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="form-field"
              name="password"
              id=""
            />
          </div>

          <div className="submitButton">
            <button className="submit_btn">Login</button>
            <p className="signup-text">
              Don't have an account yet?{" "}
              <a>
                <Link className="signup__link" to="/register">
                  Sign Up!
                </Link>
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
