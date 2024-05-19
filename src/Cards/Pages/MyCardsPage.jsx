
import React, { useEffect} from 'react'
import { Box } from '@mui/material';
import CardsFeedback from '../Components/CardsFeedback';
import useCards from '../hooks/useCards';

export default function MyCardsPage() {
    const { cards,error,isLoading, getAllMyCards,handleCardDelete,handleCardLike} = useCards();

  useEffect(()=>{
    getAllMyCards();
  }, [getAllMyCards]);

    

  return (
    <Box sx={{width:"100%"}}>
        <CardsFeedback 
        cards={cards}
        isLoading={isLoading}
        error={error}
        handleCardDelete={handleCardDelete}
        handleCardLike={handleCardLike}
        
        /> 
    </Box>
    )
}
