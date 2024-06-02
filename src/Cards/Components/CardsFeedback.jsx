import React from 'react'
import { Typography } from '@mui/material'
import Cards from './Cards'
import Spinner from '../../utilities/Spinner'
import Error from '../../utilities/Error'

export default function CardsFeedback({isLoading, cards, error, handleCardDelete, handleCardLike,selected,searchInput}) {
  
 if (isLoading) {return (<Spinner/>)};
 if (error) {return (<Error errorMessage={error}/>)};
 if (cards && cards.length=== 0) {
    
    return (
    <Typography m={2} color={'white'}>
        Oops...it seems there is no business cards to display!
    </Typography>
  )};
  if (cards) {
    return(
        <Cards
        cards={cards}
        handleCardDelete={handleCardDelete}
        handleCardLike={handleCardLike}
        selected={selected}
        searchInput={searchInput}
        />
    )
  }
  return null
}
