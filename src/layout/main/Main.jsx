import { Box } from '@mui/material'
import React from 'react'

export default function Main({children}) {
  return (
    <Box sx={{
        display:"flex",
        flexDirection:"vertical",
        alignItems:"center",
        mt:"68px",
       height:"100vh",
        backgroundColor:"#111827",
        paddingBottom:{xs:"500px",sm:"200px"} , // Space for the footer
        }}>
        {children}
    </Box>
  )
}
