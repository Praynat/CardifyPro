import React, { useEffect } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useScroll } from "../layout/Provider/ScrollProvider";
import CardsFeedback from "../Cards/Components/CardsFeedback";
import useCards from "../Cards/hooks/useCards";
import AddNewCardButton from "../Cards/Components/AddNewCardButton";
import { useMyUser } from "../users/providers/UserProvider";
import {useNavigate } from "react-router-dom";
import ROUTES from "../routes/routesModel";
import { useDarkLightTheme } from "../theme/ThemeProvider";
import homePageStyle from "../style/homePageStyle";



export default function HomePage() {
  const { cards, error, isLoading, getAllCards, handleCardDelete, handleCardLike } = useCards();
  const { galleryRef, handleScrollToRef } = useScroll();
  const {user}=useMyUser();
  const navigate= useNavigate();
  
  const { theme } = useDarkLightTheme();
  const styles = homePageStyle(theme);

  const handleCreate=()=>{
    if (user) {
      navigate(ROUTES.CREATE_CARD)
    } else {
      navigate(ROUTES.LOGIN)
    }
  };
  
  useEffect(() => {
    getAllCards();
  }, [getAllCards]);
  
  return (
    <Container sx={styles.container}>
      <Typography variant="h1" sx={styles.header}>
        The Ultimate Business Card Hub
      </Typography>
      <Typography variant="h2" sx={styles.subHeader}>
        Explore Businesses & Highlight Your Own with Custom Card Creation
      </Typography>

      <Box sx={styles.buttonContainer}>
        <Button variant="contained" sx={styles.button} onClick={handleScrollToRef}>Explore</Button>
        <Button variant="contained" sx={styles.button} onClick={handleCreate}>Create</Button>
      </Box>

      <div id="Gallery" ref={galleryRef} style={styles.gallery}>
        <CardsFeedback
          cards={cards}
          isLoading={isLoading}
          error={error}
          handleCardDelete={handleCardDelete}
          handleCardLike={handleCardLike}
        />
      </div>
      <AddNewCardButton />
    </Container>
  );
}
