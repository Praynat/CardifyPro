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
        <CardHeader title={capitalizeAllFirstLetter(title)} subheader={capitalizeFirstLetter(subtitle)} />
        <Divider variant="middle" />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
            <strong>Phone: </strong>
            {phone}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <strong>Address: </strong>
            {adress.city} {adress.street} {adress.houseNumber}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <strong>Card Number: </strong>
            {cardNumber.bizNumber}
            </Typography>
        </CardContent>
    </>
  )
}
