import { Box, CardActions, IconButton } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useMyUser } from "../../../users/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

export default function CardActionBar({
  handleCardLike,
  handleCardDelete,
  cardId,
  userId,
}) {
  const { user } = useMyUser();
  const navigate = useNavigate();

  const handleCardEdit = (id) => {
    navigate(ROUTES.EDIT_CARD + "/" + id);
  };

  return (
    <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
      <Box>
        {user && (user.isAdmin || user._id === userId) ? (
          <>
            <IconButton sx={{color:"white"}} onClick={() => handleCardDelete(cardId)}>
              <DeleteIcon />
            </IconButton>
            <IconButton sx={{color:"white"}} onClick={() => handleCardEdit(cardId)}>
              <ModeEditIcon />
            </IconButton>
          </>
        ) : null}
      </Box>

      <Box>
        <IconButton sx={{color:"white"}} >
          <CallIcon />
        </IconButton>
        <IconButton sx={{color:"white"}} onClick={() => handleCardLike(cardId)}>
          <FavoriteIcon />
        </IconButton>
      </Box>
    </CardActions>
  );
}