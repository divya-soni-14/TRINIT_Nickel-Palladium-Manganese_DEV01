import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateAccount from "../Connections/CreateAccount";
import GetAccounts from "../Connections/GetAccounts";
import useInput from "../hooks/use-input";
import Reg1 from "./Reg1";
import Reg2 from "./Reg2";

const Register = () => {

  const [step,setStep] = useState(0);
  const [isNGO, setIsNGO] = useState(0);
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: NameInputHasError,
    valueChangeHandler: NameChangeHandler,
    inputBlurHandler: NameBlurHandler,
    reset: resetName,
  } = useInput((v) => v.trim().length > 1);

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
  } = useInput((v) => v.length > 6);

  const {
    value: enteredRePassword,
    isValid: enteredRePasswordIsValid,
    hasError: RePasswordInputHasError,
    valueChangeHandler: RePasswordChangeHandler,
    inputBlurHandler: RePasswordBlurHandler,
    reset: resetRePassword,
  } = useInput((v) => v === enteredPassword);

  const {
    value: enteredDescription,
    isValid: enteredDescriptionIsValid,
    hasError: DescriptionInputHasError,
    valueChangeHandler: DescriptionChangeHandler,
    inputBlurHandler: DescriptionBlurHandler,
    reset: resetDescription,
  } = useInput((v) => v.trim().length > 1);

  const {
    value: enteredAddress,
    isValid: enteredAddressIsValid,
    hasError: AddressInputHasError,
    valueChangeHandler: AddressChangeHandler,
    inputBlurHandler: AddressBlurHandler,
    reset: resetAddress,
  } = useInput((v) => v.trim().length > 1);

  const {
    value: enteredContact,
    isValid: enteredContactIsValid,
    hasError: ContactInputHasError,
    valueChangeHandler: ContactChangeHandler,
    inputBlurHandler: ContactBlurHandler,
    reset: resetContact,
  } = useInput((v) => v.trim().length > 1);

  const {
    value: enteredType,
    isValid: enteredTypeIsValid,
    hasError: TypeInputHasError,
    valueChangeHandler: TypeChangeHandler,
    inputBlurHandler: TypeBlurHandler,
    reset: resetType,
  } = useInput((v) => v.trim().length > 1);

  const stepChanger = () => {
    setStep(e => !e);
  }
  const ngoChanger = () => {
    setIsNGO(e => !e);
  }

  const signuphandler = async (event) => {
    event.preventDefault();
    if (
      !enteredEmailIsValid ||
      !enteredNameIsValid ||
      !enteredPasswordIsValid ||
      !enteredRePasswordIsValid ||
      !enteredAddressIsValid || 
      !enteredContactIsValid || 
      !enteredDescriptionIsValid
    )
      {
        console.log("bruh");
        return;
      }

    // const response = await CreateAccount({
    //   email: enteredEmail,
    //   password: enteredPassword,
    //   description : enteredDescription,
    //   contact : enteredContact,
    //   type: isNGO ? 'ngo' : 'user',
    //   address: enteredAddress,
    //   name: enteredName
    // });
    const response = await GetAccounts();
    console.log(response);
  }

  return (
    <div className=" register__container card">
      <form className="register__col register__rightForm" action="">
        <h2 className="register__title">Hello!</h2>
          {step ? 
          <Reg2 
            stepChanger={stepChanger}  
            AddressChangeHandler={AddressChangeHandler}
            enteredAddress={enteredAddress}
            DescriptionChangeHandler={DescriptionChangeHandler}
            enteredDescription={enteredDescription}
            ContactChangeHandler={ContactChangeHandler}
            enteredContact={enteredContact}
            TypeChangeHandler={TypeChangeHandler}
            enteredType={enteredType}
            ngoChanger={ngoChanger}
            signuphandler={signuphandler}
          /> 
            : 
          <Reg1
            stepChanger={stepChanger}
            EmailChangeHandler={EmailChangeHandler}
            enteredEmail={enteredEmail}
            NameChangeHandler={NameChangeHandler}
            enteredName={enteredName}
            PasswordChangeHandler={PasswordChangeHandler}
            enteredPassword={enteredPassword}
            RePasswordChangeHandler={RePasswordChangeHandler}
            enteredRePassword={enteredRePassword}
          />}
      </form>
    </div>
  );
};

export default Register;
