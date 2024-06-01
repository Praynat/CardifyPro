import {
    Card,
    CardActionArea
  } from "@mui/material";

import React from 'react'
import CardImageComponent from "./CardImageComponent";
import CardBodyComponent from "./CardBodyComponent";

import CardActionbar from "./CardActionBar";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import { useDarkLightTheme } from "../../../theme/ThemeProvider";




export default function CardComponent({card,handleCardDelete,handleCardLike,likes}) {
const navigate = useNavigate();
const { theme } = useDarkLightTheme();
const cardStyles = {
  card: {
    width: 250,
    m: 2,
    padding: "10px",
    backgroundColor:theme.secondaryColor,
    borderRadius: "10px",
    border: "solid",
    borderColor:theme.cardBorderColor,
    ':hover': {
      backgroundColor:theme.cardHoverBgColor,
      
      borderColor: theme.cardHoverBorderColor // Changes border color on hover
    },
  },
  cardActionArea: {
    '&:hover': {
        backgroundColor: theme.cardHoverBgColor
    }
}
}

  return (
  <Card sx={cardStyles.card}>
    <CardActionArea onClick={()=> navigate(ROUTES.CARD_INFO + "/" + card._id)} sx={cardStyles.cardActionArea}>
      <CardImageComponent image={card.image}/>
      <CardBodyComponent title={card.title} subtitle={card.subtitle} phone={card.phone} adress ={card.address} cardNumber={card.bizNumber}/>

      </CardActionArea>
    <CardActionbar 
    handleCardDelete={handleCardDelete}
    handleCardLike={handleCardLike}
    cardId={card._id}
    cardUserId={card.user_id}
    likes={likes}
    />
  </Card>
);
}
