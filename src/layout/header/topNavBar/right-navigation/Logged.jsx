
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useMenu } from "../Menu/MenuProvider";
import { Box, Typography } from "@mui/material";


const Logged = () => {
  const setOpen = useMenu();

  return (
    <Box sx={{display:"flex", alignItems:"center"}}>
      <Typography variant="body1" color="white">Welcome User</Typography>
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
