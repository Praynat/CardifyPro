import { useTheme } from '@emotion/react';
import { Box, IconButton, Typography } from '@mui/material';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import React from 'react'

export default function RightSide() {
    const { isDark, toggleDarkMode } = useTheme();
  return (
    
    <Box sx={{display:"flex", alignItems:"center",m:"0.01rem"}}>
    <Typography variant="body1" color="white">&copy;2024 CardifyPro</Typography>
    <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
    </Box>
  )
}
