import React from 'react'
import {
    CardContent,
    CardHeader,
    
    Divider,
    Typography,
  } from "@mui/material";
import UseCapitalize from '../../../hooks/UseCapitalize';

export default function CardBodyComponent({title,subtitle,phone,adress,cardNumber}) {
  const {capitalizeFirstLetter,capitalizeAllFirstLetter}=UseCapitalize();
  
  return (
    <>
        <CardHeader title={capitalizeAllFirstLetter(title)} subheader={capitalizeFirstLetter(subtitle)} 
        sx={{
          '.MuiCardHeader-subheader': {
            color: 'white',
          },
          '.MuiCardHeader-title': {
            color: 'white',
          },
        }}
        />
        <Divider variant="middle" />
        <CardContent>
            <Typography variant="body2" color="white">
            <strong>Phone: </strong>
            {phone}
            </Typography>
            <Typography variant="body2" color="white">
            <strong>Address: </strong>
            {adress.city} {adress.street} {adress.houseNumber}
            </Typography>
            <Typography variant="body2" color="white">
            <strong>Card Number: </strong>
            {cardNumber.bizNumber}
            </Typography>
        </CardContent>
    </>
  )
}
