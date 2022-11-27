import { useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import { CenterContainer } from "./centerContainer";
import { UsernameForm } from "./usernameForm";
import { VerifyAccount } from "./verifyAccount";
import { userProviderState } from "../providers/userProvider";

const useStyles = makeStyles({
  text: {
    fontSize: "1.5rem",
    textAlign: "center",
    marginBottom: "1rem",
  },
});

export function FinishCreateAccount() {
  const classes = useStyles();
  const STEP_MESSAGES = [
    "please verify your account",
    "A email has been sent to your inbox",
    "add a username",
  ];

  const { user } = userProviderState();
  const [activeStep, setActiveStep] = useState(user.emailVerified ? 1 : 0);
  const [stepMessageIndex, setStepMessageIndex] = useState(
    user.emailVerified ? 2 : 0
  );
  const [errors, setErrors] = useState({
    verifyEmailError: "",
    usernameError: "",
  });

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        <Step>
          <StepLabel>verify account</StepLabel>
        </Step>
        <Step>
          <StepLabel>add user name</StepLabel>
        </Step>
      </Stepper>
      <hr />
      <CenterContainer>
        <Typography className={classes.text}>
          {STEP_MESSAGES[stepMessageIndex]}
        </Typography>
        {stepMessageIndex < 2 ? (
          <VerifyAccount
            setActiveStep={setActiveStep}
            setStepMessageIndex={setStepMessageIndex}
            errors={errors}
            setErrors={setErrors}
          />
        ) : (
          <UsernameForm errors={errors} setErrors={setErrors} />
        )}
      </CenterContainer>
    </div>
  );
}
