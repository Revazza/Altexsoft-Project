import React, { useEffect, useState } from 'react';

function useInput(validateFunction) {

  const [value,setValue] = useState('');
  const [isTouched,setIsTouched] = useState(false);

  const isValid = validateFunction(value);
  const hasErrors = !isValid && isTouched;

  const valueChangeHandler = (event) =>{
    setValue(event.target.value);
  }

  const valueLoseFocusHandler = () =>{
    setIsTouched(true);
  }


  return {
    value,
    isValid,
    hasErrors,
    valueChangeHandler,
    valueLoseFocusHandler,
  }
}

export default useInput;
