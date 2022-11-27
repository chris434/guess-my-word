import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { userProviderState } from "../providers/userProvider";
import { verifyEmail, emailHasBeenVerified } from "../firebase/firebaseAuth.js";

export function VerifyAccount({
  setActiveStep,
  setStepMessageIndex,
  errors,
  setErrors,
}) {
  const { setUser } = userProviderState();
  const IncrementStepMessageIndex = () => {
    setStepMessageIndex((value) => {
      return (value = value + 1);
    });
  };

  const nextStep = async () => {
    const verifiedEmail = await emailHasBeenVerified();

    if (verifiedEmail) {
      setActiveStep(1);
      setUser((user) => {
        return (user = { ...user, emailVerified: true });
      });
      return IncrementStepMessageIndex();
    }
    setErrors((errors) => {
      return (errors = {
        ...errors,
        verifyEmailError: "pleases verify your account",
      });
    });
  };

  return (
    <>
      <Button
        color="primary"
        variant="contained"
        fullWidth={true}
        onClick={() => {
          IncrementStepMessageIndex();
          verifyEmail();
        }}>
        verify account
      </Button>
      <Typography color="error">{errors.verifyEmailError}</Typography>
      <Typography align="center">next step</Typography>
      <Button
        color="primary"
        variant="contained"
        fullWidth={true}
        onClick={nextStep}>
        add username
      </Button>
    </>
  );
}
