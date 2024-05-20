import {Box, Container} from '@mui/material';
import React from 'react'
import CardComponent from './Card/CardComponent';
export default function Cards({ cards ,handleCardDelete,handleCardLike}) {
       
  
      return ( 
        <Box >
          <Container sx={{display:"flex", flexWrap:"Wrap", justifyContent:"center"}}>
            {cards.map((card)=>(
            
            
            <CardComponent 
            key={card._id}
            card={card}
            handleCardDelete={handleCardDelete}
            handleCardLike={handleCardLike}
            likes={card.likes}
            />

            ))}
          </Container>
        </Box>
      )
}
