import React, { useEffect} from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import CardsFeedback from "../Components/CardsFeedback";
import useCards from "../hooks/useCards";
import AddNewCardButton from "../Components/AddNewCardButton";


export default function CardsPage() {

  const { cards,error,isLoading, getAllCards,handleCardDelete,handleCardLike} = useCards();

  useEffect(()=>{
    getAllCards();
  }, [getAllCards]);

  return (
    <Container sx={{display:"flex", flexDirection:"column" ,alignItems:"center"}}>

      <Typography variant="h1" color="white" sx={{fontFamily:"Open-Sans",mt:"120px", fontWeight:"600",fontSize:"66px", marginRight:"2", color:'white'}}>
          The Ultimate Business Card Hub
      </Typography>
      <Typography variant="h2" color="white" sx={{fontFamily:"Open-Sans",mt:"10px", fontWeight:"300",fontSize:"20px", marginRight:"2", color:'white'}}>
          Explore Businesses & Highlight Your Own with Custom Card Creation
      </Typography>

      <Box sx={{display:"flex",gap:"20px",mt:"50px",mb:"68px"}}>
        <Button variant="contained">Explore</Button>
        <Button variant="contained">Create</Button>
      </Box>

      <CardsFeedback 
      cards={cards}
      isLoading={isLoading}
      error={error}
      handleCardDelete={handleCardDelete}
      handleCardLike={handleCardLike}
      />
      <AddNewCardButton/>
  </Container>
  )
  

}


