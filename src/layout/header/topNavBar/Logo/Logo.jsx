import { Box, Typography } from '@mui/material'
import React from 'react'
import NavBarLink from '../../../../routes/components/NavBarLink'
import ROUTES from '../../../../routes/routesModel'

export default function Logo() {
  return (
   <Box sx={{margin:"1rem"}}>
   <NavBarLink to={ROUTES.CARDS}>
    <Typography variant='h4' sx={{
      fontFamily:"fantasy", marginRight:"2", color:'black'
    }}>
     BCard
    </Typography>
   </NavBarLink>
   </Box>
  )
}
