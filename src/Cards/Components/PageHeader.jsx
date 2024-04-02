import { Divider, Typography } from '@mui/material'
import React from 'react'

export default function PageHeader({title,subtitle}) {
  return (
    <>
    <Typography variant="h2" component="h1">
        {title}
    </Typography>

    <Divider flexItem sx={{my:"2rem"}}/>

    <Typography variant="h5" component="h2">
        {subtitle}
    </Typography>
    </>
  )
}
