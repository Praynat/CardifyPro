import React from 'react'
import NavItem from '../../../routes/components/NavItem'
import ROUTES from '../../../routes/routesModel'
import { Box } from '@mui/material'

export default function LeftSide() {
    
  return (
    <Box>
    <NavItem
          buttonSx={{color:"white", m:"0 0.01rem"}}
          sx={{height:"100px"}}
          to={ROUTES.ABOUT} 
          label={"About us"}/>
      <NavItem
          buttonSx={{color:"white", m:"0 0.01rem"}}
          sx={{height:"100px"}}
          to={ROUTES.CONTACT} 
          label={"Contact us"}/>
    </Box>
  )
}
