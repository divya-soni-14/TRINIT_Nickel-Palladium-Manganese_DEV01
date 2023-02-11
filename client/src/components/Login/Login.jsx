import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../hooks/use-input";
import LoginConnect from "../../Connections/Login";
import {useCookies} from "react-cookie";
const Login = () => {
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: EmailInputHasError,
    valueChangeHandler: EmailChangeHandler,
    inputBlurHandler: EmailBlurHandler,
    reset: resetEmail,
  } = useInput((v) => regex.test(v));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: PasswordInputHasError,
    valueChangeHandler: PasswordChangeHandler,
    inputBlurHandler: PasswordBlurHandler,
    reset: resetPassword,
  } = useInput((v) => v.length > 0);

  const [cookies, setCookie] = useCookies(["token"]);
  const loginHandler = async (event) => {
    event.preventDefault();

    if (
      !enteredEmailIsValid ||
      !enteredPasswordIsValid
    )
      {
        setMessage("Error in Form Filling");
        return;
      }

    const response = await LoginConnect({
      email: enteredEmail,
      password: enteredPassword,
    });
    console.log(response);
    setMessage(response.message ? response.message : "Login Successfully");
    if(response.success){
      setCookie("token", response.id, { path: "/" });
      setTimeout(() => {
        navigate('/home');
      }, 2000)
    }
  }

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
              onChange={EmailChangeHandler}
              value={enteredEmail}
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
              onChange={PasswordChangeHandler}
              value={enteredPassword}
            />
          </div>

          <div className="submitButton">
            <button className="submit_btn" onClick={loginHandler}>Login</button>
            <p className="signup-text">
              Don't have an account yet?{" "}
              <a>
                <Link className="signup__link" to="/register">
                  Sign Up!
                </Link>
              </a>
            </p>
            { message && 
            <p className="signup-text">{message}</p>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
