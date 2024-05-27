import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useCards from '../hooks/useCards';
import Spinner from '../../Sandbox/Components/Spinner';
import Error from '../../Sandbox/Components/Error';

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    mt: "68px",
  },
  header: {
    fontFamily: "roboto",
    fontWeight: "550",
    fontSize: "48px",
    marginBottom: "30px",
    color: 'white',
  },
  subHeader: {
    fontFamily: "roboto",
    fontWeight: "100",
    fontSize: "12px",
    marginBottom: "30px",
    color: 'white',
  },
  text:{
    fontFamily: "roboto",
    fontWeight: "100",
    fontSize: "12px",
    marginBottom: "30px",
    color: 'white',
  },
  boldText:{
    fontFamily: "roboto",
    fontWeight: "100",
    fontSize: "12px",
    marginBottom: "30px",
    color: 'white',
  },
};

export default function CardsPageDetails() {
  const { id } = useParams();
  const { card, error, isLoading, getCardById } = useCards();

  useEffect(() => {
    getCardById(id);
  }, [id, getCardById]);

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  console.log(card);

  return (
    <Container sx={styles.container}>
     <Grid container>

      <Grid item xs={12} sm={5}>
       <Box sx={{ height: "400px", width: "600px", backgroundColor: "white", borderRadius: "10px" }}>
            <img
              src={card.image.url}
              alt="Description"
              style={{ width: '100%', height: '100%', borderRadius: '10px' }}
            />
          </Box>
       </Grid>

       <Grid item xs={12} sm={7} >
        <Typography variant="h1" sx={styles.header}>
        {card.title}
        </Typography>
        
        <Typography sx={styles.subHeader}>
        {card.subtitle}
        </Typography>
        <Typography sx={styles.text}>
         Business description: {card.description}
        </Typography>
        <Typography sx={styles.text}>
         Telephone: {card.phone}
        </Typography>
        <Typography sx={styles.text}>
         Email: {card.email}
        </Typography>
        <Typography sx={styles.text}>
         Address: {card.address.houseNumber+" "+card.address.street+" "+card.address.city+" "+card.address.country+" "}
        </Typography>
       </Grid>

       
     </Grid>
    </Container>
  );
}
