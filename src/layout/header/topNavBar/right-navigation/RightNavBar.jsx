
import { Box } from "@mui/material";
import React from "react";

import Logged from "./Logged";
import NotLogged from "./NotLogged";
import { useMyUser } from "../../../../users/providers/UserProvider";
import MoreButton from "./MoreButton";
import Search from "../../../../Search/Search";

export default function RightNavBar() {
  const { user } = useMyUser();
 
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },
          alignItems: "center",
        }}
      >
        

        <Search/>

        {user && <Logged />}
        {!user && <NotLogged />}
      </Box>
      <MoreButton/>
    </>
  );
}