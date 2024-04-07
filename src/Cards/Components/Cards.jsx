import {Container} from '@mui/material';
import React from 'react'
import CardComponent from './Card/CardComponent';
export default function Cards({ cards ,handleCardDelete,handleCardLike}) {
       
      return ( 

        <Container sx={{display:"flex", flexWrap:"Wrap"}}>
          {cards.map((card)=>(
          <CardComponent 
          key={card._id}
          card={card}
          handleCardDelete={handleCardDelete}
          handleCardLike={handleCardLike}/>
          ))}
        </Container>
      )
}
