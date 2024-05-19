import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [selected, setSelected] = useState("All Cards");
  const [searchInput, setSearchInput] = useState("");

  return (
    <SearchContext.Provider value={{ selected, setSelected, searchInput, setSearchInput }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useMySearch = () => {
  return useContext(SearchContext);
};
