import React from 'react'
import { Link } from "react-router-dom";
const Reg1 = (props) => {
  return (
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
            onChange={props.NameChangeHandler}
            value={props.enteredName}
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
              onChange={props.EmailChangeHandler}
              value={props.enteredEmail}
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
              onChange={props.PasswordChangeHandler}
             value={props.enteredPassword}
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
              onChange={props.RePasswordChangeHandler}
             value={props.enteredRePassword}
            />
          </div>

          <div className="submitButton">
            <button className="submit_btn" onClick={props.stepChanger}>Next</button>
          </div>
        </div>
  )
}

export default Reg1