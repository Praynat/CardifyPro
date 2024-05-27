import { CardMedia } from '@mui/material'
import React from 'react'

export default function CardHeaderComponent({image}) {
  const defaultImage="/Assets/Images/Cards/CardsTemp.png"
  return (
    <CardMedia 
        component="img"
        height="140"
        image={image?.url || defaultImage}
        alt={image.alt}
        sx={{borderRadius:"inherit"}}
    />
  )
}
