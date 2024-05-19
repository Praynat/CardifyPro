import React, { useEffect, useMemo } from 'react'
import CardsFeedback from '../../../../../Cards/Components/CardsFeedback'
import useCards from '../../../../../Cards/hooks/useCards';
import { Box } from '@mui/material';
import { useMySearch } from './Provider/SearchProvider';

export default function SearchPage() {
    const { cards,error,isLoading, getAllCards,handleCardDelete,handleCardLike} = useCards();
    const { selected, searchInput } = useMySearch();

  useEffect(()=>{
    getAllCards();
  }, [getAllCards]);
      const filteredCards = useMemo(() => {
        if (!searchInput) return cards;
        return cards.filter((card) =>
          card.title.toLowerCase().includes(searchInput.toLowerCase())
        );
      }, [cards, searchInput]);
    

  return (
    <Box sx={{width:"100%"}}>
        <CardsFeedback 
        cards={filteredCards}
        isLoading={isLoading}
        error={error}
        handleCardDelete={handleCardDelete}
        handleCardLike={handleCardLike}
        selected={selected}
        searchInput={searchInput}
        /> 
    </Box>
    )
}
