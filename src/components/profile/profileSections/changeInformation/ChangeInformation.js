import React, { useEffect, useState } from "react";

import classes from "./ChangeInformation.module.css";

import Button from "../../../../UI/Button";
import ValidationInput from "../../../../UI/input/validationInput/ValidationInput";

//that was tough

function ChangeInformation(props) {
  const resetFormClass = `${classes.reset_form} ${props.className}`;
  const update = { ...props.updateInfo };
  const updateBtn = { ...update.button };
  const [newInformation, setNewInformation] = useState({});
  const [hideForm, setHideForm] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const validateRePass = (rePass) => {
    if (newInformation.password !== rePass)
      return { isValid: false, errorMsg: "Passwords don't match" };
    return { isValid: true, errorMsg: "" };
  };

  useEffect(() => {
    for (let key in newInformation) {
      if (newInformation[key].length === 0) {
        setFormIsValid(false);
        return;
      }
    }
    setFormIsValid(true);
  }, [newInformation]);

  const handleUpdateInfo = (event) => {
    event.preventDefault();
    props.onUpdateInfo(newInformation);
  };

  const handleInformationChange = (obj) => {
    let keyword = Object.keys(obj)[0];
    for (let input of update.inputs) {
      if (keyword === input.name && obj[keyword] !== newInformation[keyword]) {
        let newValue = {
          [input.name]: obj[keyword],
        };
        setNewInformation({
          ...newInformation,
          ...newValue,
        });
        break;
      }
    }
  };
  const handleShowForm = () => {
    if (showForm) {
      setHideForm(true);
      setTimeout(() => {
        setShowForm(false);
      }, 400);
      return;
    }
    setHideForm(false);
    setShowForm((prevState) => !prevState);
  };

  return (
    <div className={classes.change_info}>
      <div className={classes.change_wrapper} onClick={handleShowForm}>
        <p>{props.title}</p>
        <img
          src="./assets/list_arrow.png"
          style={{ transform: showForm && "rotate(-90deg)" }}
        />
      </div>
      {showForm && (
        <div
          className={`${resetFormClass} ${hideForm && classes.hide_reset_form}`}
        >
          <form className={classes.form_wrapper}>
            <div className={classes.wrapper}>
              {update.inputs.map((input, index) => {
                return (
                  <ValidationInput
                    key={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    validationFunc={
                      index === 1 ? validateRePass : input.validationFuncion
                    }
                    inputName={input.name}
                    onChangeValue={handleInformationChange}
                    isRequired={true}
                    className={classes.input_class}
                  />
                );
              })}

              <Button
                type={updateBtn.type}
                title={updateBtn.title}
                onClick={handleUpdateInfo}
                className={classes.submit_btn}
                disabled={!formIsValid}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ChangeInformation;
