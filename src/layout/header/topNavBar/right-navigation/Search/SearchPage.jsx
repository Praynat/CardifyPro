import React, { useEffect, useMemo } from 'react'
import CardsFeedback from '../../../../../Cards/Components/CardsFeedback'
import useCards from '../../../../../Cards/hooks/useCards';
import { Box } from '@mui/material';
import { useMySearch } from './Provider/SearchProvider';
import { useMyUser } from '../../../../../users/providers/UserProvider';

export default function SearchPage() {
    const { cards,error,isLoading, getAllCards,handleCardDelete,handleCardLike} = useCards();
    const { selected, searchInput } = useMySearch();
    const {user}=useMyUser();

  useEffect(()=>{
    getAllCards();
  }, [getAllCards]);
      const filteredCards = useMemo(() => {
        if (!searchInput) return cards;
        if (selected === "My Cards") {
          return cards.filter((card) =>
            card.title.toLowerCase().includes(searchInput.toLowerCase())&&
          card.userId === user._id
          );
        }
        if (selected === "Favorites") {
          return cards.filter((card) =>
            card.title.toLowerCase().includes(searchInput.toLowerCase())&&
          card.likes.includes(user._id)
          );
        } 
        return cards.filter((card) =>
          card.title.toLowerCase().includes(searchInput.toLowerCase())
        );
      }, [cards, selected, searchInput, user._id]);
    

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
