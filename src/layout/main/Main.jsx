import { Box } from '@mui/material'
import React from 'react'

export default function Main({children}) {
  return (
    <Box sx={{
        display:"flex",
        flexDirection:"vertical",
        alignItems:"center",
        mt:"68px",
        minHeight:"85vh",
        backgroundColor:"#111827",
        paddingBottom: '68px', // Space for the footer
        }}>
        {children}
    </Box>
  )
}
