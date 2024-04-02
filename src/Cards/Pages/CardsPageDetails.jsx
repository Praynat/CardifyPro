import { Container, Typography } from '@mui/material'
import React from 'react'
import PageHeader from '../Components/PageHeader'
import { useParams } from 'react-router-dom'

export default function CardsPageDetails() {
    const {id} = useParams();
  return (
   <Container>
        <PageHeader
            title="Card details"
            subtitle="Here you can find all the details about this specific card"
        />
        <Typography>
            Details of card {id}
        </Typography>
   </Container>
  )
}
