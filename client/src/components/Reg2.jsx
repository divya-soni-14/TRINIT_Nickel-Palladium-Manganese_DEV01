import React from 'react'
import { Link } from "react-router-dom";
const Reg2 = (props) => {
  return (
    <div className="inputField">
          <label className="label" htmlFor="email">
            Description
          </label>
          <input
            type="text"
            className="form-field"
            name="description"
            placeholder="About You"
            id=""
            onChange={props.DescriptionChangeHandler}
            value={props.enteredDescription}
          />
          <div className="inputField">
            <label className="label" htmlFor="email">
              Address
            </label>
            <input
              type="text"
              className="form-field"
              name="address"
              id=""
              onChange={props.AddressChangeHandler}
                value={props.enteredAddress}
            />
          </div>
          <div className="inputField">
            <label className="label" htmlFor="password">
              Contact
            </label>
            <input
              type="text"
              className="form-field"
              name="contact"
              id=""
              onChange={props.ContactChangeHandler}
                value={props.enteredContact}
            />
          </div>
          <div className="checkboxField">
            <p className="checkbox__radio_text">Are you an NGO? </p>
            <span className="checkbox__radio_btns">
              <input type="radio" name="isNGO" id="" onClick={props.ngoChanger} /> Yes
              <input type="radio" name="isNGO" id="" onClick={props.ngoChanger} defaultChecked/>No
            </span>
          </div>

          <div className="submitButton">
            <button className="submit_btn" onClick={props.stepChanger}>Back</button>
            <button className="submit_btn" onClick={props.signuphandler}>Register</button>
            <p className="signup-text">
              Already have an account?{" "}
              <a>
                <Link className="signup__link" to="/login">
                  Login!
                </Link>
              </a>
            </p>
          </div>
        </div>
  )
}

export default Reg2