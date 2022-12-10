import { useState } from "react";
import {
  Select as MUISelect,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
export function Select({ label, defaultValue, values, selectRef }) {
  const { selectedValue, changeValue } = UseSelect(defaultValue);
  return (
    <FormControl id={label} fullWidth>
      <InputLabel id={label}>{label} </InputLabel>
      <MUISelect
        inputRef={selectRef}
        labelId={label}
        id={label}
        value={selectedValue}
        label={label}
        onChange={changeValue}>
        {values.map((value) => {
          return (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          );
        })}
      </MUISelect>
    </FormControl>
  );
}

export function UseSelect(defaultValue) {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const changeValue = (e) => {
    setSelectedValue(e.target.value);
  };
  return { selectedValue, changeValue };
}
