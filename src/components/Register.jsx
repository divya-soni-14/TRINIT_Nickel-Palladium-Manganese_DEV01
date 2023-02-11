import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className=" register__container card">
      <form className="register__col register__rightForm" action="">
        <h2 className="register__title">Hello!</h2>
        <div className="inputField">
          <label className="label" htmlFor="email">
            Name
          </label>
          <input
            type="text"
            className="form-field"
            name="name"
            placeholder="John Doe"
            id=""
          />
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

          <div className="inputField">
            <label className="label" htmlFor="password">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-field"
              name="password"
              id=""
            />
          </div>

          <div className="submitButton">
            <button className="submit_btn">Register</button>
            <p className="signup-text">
              Already have an account?{" "}
              <a>
                <Link className="signup__link" to="/register">
                  Login!
                </Link>
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
