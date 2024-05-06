import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Box, IconButton } from "@mui/material";
import React from "react";

import Logged from "./Logged";
import NotLogged from "./NotLogged";
import { useTheme } from "../../../../providers/CustomThemeProvider";
import { useMyUser } from "../../../../users/providers/UserProvider";
import MoreButton from "./MoreButton";

export default function RightNavBar() {
  const { user } = useMyUser();
  const { isDark, toggleDarkMode } = useTheme();
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },
          alignItems: "center",
        }}
      >
        <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        {user && <Logged />}
        {!user && <NotLogged />}
      </Box>
      <MoreButton/>
    </>
  );
}