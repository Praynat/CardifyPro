import { Box, IconButton, InputBase, NativeSelect } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useMySearch } from './Provider/SearchProvider';
import { useDarkLightTheme } from '../../../../../theme/ThemeProvider';
import { useMyUser } from '../../../../../users/providers/UserProvider';

export default function SearchBar({ isOpen }) {
  const navigate = useNavigate();
  const { setSelected, setSearchInput } = useMySearch();
  const { theme } = useDarkLightTheme();
  const {user}=useMyUser();
  

  const handleSelectedOption = (event) => {
    setSelected(event.target.value);
  };

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate("/search");
  };

  return (
    isOpen && (
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "row",lg:"row" },
          position: { xs: "absolute", md: "absolute",lg:"relative" },
          top: { xs: "80px", md: "80px",lg:"0px" },
          left: { xs: "0", md: "0", lg: "0" },
          right: { xs: "0", md: "0", lg: "0" },
          marginLeft: "auto",
          marginRight: "auto",
          width: { xs: "350px", md: "350px",lg:"340px" },
          height:"40%",
          backgroundColor: theme.highlightColor,
          border: "solid black 0.5px",
          borderRadius: "30px",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          p: 1,
        }}
      >
        <form onSubmit={handleFormSubmit}>
          <InputBase
            type="text"
            onChange={handleSearchInput}
            placeholder="Search"
            sx={{ color: theme.strongTextColor,ml: "10px"}}
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
              style: { color: "grey", backgroundColor: theme.highlightColor, textDecoration: "none" },
            }}
            sx={{ border: 'none', outline: 'none', textDecoration: "none" }}
          >
            <option value={"All Cards"}>All Cards</option>
            {user&& <option value={"My Cards"}>My Cards</option>}
            {user&& <option value={"Favorites"}>Favorites</option>}
          </NativeSelect>
        </form>
      </Box>
    )
  );
}
