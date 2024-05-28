
import React, { useEffect} from 'react'
import { Box, Typography } from '@mui/material';
import CardsFeedback from '../Components/CardsFeedback';
import useCards from '../hooks/useCards';
import AddNewCardButton from '../Components/AddNewCardButton';

export default function MyCardsPage() {
    const { cards,error,isLoading, getAllMyCards,handleCardDelete,handleCardLike} = useCards();

  useEffect(()=>{
    getAllMyCards();
  }, [getAllMyCards]);

    

  return (
    <Box sx={{width:"100%",display:"flex",flexDirection:"column", alignItems:"center",height:"70vh"}}>
      <Typography variant="h1" sx={{fontFamily:"roboto", fontWeight:"550",fontSize:"48px", marginBottom:"30px", color:'white'}}>
          My Cards
      </Typography>
        <CardsFeedback 
        cards={cards}
        isLoading={isLoading}
        error={error}
        handleCardDelete={handleCardDelete}
        handleCardLike={handleCardLike}
        
        /> 
        <AddNewCardButton />
    </Box>
    )
}
