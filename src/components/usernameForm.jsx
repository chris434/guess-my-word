import { useRef } from "react";
import { addUser } from "../firebase/firebaseAuth.js";
import { userProviderState } from "../providers/userProvider";
import { Button, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  userNameField: {
    marginBottom: "1rem",
  },
});

export function UsernameForm({ errors, setErrors }) {
  const classes = useStyles();
  const usernameRef = useRef();
  const { setUser } = userProviderState();

  const submitUserName = async (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    if (!username) {
      return setErrors((errors) => {
        return (errors = {
          ...errors,
          usernameError: "user name is required",
        });
      });
    }

    const { usernameError } = await addUser(username);
    if (usernameError) {
      return setErrors((errors) => {
        return (errors = {
          ...errors,
          usernameError,
        });
      });
    }

    setUser((user) => {
      return (user = { ...user, username });
    });
  };
  return (
    <form onSubmit={submitUserName}>
      <TextField
        className={classes.userNameField}
        inputRef={usernameRef}
        error={errors.usernameError ? true : false}
        helperText={errors.usernameError}
        label="username"
        fullWidth={true}
      />

      <Button
        type="submit"
        color="primary"
        variant="contained"
        fullWidth={true}>
        add username
      </Button>
    </form>
  );
}
