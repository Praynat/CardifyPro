import { Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import PageHeader from '../Components/PageHeader'
import useCards from '../hooks/useCards';
import { useParams } from 'react-router-dom';
import Spinner from '../../Sandbox/Components/Spinner';
import Error from '../../Sandbox/Components/Error';

export default function CardsPageDetails() {
    const {id} =useParams();
    const { card,error,isLoading, getCardById} = useCards();
    
    useEffect(()=>{
        getCardById(id);
    },[id]);

    if(isLoading) return <Spinner/>;
    if (error) return <Error errorMessage={error}/>;
    
    
  return (
   <Container>
        <PageHeader
            title="Card details"
            subtitle="Here you can find all the details about this specific card"
        />
        
          <Typography>Details of card {id}</Typography>
          <Typography>{card.title}</Typography>
        
     
   </Container>
  )
}
