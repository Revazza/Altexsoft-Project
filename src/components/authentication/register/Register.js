import React, { useState } from "react";
import classes from "./Register.module.css";
import ValidationInput from "../../../UI/input/validationInput/ValidationInput";
import {
  validateNameOrLastname,
  validatePassword,
  validateUsername,
  validateEmail,
} from "../../../helperFunctions/HelperFunctions";
import Button from "../../../UI/Button";

function Register(props) {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [image, setImage] = useState(null);

  const handleInputValueChange = (obj) => {
    let keyName = Object.keys(obj)[0];
    let value = obj[keyName];
    if (keyName === "firstName") setFirstName(value);
    else if (keyName === "lastName") setLastName(value);
    else if (keyName === "username") setUsername(value);
    else if (keyName === "email") setEmail(value);
    else if (keyName === "password") setPassword(value);
    else setRePassword(value);
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    let newUser = {
      firstName,
      lastName,
      username,
      email,
      password,
      image,
    };
    props.onSubmit(newUser);
  };

  const validateRePass = (rePass) => {
    if (password !== rePass)
      return { isValid: false, errorMsg: "Passwords don't match" };
    return { isValid: true, errorMsg: "" };
  };

  const fileChangeHandler = (event) => {
    console.log(event.target.files[0]);
    let img = event.target.files[0];
    setImage(URL.createObjectURL(img));
  };

  const formIsValid =
    username.length !== 0 &&
    lastName.length !== 0 &&
    password.length !== 0 &&
    firstName.length !== 0 &&
    rePassword.length !== 0 &&
    email.length !== 0 &&
    image !== null;

  return (
    <form className={classes.form_wrapper} onSubmit={handleSubmission}>
      <div className={classes.form_section}>
        <h1>
          Travel<span style={{ color: "rgb(24, 160, 251)" }}>M</span>ore
        </h1>
        <div className={classes.input_wrapper}>
          <ValidationInput
            type="text"
            placeholder="First Name"
            validationFunc={validateNameOrLastname}
            inputName="firstName"
            onChangeValue={handleInputValueChange}
            isRequired={true}
          />
        </div>
        <div className={classes.input_wrapper}>
          <ValidationInput
            type="text"
            placeholder="Last Name"
            validationFunc={validateNameOrLastname}
            inputName="lastName"
            onChangeValue={handleInputValueChange}
            isRequired={true}
          />
        </div>
        <div className={classes.input_wrapper}>
          <ValidationInput
            type="text"
            placeholder="Username"
            validationFunc={validateUsername}
            inputName="username"
            onChangeValue={handleInputValueChange}
            isRequired={true}
          />
        </div>
        <div className={classes.input_wrapper}>
          <ValidationInput
            type="email"
            placeholder="Email"
            validationFunc={validateEmail}
            inputName="email"
            onChangeValue={handleInputValueChange}
            isRequired={true}
          />
        </div>
        <div className={classes.input_wrapper}>
          <ValidationInput
            type="password"
            placeholder="Password"
            validationFunc={validatePassword}
            inputName="password"
            onChangeValue={handleInputValueChange}
            isRequired={true}
          />
        </div>
        <div className={classes.input_wrapper}>
          <ValidationInput
            type="password"
            placeholder="Repeat Password"
            validationFunc={validateRePass}
            inputName="rePassword"
            onChangeValue={handleInputValueChange}
            isRequired={true}
          />
        </div>
        <div className={classes.input_wrapper} id={classes.fileWrapper}>
          <label>Upload Your Photo</label>
          <input type="file" onChange={fileChangeHandler} required={true} />
        </div>
        <div className={classes.register_btn}>
          {props.isRegistered && <p>Account is already registered</p>}
          <Button
            type="submit"
            disabled={!formIsValid}
            className={classes.submit_btn}
            title='Register'
          />
          <button
            type="button"
            className={classes.change_section_btn}
            onClick={() => props.onSectionChange("login")}
          >
            Already Have Account?
          </button>
        </div>
      </div>
    </form>
  );
}

export default Register;
