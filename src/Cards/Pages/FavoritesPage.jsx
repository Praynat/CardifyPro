
import React, { useEffect, useMemo} from 'react'
import { Box, Typography } from '@mui/material';
import CardsFeedback from '../Components/CardsFeedback';
import useCards from '../hooks/useCards';
import { useMyUser } from '../../users/providers/UserProvider';

export default function Favorites() {
    const { cards,error,isLoading,handleCardDelete,handleCardLike,getFavCards} = useCards();
    const { user } = useMyUser();

  useEffect(()=>{
    getFavCards();
  }, [getFavCards]);

  const filteredCards = useMemo(() => {
    return cards.filter(card => card.likes.includes(user._id));
  }, [cards, user]);

  return (
    <Box sx={{width:"100%",display:"flex",flexDirection:"column", alignItems:"center",height:"70vh"}}>
      <Typography variant="h1" sx={{fontFamily:"roboto", fontWeight:"550",fontSize:"48px", marginBottom:"30px", color:'white'}}>
          Favorite Cards
      </Typography>
        <CardsFeedback 
        cards={filteredCards}
        isLoading={isLoading}
        error={error}
        handleCardDelete={handleCardDelete}
        handleCardLike={handleCardLike}
        /> 
    </Box>
    )
}
