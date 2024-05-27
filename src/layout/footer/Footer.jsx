import {  Paper } from '@mui/material'
import React from 'react'

import LeftSide from './left-side/LeftSide';
import RightSide from './right-side/RightSide';

export default function Footer() {
  
  return (
    <Paper 
    elevation={3}
    sx={{position:"fixed", bottom:"0",left:"0",right:"0",width:"100%",backgroundColor:"#1F2937", height:"68px",display:"flex",alignItems:"center",justifyContent:"space-between"}}
    >
      
      <LeftSide/>
      <RightSide/>
      
    </Paper>
  )
}
