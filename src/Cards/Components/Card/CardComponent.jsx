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

export default function CardComponent({card,handleCardDelete,handleCardLike}) {
const navigate = useNavigate();

  return (
  <Card sx={{ width: 250, m: 2 }}>
    <CardActionArea onClick={()=> navigate(ROUTES.CARD_INFO + "/" + card._id)}>
      <CardImageComponent image={card.image}/>
      <CardBodyComponent title={card.title} subtitle={card.subtitle} phone={card.phone} adress ={card.address} cardNumber={card.bizNumber}/>
    </CardActionArea>

    <CardActionbar 
    handleCardDelete={handleCardDelete}
    handleCardLike={handleCardLike}
    cardId={card._id}
    />
  </Card>
);
}
