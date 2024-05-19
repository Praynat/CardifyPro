
import { Box } from "@mui/material";
import React from "react";

import Logged from "./Logged";
import NotLogged from "./NotLogged";
import { useMyUser } from "../../../../users/providers/UserProvider";
import MoreButton from "./MoreButton";
import SearchBar from "./Search/SearchBar";


export default function RightNavBar() {
  const { user } = useMyUser();
 
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },
          alignItems: "center",
          gap:"20px"
        }}
      >
        

        <SearchBar/>

        {user && <Logged />}
        {!user && <NotLogged />}
      </Box>
      <MoreButton/>
    </>
  );
}