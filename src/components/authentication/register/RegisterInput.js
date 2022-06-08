import React, { useEffect } from "react";
import classes from "./RegisterInput.module.css";
import useInput from "../../../hooks/useInput";
import Input from "../../../UI/input/Input";

function RegisterInput(props) {
  const { value, input, hasErrors, valueChangeHandler, valueLoseFocusHandler } =
    useInput((value) => {
      return props.validationFunc(value, props.inputName);
    });

  useEffect(() => {
    if (input.isValid) {
      props.onChangeValue({ [props.inputName]: value });
    } else {
      props.onChangeValue({ [props.inputName]:''});
    }
  }, [value, input]);

  return (
    <React.Fragment>
      <Input
        type={props.type}
        placeholder={props.placeholder}
        onChange={valueChangeHandler}
        onBlur={valueLoseFocusHandler}
        className={hasErrors && `${classes.error}`}
        required={props.isRequired}
      />
      {hasErrors && <p id={classes.errorMsg}>*{input.errorMsg}</p>}
    </React.Fragment>
  );
}

export default RegisterInput;
