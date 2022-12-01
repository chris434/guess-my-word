import { Box, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import { userProviderState } from "../providers/userProvider";
import { logout } from "../firebase/firebaseAuth.js";
const useStyles = makeStyles({
  headerText: {
    color: "#fff",
    fontSize: "1.5rem",
  },
  headerContainer: {
    position: "sticky",
    top: 0,
    width: "100%",
    zIndex: "1400",
  },
  logoutBNT: {
    backgroundColor: "red",
    border: "2px red solid",
    color: "white",
    "&:hover": {
      backgroundColor: "transparent",
      border: "2px red solid",
    },
  },
});
export function Header() {
  const classes = useStyles();
  const { user } = userProviderState();

  return (
    <Box className={classes.headerContainer}>
      <header style={{ backgroundColor: "#3f51b5" }}>
        <Typography className={classes.headerText} variant="h1">
          Guess my word
        </Typography>

        {user ? (
          <Button className={classes.logoutBNT} onClick={logout}>
            logout
          </Button>
        ) : null}
      </header>
    </Box>
  );
}
