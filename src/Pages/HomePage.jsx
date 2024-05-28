import React, { useEffect } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useScroll } from "../layout/Provider/ScrollProvider";
import CardsFeedback from "../Cards/Components/CardsFeedback";
import useCards from "../Cards/hooks/useCards";
import AddNewCardButton from "../Cards/Components/AddNewCardButton";
import { useMyUser } from "../users/providers/UserProvider";
import { Navigate, useNavigate } from "react-router-dom";
import ROUTES from "../routes/routesModel";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    fontFamily: "roboto",
    mt: "120px",
    fontWeight: "600",
    fontSize: "66px",
    color: 'white',
  },
  subHeader: {
    fontFamily: "Open-Sans",
    mt: "10px",
    fontWeight: "100",
    fontSize: "20px",
    color: '#F0F0F0',
  },
  buttonContainer: {
    display: "flex",
    gap: "20px",
    mt: "50px",
    mb: "68px",
  },
  button: {
    backgroundColor: 'linear-gradient(135deg, #2F80ED, #B2FFDA)',
    borderRadius: "16px",
  },
  gallery: {
    paddingTop: "68px",
    marginTop: "-68px",
  },
};

export default function HomePage() {
  const { cards, error, isLoading, getAllCards, handleCardDelete, handleCardLike } = useCards();
  const { galleryRef, handleScrollToRef } = useScroll();
  const {user}=useMyUser();
  const navigate= useNavigate();
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
