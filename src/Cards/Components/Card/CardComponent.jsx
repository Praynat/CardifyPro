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

const cardStyles = {
  card: {
    width: 250,
    m: 2,
    padding: "10px",
    backgroundColor: "#1F2937",
    borderRadius: "10px",
    border: "solid #9CA3AF",
    ':hover': {
      boxShadow: 6, // Adds a shadow effect on hover
      borderColor: '#D1D5DB' // Changes border color on hover
    },
  },
};

export default function CardComponent({card,handleCardDelete,handleCardLike,likes}) {
const navigate = useNavigate();

  return (
  <Card sx={cardStyles.card}>
    <CardActionArea onClick={()=> navigate(ROUTES.CARD_INFO + "/" + card._id)}>
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
