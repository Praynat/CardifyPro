import React from "react";
import Button from "@mui/material/Button";

const FormButton = ({
  variant = "contained",
  component = "button",
  size = "medium",
  color = "primary",
  onClick,
  disabled = false,
  node,
}) => {
  return (
    <Button
      variant={variant}
      component={component}
      size={size}
      color={color}
      onClick={onClick}
      disabled={disabled}
      fullWidth
      sx={{
        '&.Mui-disabled': {
          backgroundColor: '#273758', // Set your desired disabled background color here
          color: '#B2B2B2', // Set your desired disabled text color here
          borderColor:"white"
        },
      }}
    >
      {node}
    </Button>
  );
};

export default FormButton;