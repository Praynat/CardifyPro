import { Box, IconButton, Input, NativeSelect } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useMySearch } from './Provider/SearchProvider';

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

  return (
    <Box
      sx={{
        display: "flex",
        height: "35px",
        width: "auto",
        backgroundColor: "#374151",
        border: "solid black 0.5px",
        borderRadius: "30px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          onChange={handleSearchInput}
          placeholder="Search"
          sx={{ color: "white", ml: "20px" }}
        />
        <IconButton type="submit">
          <SearchIcon sx={{ color: "white" }} />
        </IconButton>
        <NativeSelect
          defaultValue={"All Cards"}
          onChange={handleSelectedOption}
          inputProps={{
            name: 'Categories',
            id: 'uncontrolled-native',
            style: { color: "grey", backgroundColor: "#374151" },
          }}
        >
          <option value={"All Cards"}>All Cards</option>
          <option value={"My Cards"}>My Cards</option>
          <option value={"Favorites"}>Favorites</option>
        </NativeSelect>
      </form>
    </Box>
  );
}

