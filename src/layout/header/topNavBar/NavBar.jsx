import React from 'react'
import LeftNavBar from './left-navigation/LeftNavBar'
import { AppBar, Grid, Toolbar } from '@mui/material'
import RightNavBar from './right-navigation/RightNavBar'
import { MenuProvider } from './Menu/MenuProvider'
import Logo from './Logo/Logo'

export default function NavBar() {
  return (
    <MenuProvider>
      <AppBar sx={{position:'fixed !important' ,top:"0 !important", backgroundColor:"#1F2937", height:"68px"}} elevation={10}>
        <Toolbar sx={{justifyContent:"space-between", alignContent:"center"}}>
          <Grid container 
                justifyContent="space-between"
                alignItems="center">
            <Grid item xs={5} zeroMinWidth >
              <LeftNavBar noWrap/>
            </Grid>
            <Grid item xs={2}>
              <Logo/>
            </Grid>
            <Grid item xs={5} sx={{display:"flex", justifyContent:"flex-end"}}>
              <RightNavBar/>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </MenuProvider>
  )
}
