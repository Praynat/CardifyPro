import React from "react";
import { Box,  useMediaQuery } from "@mui/material";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";
export default function LeftNavBar() {

  const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <Box sx={{display:"flex", alignItems:"center",overflow: 'hidden'}}>        
        
      {matchesMd && (
      
      <>
        <NavItem
          buttonSx={{color:"white", m:"0 1rem"}}
          sx={{height:"100px", backgrounndColor:"red"}}
          to={ROUTES.CARDS} 
          label={"Home"}/>
        
        <NavItem
          buttonSx={{color:"white", m:"0 1rem"}}
          sx={{height:"100px"}}
          to={ROUTES.CARDS} 
          label={"Gallery"}/>
        
        {/* <NavItem
          buttonSx={{color:"white", m:"0 1rem"}}
          sx={{height:"100px"}}
          to={ROUTES.SANDBOX} 
          label={"Sandbox"}/> */}
      
      </>)}
      
    </Box>
  );
}
