import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const Input = ({ variant = "outlined", type = "text", name, data, label, required = true, error, onChange, ...rest }) => {
  return (
    <Grid item xs={12}>
      <TextField
        variant={variant}
        label={label}
        type={type}
        id={name}
        name={name}
        value={data[name] ? data[name] : ""}
        required={required}
        helperText={error}
        error={Boolean(error)}
        onChange={onChange}
        fullWidth
        autoComplete="off"
        {...rest}
      />
    </Grid>
  );
};

export default Input;