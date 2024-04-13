import { Box, CardActions, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CallIcon from '@mui/icons-material/Call';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useState } from 'react'
import { useMyUser } from '../../../users/providers/UserProvider';



export default function CardActionbar({handleCardDelete,handleCardLike,cardId,userId}) {
  const handleCardEdit = (id)=>{
    console.log("navigate to edit page for the card"+ id);
  }
  const Usercontext =useMyUser();

  const isDisabled=()=>{
   return  Usercontext.isAdmin|| Usercontext._id===userId
  }

  return (
    <>
    <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
        <Box>
          <IconButton disabled={isDisabled} onClick={()=>{
            handleCardDelete(cardId)
          }}>
            <DeleteIcon />
          </IconButton>
          <IconButton disabled={isDisabled} onClick={()=> handleCardEdit(cardId)}>
            <ModeEditIcon />
          </IconButton>        
        </Box>
      <Box>
        <IconButton>
          <CallIcon />
        </IconButton>
        <IconButton onClick={()=>{
          handleCardLike(cardId)
        }}>
          <FavoriteIcon />
        </IconButton >
      </Box>
    </CardActions>

    </>
  )
}
