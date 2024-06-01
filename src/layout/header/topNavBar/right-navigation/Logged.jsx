import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useMenu } from "../Menu/MenuProvider";
import { Box, Typography, CircularProgress } from "@mui/material";
import { useMyUser } from "../../../../users/providers/UserProvider";
import UseCapitalize from "../../../../hooks/UseCapitalize";
import { useDarkLightTheme } from "../../../../theme/ThemeProvider";

const Logged = () => {
  const  setOpen  = useMenu();
  const { userData, loading } = useMyUser();
  const { capitalizeFirstLetter } = UseCapitalize();
  const { theme } = useDarkLightTheme();

  if (loading) {
    return <CircularProgress />;
  }

  if (!userData) {
    return <Typography variant="body1" color="error">Failed to load user data</Typography>;
  }

  const userName = capitalizeFirstLetter(userData.name.first);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="body1" color={theme.strongTextColor}>Welcome {userName}</Typography>
      <Tooltip title="Open settings">
        <IconButton
          sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
          onClick={() => setOpen(true)}
        >
          <Avatar alt="avatar" src="/assets/images/avatar.png" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default Logged;
