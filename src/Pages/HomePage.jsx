import React, {useEffect} from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useScroll } from "../layout/Provider/ScrollProvider";
import CardsFeedback from "../Cards/Components/CardsFeedback";
import useCards from "../Cards/hooks/useCards";
import AddNewCardButton from "../Cards/Components/AddNewCardButton";


export default function HomePage() {

  const { cards,error,isLoading, getAllCards,handleCardDelete,handleCardLike} = useCards();

  const {galleryRef,handleScrollToRef}= useScroll();

  
  useEffect(()=>{
    getAllCards();
  },[getAllCards])

  return (
    <Container sx={{display:"flex", flexDirection:"column" ,alignItems:"center"}}>

      <Typography variant="h1" sx={{fontFamily:"roboto",mt:"120px", fontWeight:"600",fontSize:"66px", color:'white'}}>
          The Ultimate Business Card Hub
      </Typography>
      <Typography variant="h2" color="white" sx={{fontFamily:"Open-Sans",mt:"10px", fontWeight:"100",fontSize:"20px", color:'#D1D5DB'}}>
          Explore Businesses & Highlight Your Own with Custom Card Creation
      </Typography>

      <Box sx={{display:"flex",gap:"20px",mt:"50px",mb:"68px"}}>
        <Button variant="contained" sx={{backgroundColor:'linear-gradient(135deg, #2F80ED, #B2FFDA)', borderRadius:"16px"}} onClick={handleScrollToRef}>Explore</Button>
        <Button variant="contained" sx={{backgroundColor:'linear-gradient(135deg, #2F80ED, #B2FFDA)', borderRadius:"16px"}} >Create</Button>
      </Box>

      <div id="Gallery" ref={galleryRef} style={{paddingTop:"68px",marginTop:"-68px"}}>
        <CardsFeedback
        cards={cards}
        isLoading={isLoading}
        error={error}
        handleCardDelete={handleCardDelete}
        handleCardLike={handleCardLike}
        />
      </div>
        <AddNewCardButton/>
  </Container>
  )
  

}


