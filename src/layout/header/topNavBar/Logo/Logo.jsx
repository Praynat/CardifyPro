import {  Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import NavBarLink from '../../../../routes/components/NavBarLink'
import ROUTES from '../../../../routes/routesModel'
import { FiLayers } from "react-icons/fi";

export default function Logo() {
  return (
    <NavBarLink to={ROUTES.CARDS}>

      <Box sx={{margin:"1rem", display:"flex", alignItems:"center"}}>
        <IconButton>
              <FiLayers color='white'/>
        </IconButton>

          <Typography variant='h4'  sx={{
            fontFamily:"Open-Sans", fontWeight:"600",fontSize:"22px", marginRight:"2", color:'white', textDecoration:"none" , 
          }}>
          CardifyPro
          </Typography>
      </Box>

   </NavBarLink>
  )
}
