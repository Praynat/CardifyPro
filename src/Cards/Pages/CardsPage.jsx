import React, {useEffect} from "react";
import { Container, Typography } from "@mui/material";
import CardsFeedback from "../Components/CardsFeedback";
import useCards from "../hooks/useCards";
import AddNewCardButton from "../Components/AddNewCardButton";
import { useScroll } from "../../layout/Provider/ScrollProvider";
import { useDarkLightTheme } from "../../theme/ThemeProvider";


export default function CardsPage() {

  const { cards,error,isLoading, getAllCards,handleCardDelete,handleCardLike} = useCards();

  const {galleryRef,handleScrollToRef,needToScroll,setNeedToScroll}= useScroll();
  const { theme } = useDarkLightTheme();

  
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

<Typography variant="h1" sx={{fontFamily:"roboto", fontWeight:"550",fontSize:"48px", marginBottom:"30px", color:theme.strongTextColor}}>
          Gallery
      </Typography>

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


