import { useState } from "react";
import {
  Typography,
  AppBar,
  Avatar,
  Box,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import { userProviderState } from "../providers/userProvider";
import { logout } from "../firebase/firebaseAuth.js";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#1976d2",
    flexDirection: "row",
    position: "sticky",
  },
  headerText: {
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: 600,
  },
  avatarButton: {
    padding: 0,
  },
});
export function Header() {
  const [avatarAnchor, setAvatarAnchor] = useState(null);
  const classes = useStyles();
  const { user } = userProviderState();

  const changeMenuState = (e) => {
    setAvatarAnchor(e.currentTarget);
  };
  const closeMenu = () => {
    setAvatarAnchor(null);
  };

  return (
    <AppBar className={classes.root}>
      <Typography className={classes.headerText} variant="h1">
        Guess my word
      </Typography>
      {user ? (
        <Box>
          <Tooltip title="my account">
            <IconButton
              className={classes.avatarButton}
              onClick={changeMenuState}>
              <Avatar src={user.photoURL} />
            </IconButton>
          </Tooltip>
          <Menu
            open={Boolean(avatarAnchor)}
            transformOrigin={{
              vertical: -70,
              horizontal: 0,
            }}
            onClose={closeMenu}
            keepMounted
            anchorEl={avatarAnchor}>
            <MenuItem>my account</MenuItem>
            <MenuItem onClick={logout}>logout</MenuItem>
          </Menu>
        </Box>
      ) : null}
    </AppBar>
  );
}
