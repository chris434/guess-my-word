import { useState } from "React";
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";

import { People, Notifications, Home } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    backgroundColor: "whitesmoke",
    overflow: "scroll",
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
});

export function BottomNavBar() {
  const classes = useStyles();
  const [navValue, setNavValue] = useState("home");

  const navChange = (e, newNavValue) => {
    setNavValue(newNavValue);
  };
  return (
    <BottomNavigation
      className={classes.root}
      onChange={navChange}
      g
      value={navValue}>
      <BottomNavigationAction value="home" label="Words" icon={<Home />} />
      <BottomNavigationAction
        value="friends"
        label="Friends"
        icon={<People />}
      />

      <BottomNavigationAction
        value="Notification"
        label="notification"
        icon={<Notifications />}
      />
    </BottomNavigation>
  );
}
