import React from 'react'
import NavBarLink from './NavBarLink'
import { Button, Typography } from '@mui/material'

export default function NavItem({to,sx,label,buttonSx}) {
  return (
    <NavBarLink to={to} sx={{display:"flex",alignItems:"center",...sx}}>
        <Button variant='default' color='inherit' sx={{color:"black",...buttonSx}}> 
            <Typography>
                {label}
            </Typography>
        </Button>
    </NavBarLink>
  )
}
