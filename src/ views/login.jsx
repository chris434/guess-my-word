import { AuthForm } from "../components/authForm";
import { login } from "../firebase/firebaseSignUp.js";
export function Login() {
  return (
    <AuthForm
      formTitle="Login"
      redirectLink="sign-up"
      redirectText="don't have account?"
      firebaseFunc={login}
      submitBntText="login"
    />
  );
}
