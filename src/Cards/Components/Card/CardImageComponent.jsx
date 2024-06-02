

import { CardMedia } from "@mui/material";
import React from "react";

export default function CardHeaderComponent({ image }) {

  const defaultImage="/CardsTemp.png"

  return (
    <CardMedia 
    component="img" 
    height="140" 
    image={image.url} 
    alt={image.alt} 
    sx={{borderRadius:"inherit",}}
    onError={({ currentTarget }) => {
      currentTarget.onerror = null; // prevents looping
      currentTarget.src = defaultImage;
    }} />
  );
}