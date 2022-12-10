import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button, makeStyles } from "@material-ui/core";
import { CenterContainer } from "../components/centerContainer";
import { Select } from "../components/select";
import { TextField, UseTextField, UseError } from "../components/input";
import { createGame } from "../firebase/firebaseGame.js";

const useStyles = makeStyles({
  title: {
    fontSize: "1.5rem",
  },
  margin: {
    marginBottom: "1.5rem",
  },
});
export function CreateWord() {
  const selectRef = useRef();
  const inputRef = useRef();
  const navigateTo = useNavigate();
  const classes = useStyles();
  const { errors, changeError } = UseError({ word: "" });
  const { validateInput } = UseTextField("word", changeError);

  const postWord = async (e) => {
    e.preventDefault();
    const hasError = validateInput(inputRef, (word) => {
      if (word.length === 1) return "must be two Character or over";
      if (word.match(/^\d/)) return "must not start with a number";
    });

    if (!hasError) {
      const id = await createGame(
        inputRef.current.value,
        selectRef.current.value
      );
      navigateTo(`/game/${id}`);
    }
  };
  return (
    <CenterContainer>
      <Typography className={classes.title} variant="h2" align="center">
        create word
      </Typography>

      <form onSubmit={postWord}>
        <TextField label="word" inputRef={inputRef} errors={errors} />
        <Select
          selectRef={selectRef}
          label="privacy"
          defaultValue="public"
          values={["public", "friends only"]}
        />
        <Button
          className={classes.margin}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth>
          create word
        </Button>
      </form>
    </CenterContainer>
  );
}
