import { AuthForm } from "../components/authForm";
import { createAccount } from "../firebase/firebaseSignUp.js";
export function SignUp() {
  return (
    <AuthForm
      formTitle="create account"
      redirectLink="login"
      redirectText="already have an account?"
      firebaseFunc={createAccount}
      submitBntText="create account"
    />
  );
}
