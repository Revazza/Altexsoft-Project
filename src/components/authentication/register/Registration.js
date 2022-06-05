import React from "react";
import useHttp from "../../../hooks/useHttp";
import useInput from "../../../hooks/useInput";
import Input from "../../../UI/input/Input";

import { stringContainsNumber } from "../../../helperFunctions/HelperFunctions";

import classes from "./Registration.module.css";

const validateNameOrLastname = (value,min,max) =>{

  return value.trim().length > min && value.trim().length < max && !stringContainsNumber(value);
}

function Registration() {
  const {
    value: username,
    isValid: usernameIsValid,
    valueChangeHandler: usernameChangeHandler,
    valueLoseFocusHandler: usernameLoseFocusHandler,
  } = useInput((username) => {
    return validateNameOrLastname(username,1,20);
  });

  const {
    isValid: lastnameIsValid,
    valueChangeHandler: lastnameChangeHandler,
    valueLoseFocusHandler: lastnameLoseFocusHandler,
  } = useInput((lastname) =>{
    return validateNameOrLastname(lastname,3,30);
  });

  const {
    value: password,
    isValid: passwordIsValid,
    valueChangeHandler: passwordChangeHandler,
    valueLoseFocusHandler: passwordLoseFocusHandler,
  } = useInput((password) => {
    return password.length > 6 && password.length < 100;
  });

  const {
    isValid: rePassIsValid,
    valueChangeHandler: rePassChangeHandler,
    valueLoseFocusHandler: rePassLoseFocusHandler,
  } = useInput((rePass) => {
    return rePass === password;
  });

  const formIsValid =
    usernameIsValid && lastnameIsValid && passwordIsValid && rePassIsValid;
  console.log(formIsValid);
  const { sendRequest } = useHttp();

  const submitHandler = (event) => {
    event.preventDefault();
    //https://jsonplaceholder.typicode.com/users
    if (formIsValid) {
      console.log(username, password);
      sendRequest("https://jsonplaceholder.typicode.com/users",{method:'POST'});
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.wrapper}>
        <div className={classes.user_input}>
          <Input
            type="text"
            required={true}
            placeholder="First Name"
            onChange={usernameChangeHandler}
            onBlur={usernameLoseFocusHandler}
          />
        </div>
        <div className={classes.user_input}>
          <Input
            type="text"
            required={true}
            placeholder="Last Name"
            onChange={lastnameChangeHandler}
            onBlur={lastnameLoseFocusHandler}
          />
        </div>
        <div className={classes.user_input}>
          <Input
            type="password"
            required={true}
            placeholder="Password"
            onChange={passwordChangeHandler}
            onBlur={passwordLoseFocusHandler}
          />
        </div>
        <div className={classes.user_input}>
          <Input
            type="password"
            required={true}
            placeholder="Repeat Password"
            onChange={rePassChangeHandler}
            onBlur={rePassLoseFocusHandler}
          />
        </div>
        <div className={classes.submit_btn}>
          <button type="submit" disabled={!formIsValid}>
            Register
          </button>
        </div>
      </div>
    </form>
  );
}

export default Registration;
