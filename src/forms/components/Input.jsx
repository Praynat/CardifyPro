import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { makeFirstLetterCapital } from "../utils/algoMethods";

const Input = ({ variant = "outlined", type = "text", name, data, label, required = true, error, onChange,rows,multiline=false, ...rest }) => {
  return (
    <Grid item xs={12}>
      <TextField
        variant={variant}
        label={makeFirstLetterCapital(label)}
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
        rows={rows}
        multiline={multiline}
        sx={{ 
          backgroundColor: '#1F2937', // Set your desired background color here
          '& .MuiInputBase-input': {
            color: 'white', // Set input text color
          },
          '& .MuiInputLabel-root': {
            color: '#B2B2B2', // Set label text color 
          },
          '& .MuiFormHelperText-root': {
            color: '#B2B2B2', // Set helper text color
          },
          
          
        }}
        {...rest}
      />
    </Grid>
  );
};

export default Input;