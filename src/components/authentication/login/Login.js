import React, { useRef } from "react";
import Input from "../../../UI/input/Input";
import id from "./Login.module.css";
import registerClasses from "../register/Register.module.css";

function Login(props) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit({
      username:usernameRef.current.value,
      password:passwordRef.current.value,
    })
  };

  return (
    <form className={registerClasses.form_wrapper} id={id.form_wrapper}>
      <h1>
        Travel<span style={{ color: "#F15412" }}>M</span>ore
      </h1>
      <div className={registerClasses.form_section} id={id.form_section}>
        <Input type="text" placeholder="Username" ref={usernameRef} />
        <Input
          type="password"
          placeholder="Password"
          ref={passwordRef}
          id={id.password_inp}
        />
        {!props.isUser===false && <p id={id.errorMsg}>Incorrect Information</p>}
        <button
          type="submit"
          className={registerClasses.submit_btn}
          id={id.submit_btn}
          onClick={submitHandler}
        >
          Login
        </button>
        <button
          className={registerClasses.change_section_btn}
          onClick={() => props.onSectionChange("register")}
        >
          Create new account
        </button>
      </div>
    </form>
  );
}

export default Login;
