import React, { useEffect, useMemo } from 'react'
import CardsFeedback from '../../../../../Cards/Components/CardsFeedback'
import useCards from '../../../../../Cards/hooks/useCards';
import { Box, Typography } from '@mui/material';
import { useMySearch } from './Provider/SearchProvider';
import { useMyUser } from '../../../../../users/providers/UserProvider';
import { useDarkLightTheme } from '../../../../../theme/ThemeProvider';



export default function SearchPage() {
    const { cards,error,isLoading, getAllCards,handleCardDelete,handleCardLike} = useCards();
    const { selected, searchInput } = useMySearch();
    const {user}=useMyUser();

    const { theme } = useDarkLightTheme();
  useEffect(()=>{
    getAllCards();
  }, [getAllCards]);
     
  const filteredCards = useMemo(() => {
    if (!searchInput) return cards;
    const searchLower = searchInput.toLowerCase();
    
    switch (selected) {
        case "My Cards":
            return cards.filter((card) =>
                card.title.toLowerCase().includes(searchLower) &&
                card.user_id=== user._id 
            );
        case "Favorites":
            return cards.filter((card) =>
                card.title.toLowerCase().includes(searchLower) &&
                card.likes.includes(user._id) 
            );
        default:
            return cards.filter((card) =>
                card.title.toLowerCase().includes(searchLower)
            );
    }
}, [cards, selected, searchInput, user]);
    

      return (
        <Box sx={{display:"flex", flexDirection:"column" ,justifyContent:"start",alignItems:"center",mt:"68px" ,width: "100%", height:"100vh" }}>
          <Typography variant="h1" sx={{fontFamily:"roboto", fontWeight:"550",fontSize:"48px", marginBottom:"30px", color:theme.strongTextColor}}>
          Search Page
          </Typography>

          {filteredCards.length > 0 ? (
            <CardsFeedback
                cards={filteredCards}
                isLoading={isLoading}
                error={error}
                handleCardDelete={handleCardDelete}
                handleCardLike={handleCardLike}
                selected={selected}
                searchInput={searchInput}
            />
            ) : (
            <Typography variant="h4" color={theme.strongTextColor} align="center">
                No cards with "{searchInput}" were found.
            </Typography>
            )}
        </Box>
    );
  }
