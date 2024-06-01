import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { useMyUser } from "../../../../users/providers/UserProvider";
import { useDarkLightTheme } from "../../../../theme/ThemeProvider";
import { useLocation } from "react-router-dom";

export default function LeftNavBar() {  
  const { user } = useMyUser();
  const matchesMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { theme } = useDarkLightTheme();
  const location = useLocation();

  const getButtonStyle = (route) => ({
    color: theme.strongTextColor,
    m: "0 1rem",
    backgroundColor: location.pathname === route ? theme.highlightColor : theme.secondaryColor,
  });

  return (
    <Box sx={{ display: "flex", alignItems: "center", overflow: 'hidden' }}>
      {matchesMd && (
        <>
          <NavItem
            buttonSx={getButtonStyle(ROUTES.HOME)}
            sx={{ height: "100px" }}
            to={ROUTES.HOME}
            label={"Home"}
          />
          <NavItem
            buttonSx={getButtonStyle(ROUTES.CARDS)}
            sx={{ height: "100px" }}
            to={ROUTES.CARDS}
            label={"Gallery"}
          />
          {user && (
            <NavItem
              buttonSx={getButtonStyle(ROUTES.MY_CARDS)}
              sx={{ height: "100px" }}
              to={ROUTES.MY_CARDS}
              label={"My Cards"}
            />
          )}
          {user && (
            <NavItem
              buttonSx={getButtonStyle(ROUTES.FAV_CARDS)}
              sx={{ height: "100px" }}
              to={ROUTES.FAV_CARDS}
              label={"Favorites"}
            />
          )}
        </>
      )}
    </Box>
  );
}
