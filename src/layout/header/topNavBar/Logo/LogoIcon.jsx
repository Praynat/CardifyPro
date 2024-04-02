import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import NavBarLink from '../../../../routes/components/NavBarLink'
import ROUTES from '../../../../routes/routesModel'

export default function LogoIcon() {
  return (
   <>
   <NavBarLink to={ROUTES.CARDS}>
      <IconButton>
        <Avatar src='/Assets/Images/Logo/BusinessCard.png' alt='Business Card Icon'/>
      </IconButton>
   </NavBarLink>
   </>
  )
}
