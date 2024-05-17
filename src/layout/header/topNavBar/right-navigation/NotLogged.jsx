import React from "react";
import Box from "@mui/material/Box";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";

const NotLogged = () => {
  return (
    <Box>
      
      <NavItem
      buttonSx={{color:"white", m:"0 0.1rem"}}
      sx={{height:"100px"}}
      to={ROUTES.LOGIN} 
      label={"Login Page"}/>
      <NavItem
      buttonSx={{color:"white", m:"0 0.1rem"}}
      sx={{height:"100px"}}
      to={ROUTES.SIGNUP} 
      label={"Signup Page"}/>
        
    </Box>
  );
};

export default NotLogged;