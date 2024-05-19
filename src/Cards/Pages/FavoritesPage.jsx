
import React, { useEffect, useMemo} from 'react'
import { Box } from '@mui/material';
import CardsFeedback from '../Components/CardsFeedback';
import useCards from '../hooks/useCards';
import { useMyUser } from '../../users/providers/UserProvider';

export default function MyCardsPage() {
    const { cards,error,isLoading, getAllMyCards,handleCardDelete,handleCardLike} = useCards();
    const { user } = useMyUser();

  useEffect(()=>{
    getAllMyCards();
  }, [getAllMyCards]);

  const filteredCards = useMemo(() => {
    return cards.filter(card => card.likes.includes(user._id));
  }, [cards, user]);

  return (
    <Box sx={{width:"100%"}}>
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
