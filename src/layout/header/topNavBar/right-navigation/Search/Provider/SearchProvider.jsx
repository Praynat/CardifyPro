import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';
import useCards from '../../../../../../Cards/hooks/useCards';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [selected, setSelected] = useState("All Cards");
  const [searchInput, setSearchInput] = useState("");
  const { cards, getAllCards } = useCards();

  useEffect(() => {
    getAllCards();
  }, [getAllCards]);


  const filteredAllCards = useMemo(() => {
    return cards.filter((card) =>
      card.title.toLowerCase().includes(searchInput.toLowerCase())
    );
  }, [cards, searchInput]);

  const filteredMyCards = useMemo(() => {
    return cards.filter((card) =>
      card.title.toLowerCase().includes(searchInput.toLowerCase()) 
    );
  }, [cards, searchInput]);

  const filteredFavCards = useMemo(() => {
    return cards.filter((card) =>
      card.title.toLowerCase().includes(searchInput.toLowerCase()) 
    );
  }, [cards, searchInput]);

  return (
    <SearchContext.Provider value={{ selected, setSelected, searchInput, setSearchInput, filteredAllCards, filteredMyCards, filteredFavCards }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useMySearch = () => {
  return useContext(SearchContext);
};
