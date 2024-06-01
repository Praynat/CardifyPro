
import React, { useEffect, useMemo} from 'react'
import { Container, Typography } from '@mui/material';
import CardsFeedback from '../Components/CardsFeedback';
import useCards from '../hooks/useCards';
import { useMyUser } from '../../users/providers/UserProvider';
import AddNewCardButton from '../Components/AddNewCardButton';
import { useDarkLightTheme } from "../../theme/ThemeProvider";

export default function Favorites() {
    const { cards,error,isLoading,handleCardDelete,handleCardLike,getFavCards} = useCards();
    const { user } = useMyUser();
    const { theme } = useDarkLightTheme();

  useEffect(()=>{
    getFavCards();
  }, [getFavCards]);

  const filteredCards = useMemo(() => {
    return cards.filter(card => card.likes.includes(user._id));
  }, [cards, user]);

  return (
    <Container sx={{display:"flex", flexDirection:"column" ,alignItems:"center",mt:"68px"}}>
      <Typography variant="h1" sx={{fontFamily:"roboto", fontWeight:"550",fontSize:"48px", marginBottom:"30px", color:theme.strongTextColor}}>
          Favorite Cards
      </Typography>
        <CardsFeedback 
        cards={filteredCards}
        isLoading={isLoading}
        error={error}
        handleCardDelete={handleCardDelete}
        handleCardLike={handleCardLike}
        /> 
        <AddNewCardButton />
    </Container>
    )
}
