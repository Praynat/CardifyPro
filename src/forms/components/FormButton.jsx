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
        mb:"10px",
        '&.Mui-disabled': {
          backgroundColor: '#273758', // Set your desired disabled background color here
          color: '#B2B2B2', // Set your desired disabled text color here
          border:"solid #8e8e8e 0.1px"
        },
      }}
    >
      {node}
    </Button>
  );
};

export default FormButton;