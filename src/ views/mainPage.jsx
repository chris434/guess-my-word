import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { signOut, getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.config.js";

export function MainPage() {
  const auth = getAuth(app);
  return (
    <>
      <Stepper alternativeLabel activeStep={1}>
        <Step>
          <StepLabel>verify account</StepLabel>
        </Step>
        <Step>
          <StepLabel>add user name</StepLabel>
        </Step>
      </Stepper>
      <button onClick={() => signOut(auth).then((r) => console.log(r))}>
        logout
      </button>
    </>
  );
}
