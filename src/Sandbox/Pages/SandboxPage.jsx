import { AppBar, Container, Toolbar } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavItem from '../../routes/components/NavItem'

export default function SandboxPage() {
  return (
    <>
    <AppBar position='sticky' color='transparent' elevation={10}>
      <Toolbar sx={{alignContent:"center"}}>
        <NavItem to='counter' label={"Counter"} sx={{color:"black"}}/>
        <NavItem to='lifeCycle' label={"Life Cycle"} sx={{color:"black"}}/>
        <NavItem to='Countries' label={"Countries"} sx={{color:"black"}}/>
        <NavItem to='form' label={"FormExample"} sx={{color:"black"}}/>

      </Toolbar>
    </AppBar>

    <Container sx={{height:"40vh",display:"flex", alignItems:"center", justifyContent:"center"}}>
        <Outlet/>
    </Container>
    </>
  )
}
