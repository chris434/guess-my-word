import { useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UseCreateAccount } from "../hooks/useErrorHandler";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/box";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  field: {
    display: "block",
    marginBottom: "1.5rem",
  },
  formTitle: {
    fontSize: "2rem",
  },
  formContainer: {
    width: "50%",
    boxShadow: "0 35px 20px #777",
    padding: "2rem",
    ["@media (max-width:650px)"]: {
      width: "100%",
    },
  },
  alert: {
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
  },
  marginBottom: {
    marginBottom: "1.5rem",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
  },
});

export function AuthForm({
  formTitle,
  redirectText,
  redirectLink,
  firebaseFunc,
  submitBntText,
}) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const classes = useStyles();
  const { pathname: path } = useLocation();
  const navigateTo = useNavigate();
  const { errors, errorHandler } = UseCreateAccount(firebaseFunc, path);

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const data = await errorHandler(email, password);

    if (data.user) {
      navigateTo("/");
    }
  };

  return (
    <Box className={classes.box}>
      <Box className={classes.formContainer}>
        <Typography variant="h2" align="center" className={classes.formTitle}>
          {formTitle}
        </Typography>

        {errors?.multi ? (
          <Alert className={classes.alert} severity="error">
            {errors.multi}
          </Alert>
        ) : null}

        <form>
          <TextField
            inputRef={emailRef}
            className={classes.field}
            id="email"
            error={errors.email ? true : false}
            label="email"
            helperText={errors.email}
            fullWidth={true}
          />
          <TextField
            inputRef={passwordRef}
            className={classes.field}
            id="password"
            error={errors.password ? true : false}
            label="password"
            type="password"
            fullWidth={true}
            helperText={errors.password}
          />
          {path === "/login" ? (
            <div className={classes.marginBottom}>
              <Typography variant="inherit">forgot password?</Typography>
              <Link to="/reset-password"> reset password</Link>
            </div>
          ) : null}
          <Button
            className={classes.field}
            color="primary"
            variant="contained"
            type="submit"
            fullWidth={true}
            onClick={onSubmit}>
            {submitBntText}
          </Button>
        </form>
        <Typography variant="inherit">{redirectText} </Typography>
        <Link to={`/${redirectLink}`}>{redirectLink}</Link>
      </Box>
    </Box>
  );
}
