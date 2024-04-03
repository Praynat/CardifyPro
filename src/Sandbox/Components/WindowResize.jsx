import { Card, Divider, Typography } from '@mui/material'
import React from 'react'
import useWindowSize from '../Hooks/windowResize'

export default function WindowResize() {
    const{windowWidth,windowHeight}=useWindowSize();
  return (
    <>
        <Card sx={{mt:"4rem",p:"2rem 2rem",borderRadius:"1rem"}}>
            <Typography>
                The width of the window is:{windowWidth}
            </Typography>
            <Divider/>
            <Typography>
                The height of the window is:{windowHeight}
            </Typography>
        </Card>
    </>
  )
}

