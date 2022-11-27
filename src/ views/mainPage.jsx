import { signOut, getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.config.js";
import { FinishCreateAccount } from "../components/finishCreateAccount";
import { userProviderState } from "../providers/userProvider";

export function MainPage() {
  const auth = getAuth(app);
  const { user } = userProviderState();
  console.log(user);
  return (
    <>
      {!user.emailVerified || !user.username ? (
        <FinishCreateAccount />
      ) : (
        <div>welcome</div>
      )}
      <button onClick={() => signOut(auth).then((r) => console.log(r))}>
        logout
      </button>
    </>
  );
}
