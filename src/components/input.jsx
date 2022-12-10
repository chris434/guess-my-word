import { useState } from "React";
import { TextField as MUITextField } from "@material-ui/core";
export function UseTextField(label, changeError) {
  const validateInput = (inputRef, cb) => {
    let hasError = false;
    const word = inputRef.current.value;
    if (!word) return (hasError = changeError(label, `${label} is required`));

    const error = cb(word);
    if (error) return (hasError = changeError(label, `${label} ${error}`));

    changeError(label, "");
    return (hasError = false);
  };
  return { validateInput };
}

export function TextField({ inputRef, label, errors }) {
  console.log(errors);
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

export function UseError(fields) {
  const [errors, setErrors] = useState(fields);
  const changeError = (field, errorValue) => {
    setErrors((errors) => {
      return (errors = { ...errors, [field]: errorValue });
    });
    return true;
  };
  return { errors, changeError };
}
