import { Box, CardActions, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
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
  cardUserId,
  likes
}) {
  const { user } = useMyUser();
  const navigate = useNavigate();
  const [liked, setLiked]= useState(false)


  const handleThisCardLike = () => {
    setLiked((prevLiked) => !prevLiked);
    handleCardLike(cardId);
  };

  useEffect(() => {
    if (user && likes.includes(user._id)) {
      setLiked(true);
    }
  }, [user, likes]);

  const handleCardEdit = (id) => {
    navigate(ROUTES.EDIT_CARD + "/" + id);
  };
  return (
    <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
      <Box>
        {user && (user.isAdmin || user._id === cardUserId) ? (
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
        <IconButton sx={{color: liked? "red":"white"}} onClick={() => handleThisCardLike()}>
          <FavoriteIcon />
        </IconButton>
      </Box>
    </CardActions>
  );
}