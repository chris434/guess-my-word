import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  innerContainer: {
    width: "50%",
    boxShadow: "0 35px 20px #777",
    padding: "2rem",
    ["@media (max-width:650px)"]: {
      width: "100%",
    },
  },

  outerContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
  },
});
export function CenterContainer({ children }) {
  const classes = useStyles();
  return (
    <Box className={classes.outerContainer}>
      <Box className={classes.innerContainer}>{children}</Box>
    </Box>
  );
}
