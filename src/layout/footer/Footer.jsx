import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import React from 'react'
import StyleIcon from '@mui/icons-material/Style';
import Info from '@mui/icons-material/Info';
import ROUTES from '../../routes/routesModel';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <Paper 
    elevation={3}
    sx={{position:"sticky", bottom:"0",left:"0",right:"0"}}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction label="About" icon={<Info/>} onClick={() => navigate(ROUTES.ABOUT)}/>
        <BottomNavigationAction label="Cards" icon={<StyleIcon/>} onClick={() => navigate(ROUTES.CARDS)}/>
      </BottomNavigation>
    </Paper>
  )
}
