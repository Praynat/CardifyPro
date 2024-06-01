import React from 'react'
import {
    CardContent,
    CardHeader,
    
    Divider,
    Typography,
  } from "@mui/material";
import UseCapitalize from '../../../hooks/UseCapitalize';
import { useDarkLightTheme } from '../../../theme/ThemeProvider';

export default function CardBodyComponent({title,subtitle,phone,adress,cardNumber}) {
  const {capitalizeFirstLetter,capitalizeAllFirstLetter}=UseCapitalize();
  const { theme } = useDarkLightTheme();
  
  return (
    <>
        <CardHeader title={capitalizeAllFirstLetter(title)} subheader={capitalizeFirstLetter(subtitle)} 
        sx={{
          '.MuiCardHeader-subheader': {
            color: theme.strongTextColor,
          },
          '.MuiCardHeader-title': {
            color: theme.strongTextColor,
          },
        }}
        />
        <Divider variant="middle" />
        <CardContent>
            <Typography variant="body2" color={theme.strongTextColor}>
            <strong>Phone: </strong>
            {phone}
            </Typography>
            <Typography variant="body2" color={theme.strongTextColor}>
            <strong>Address: </strong>
            {adress.city} {adress.street} {adress.houseNumber}
            </Typography>
            <Typography variant="body2" color={theme.strongTextColor}>
            <strong>Card Number: </strong>
            {cardNumber.bizNumber}
            </Typography>
        </CardContent>
    </>
  )
}
