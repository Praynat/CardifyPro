import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useCards from '../hooks/useCards';
import Spinner from '../../Sandbox/Components/Spinner';
import Error from '../../Sandbox/Components/Error';
import UseCapitalize from '../../hooks/UseCapitalize';
import MapComponent from '../../map/components/MapComponent';

const { capitalizeFirstLetter, capitalizeAllFirstLetter } = UseCapitalize();

const styles = {
  container: {
    width: "80vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    mt: "68px",
    overflow:"none"
  },
  header: {
    fontFamily: "roboto",
    fontWeight: "550",
    fontSize: "30px",
    marginBottom: "5px",
    color: 'white',
    textAlign: { xs: 'center', sm: 'left' },
  },
  subHeader: {
    fontFamily: "roboto",
    fontWeight: "100",
    fontSize: "20px",
    marginBottom: "20px",
    marginLeft: "2px",
    color: '#9CA3AF',
    textAlign: { xs: 'center', sm: 'left' },
  },
  text: {
    fontFamily: "roboto",
    fontWeight: "100",
    fontSize: "12px",
    marginBottom: "5px",
    color: '#F0F0F0',
    textAlign: { xs: 'center', sm: 'left' },
    width: "auto"
  },
  boldText: {
    fontWeight: "500",
    fontSize: "12px",
    color: 'white',
  },
  buttonContainer: {
    width: '100%',
    display: "flex",
    justifyContent: { xs: 'center', sm: 'flex-start' },
    mt: "25px",
  },
  button: {
    fontFamily: "roboto",
    fontWeight: "500",
    fontSize: "12px",
    marginTop: "25px",
    color: 'white',
  },
  imagebox: {
    height: "35vh",
    width: { xs: '85%', sm: '30vw' },
    backgroundColor: "white",
    borderRadius: "10px",
    border: "solid white"
  },
  textbox: {
    display: "inline-block",
    width: "auto",
    alignSelf: "right",
    margin: "auto"
  },
  imageAlign: {
    display: "flex",
    justifyContent: { xs: "center", sm: "left" }
  },
  textAlign: {
    display: "flex",
    justifyContent: { xs: "center", sm: "flex-end" }
  },
  mapAlign: {
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems:"center",
    marginTop:"20px"
  },
  mapContainer: {
    height: '45vh',
    width: '90%',
    borderRadius: '10px',
    overflow: 'hidden',
    marginTop: '20px',
    zIndex: 0,
    border:"solid #F0F0F0",
    opacity:"0.9",
    ':hover': {
      opacity:"0.95"
    },
  }
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
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} spacing={20} order={{ xs: 2, sm: 1 }} direction={{ xs: 'column', sm: 'row' }} sx={styles.textAlign}>
          <Box sx={styles.textbox}>
            <Typography variant="h1" sx={styles.header}>
              {capitalizeAllFirstLetter(card.title)}
            </Typography>
            <Typography sx={styles.subHeader}>
              {capitalizeAllFirstLetter(card.subtitle)}
            </Typography>
            <Typography sx={styles.text}>
              <span style={styles.boldText}>Business description:</span> {capitalizeFirstLetter(card.description)}
            </Typography>
            <Typography sx={styles.text}>
              <span style={styles.boldText}>Telephone:</span> {card.phone}
            </Typography>
            <Typography sx={styles.text}>
              <span style={styles.boldText}>Email:</span> {card.email}
            </Typography>
            <Typography sx={styles.text}>
              <span style={styles.boldText}>Address:</span> {`${card.address.houseNumber} ${card.address.street}, ${card.address.city}, ${card.address.country}`}
            </Typography>
            <Box sx={styles.buttonContainer}>
              <Button variant="contained" href={card.web} sx={styles.button}>Visit Website</Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }} sx={styles.imageAlign}>
          <Box sx={styles.imagebox}>
            <img
              src={card.image.url}
              alt="Description"
              style={{ width: '100%', height: '100%', borderRadius: '10px', objectFit: "cover" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} order={{ xs: 3, sm: 3 }} sx={styles.mapAlign} >
        <Typography variant="h1" sx={styles.header}>
              Location
            </Typography>
          <Box sx={styles.mapContainer}>
            <MapComponent address={card.address} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
