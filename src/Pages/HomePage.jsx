import React, {useEffect} from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useScroll } from "../layout/Provider/ScrollProvider";
import CardsFeedback from "../Cards/Components/CardsFeedback";
import useCards from "../Cards/hooks/useCards";
import AddNewCardButton from "../Cards/Components/AddNewCardButton";


export default function HomePage() {

  const { cards,error,isLoading, getAllCards,handleCardDelete,handleCardLike} = useCards();

  const {galleryRef,handleScrollToRef,needToScroll,setNeedToScroll}= useScroll();

  
  useEffect(()=>{
    getAllCards();
    if (needToScroll) {
      handleScrollToRef();
    }
    return () => {
      setNeedToScroll(false);
    };
  },[needToScroll,handleScrollToRef,setNeedToScroll,getAllCards])

  return (
    <Container sx={{display:"flex", flexDirection:"column" ,alignItems:"center",mt:"68px"}}>

      <Typography variant="h1" sx={{fontFamily:"Open-Sans",mt:"120px", fontWeight:"600",fontSize:"66px", color:'white'}}>
          The Ultimate Business Card Hub
      </Typography>
      <Typography variant="h2" color="white" sx={{fontFamily:"Open-Sans",mt:"10px", fontWeight:"300",fontSize:"20px", color:'white'}}>
          Explore Businesses & Highlight Your Own with Custom Card Creation
      </Typography>

      <Box sx={{display:"flex",gap:"20px",mt:"50px",mb:"68px"}}>
        <Button variant="contained" onClick={handleScrollToRef}>Explore</Button>
        <Button variant="contained" >Create</Button>
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


