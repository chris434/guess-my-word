import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { FinishCreateAccount } from "../components/finishCreateAccount";
import { userProviderState } from "../providers/userProvider";

export function MainPage() {
  const { user } = userProviderState();
  const navigateTo = useNavigate();

  const createWord = () => {
    navigateTo("/createWord");
  };
  return (
    <>
      {!user.emailVerified || !user.username ? (
        <FinishCreateAccount />
      ) : (
        <main style={{ padding: "1.5rem" }}>
          <Button onClick={createWord} color="primary" variant="contained">
            <Add />
            create word
          </Button>
        </main>
      )}
    </>
  );
}
