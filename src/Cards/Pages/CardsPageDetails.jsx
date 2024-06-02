import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { Edit, Delete, Phone, Favorite } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import useCards from '../hooks/useCards';
import Spinner from '../../Sandbox/Components/Spinner';
import Error from '../../Sandbox/Components/Error';
import UseCapitalize from '../../hooks/UseCapitalize';
import MapComponent from '../../map/components/MapComponent';
import AddNewCardButton from '../Components/AddNewCardButton';
import ROUTES from '../../routes/routesModel';
import { useMyUser } from '../../users/providers/UserProvider';
import useDetailStyles from '../style/cardDetailsStyle';


const { capitalizeFirstLetter, capitalizeAllFirstLetter } = UseCapitalize();



export default function CardsPageDetails() {
  const { id } = useParams();
  const { card, error, isLoading, getCardById, handleCardDelete, handleCardLike } = useCards();
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  const { user } = useMyUser();

  const styles = useDetailStyles();

  const handleThisCardLike = () => {
    setLiked((prevLiked) => !prevLiked);
    handleCardLike(card._id);
  };

  useEffect(() => {
    getCardById(id);
  }, [id, getCardById]);

  const handleCardEdit = (id) => {
    navigate(ROUTES.EDIT_CARD + "/" + id);
  };

  useEffect(() => {
    if (user && card && card.likes.includes(user._id)) {
      setLiked(true);
    }
  }, [user, card]);

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (!card) return null; 


  return (
    <Grid container sx={styles.container}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} spacing={20} order={{ xs: 2, sm: 1 }} direction={{ xs: 'column', sm: 'row' }} sx={styles.textAlign}>


          <Box sx={styles.textbox}>

{/* left side text */}
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


{/* left side buttons */}
            <Grid sx={styles.iconButtons}>
              <IconButton sx={{color:"grey",scale:"0.8" }} onClick={() => handleCardEdit(card._id)}>
                <Edit />
              </IconButton>
              <IconButton sx={{color:"grey",scale:"0.8" }} onClick={() => handleCardDelete(card._id)}>
                <Delete />
              </IconButton>
              <IconButton sx={{ color: 'grey', scale:"0.8" }}>
                <Phone />
              </IconButton>
              <IconButton sx={{color: liked ? "red" : "grey"}} onClick={handleThisCardLike}>
                <Favorite />
              </IconButton>
            </Grid>

{/* Left side visit website button */}
            <Box sx={styles.buttonContainer}>
              <Button variant="contained" href={card.web} sx={styles.button}>Visit Website</Button>
            </Box>
          </Box>
        </Grid>

{/* right side image */}
        <Grid item xs={12} sm={6} lg={5} order={{ xs: 1, sm: 2 }} sx={styles.imageAlign}>
          <Box sx={styles.imagebox}>
            <img
              src={card.image.url}
              alt="Description"
              style={{ width: '100%', height: '100%', borderRadius: '10px', objectFit: "cover" }}
            />
          </Box>
        </Grid>

{/* Bottom Map */}
        <Grid item xs={12} order={{ xs: 3, sm: 3 }} sx={styles.mapAlign}>
          <Typography variant="h1" sx={styles.header}>
            Location
          </Typography>
          <Box sx={styles.mapContainer}>
            <MapComponent address={card.address} />
          </Box>
        </Grid>
      </Grid>
      <AddNewCardButton />
    </Grid>
  );
}
