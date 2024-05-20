import CardsFeedback from '../../../../../Cards/Components/CardsFeedback';
import useCards from '../../../../../Cards/hooks/useCards';
import { Box } from '@mui/material';
import { useMySearch } from './Provider/SearchProvider';

export default function SearchPage() {
  const { cards, error, isLoading, handleCardDelete, handleCardLike } = useCards();
  const { selected, searchInput, filteredAllCards, filteredMyCards, filteredFavCards } = useMySearch();

  const filteredCards = () => {
    if (!searchInput) {
      return cards;
    }
    if (selected === "My Cards") {
      return filteredMyCards;
    }
    if (selected === "Favorites") {
      return filteredFavCards;
    }
    return filteredAllCards;
  };

 
  return (
    <Box sx={{ width: "100%" }}>
      <CardsFeedback
        cards={filteredCards()}
        isLoading={isLoading}
        error={error}
        handleCardDelete={handleCardDelete}
        handleCardLike={handleCardLike}
        selected={selected}
        searchInput={searchInput}
      />
    </Box>
  );
}
