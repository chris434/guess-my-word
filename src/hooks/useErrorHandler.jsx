import { useState } from "react";
import { emailRegex } from "../helpers/regex.js";

export function UseCreateAccount(firebaseFunc, path) {
  const [errors, setErrors] = useState({});
  const targetPath = "/sign-up";
  let hasError = false;

  const addError = (key, value) => {
    setErrors((errors) => {
      return { ...errors, [key]: value };
    });
    hasError = true;
  };

  const errorHandler = async (email, password) => {
    setErrors({ email: "", password: "" });
    if (!email) {
      addError("email", "email is required");
    }
    if (!emailRegex.test(email) && email.length >= 1 && path === targetPath) {
      addError("email", "invalid email");
    }

    if (!password) {
      addError("password", "password is required");
    }
    if (password.length < 6 && password.length >= 1 && path === targetPath) {
      addError("password", "password must be at least 6 characters");
    }

    if (!hasError) {
      const { error: firebaseErrors, user } = await firebaseFunc(
        email,
        password
      );
      console.log(firebaseErrors);
      setErrors((errors) => {
        return { ...errors, ...firebaseErrors };
      });
      return { user };
    }
    return { user: null };
  };
  return { errors, errorHandler };
}
