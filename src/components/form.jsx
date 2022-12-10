import { useState, useContext, createContext, useRef } from "react";
import { TextField as MUITextField } from "@material-ui/core";

const ErrorContext = createContext(null);

export function Form({ children, fieldCheck, dbCheck, returnResult, fields }) {
  const formatErrors = fields.reduce(
    (obj, field) => {
      return { ...obj, [field]: "" };
    },
    { hasError: false }
  );

  const [errors, setErrors] = useState(formatErrors);
  const onSubmit = async (e) => {
    e.preventDefault();
    fieldCheck();
    dbCheck();
    returnResult();
  };
  return (
    <ErrorContext.Provider value={{ errors, setErrors }}>
      <form onSubmit={onSubmit}>{children}</form>
    </ErrorContext.Provider>
  );
}

export function UseTextField(label) {
  const { errors, setErrors } = useContext(ErrorContext);
  const inputRef = useRef();

  const validateInput = (cb) => {
    const word = inputRef.current.value;
    if (!word) return setErrors(`${errors[label]} is required`);

    const error = cb(word);
    if (error) return setErrors(`${label} ${errors[label]}`);

    setErrors("");
  };
  return {
    TextFieldData: { inputRef, label },
    validateInput,
  };
}

export function TextField({ inputRef, label }) {
  const { errors } = useContext(ErrorContext);
  return (
    <MUITextField
      error={Boolean(errors[label])}
      helperText={errors[label]}
      inputRef={inputRef}
      label={label}
      fullWidth
    />
  );
}
