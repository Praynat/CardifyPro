import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useMenu } from "../Menu/MenuProvider";



const MoreButton = () => {
  const setOpen = useMenu();
  return (
    <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
      <IconButton
        onClick={() => setOpen(true)}
        size="large"
        color="inherit"
        aria-label="menu"
        sx={{ display: { xs: "inline-flex", md: "none" } }}
      >
        <MenuIcon /> 
      </IconButton>
    </Box>
  );
};

export default MoreButton;