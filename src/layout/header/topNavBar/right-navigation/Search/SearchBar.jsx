import { Box, IconButton,InputBase, NativeSelect } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useMySearch } from './Provider/SearchProvider';
import { useDarkLightTheme } from '../../../../../theme/ThemeProvider';

export default function SearchBar() {
  const navigate=useNavigate();
  const {setSelected,setSearchInput}=useMySearch();
  

  const handleSelectedOption = (event) => {
    setSelected(event.target.value);
  };

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); 
    navigate("/search")
  };
  const { theme } = useDarkLightTheme();

  return (
    <Box
      sx={{
        display: "flex",
        height: "35px",
        width: "auto",
        backgroundColor: theme.highlightColor,
        border: "solid black 0.5px",
        borderRadius: "30px",
        alignItems: "center",
        justifyContent: "center",
        overflow:"hidden"
      }}
    >
      <form onSubmit={handleFormSubmit}>
        <InputBase
          type="text"
          onChange={handleSearchInput}
          placeholder="Search"
          sx={{ color: theme.strongTextColor, ml: "20px" }}
          inputProps={{ style: { textDecoration: 'none' } }}
        />
        <IconButton type="submit">
          <SearchIcon sx={{ color: theme.actionColor }} />
        </IconButton>
        <NativeSelect
          defaultValue={"All Cards"}
          onChange={handleSelectedOption}
          inputProps={{
            name: 'Categories',
            id: 'uncontrolled-native',
            style: { color: "grey", backgroundColor: theme.highlightColor, textDecoration:"none" },
          }}
          sx={{ border: 'none', outline: 'none', textDecoration:"none" }}
        >
          <option value={"All Cards"}>All Cards</option>
          <option value={"My Cards"}>My Cards</option>
          <option value={"Favorites"}>Favorites</option>
        </NativeSelect>
      </form>
    </Box>
  );
}

