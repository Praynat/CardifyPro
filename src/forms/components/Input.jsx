import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { makeFirstLetterCapital } from "../utils/algoMethods";

const Input = ({ variant = "outlined", type = "text", name, data, label, required = true, error, onChange, ...rest }) => {
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
        sx={{ 
          backgroundColor: '#1F2937', // Set your desired background color here
          '& .MuiInputBase-input': {
            color: 'white', // Set input text color
          },
          '& .MuiInputLabel-root': {
            color: '#B2B2B2', // Set label text color
          },
          '& .MuiFormHelperText-root': {
            color: 'white', // Set helper text color
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'gray', // Border color when not focused
            },
            '&:hover fieldset': {
              borderColor: 'darkgray', // Border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: 'darkgray', // Border color when focused
            },
          },
          
        }}
        {...rest}
      />
    </Grid>
  );
};

export default Input;