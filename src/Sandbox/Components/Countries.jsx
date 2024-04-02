import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Typography } from "@mui/material";

export default function Countries() {
  const [countriesList, setCountriesList] = useState([]);

  const getAllCountries = async () => {
    try {
      setCountriesList([]);
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const data = response.data;
      setCountriesList(data);
    } catch (error) {
      console.log("error ", error);
    }
  };
  useEffect(() => {

    getAllCountries();
  }, []);

  return (
    <Box sx={{display:"flex", flexDirection:"column", mt:"4rem", border:"solid black", borderRadius:"1rem",padding:"1rem"}}>
    
    <Box sx={{height:"30vh",overflow:"scroll"}}>
      {countriesList.length === 0 ? (
        <Typography>טוען..</Typography>
      ) : (
        countriesList.map((country, index) => (
          <Box key={index}>
            <Typography>{country.name.common}</Typography>
          </Box>
        ))
      )}
    </Box>
    <Button onClick={()=>getAllCountries()} variant="contained" sx={{mt:"1rem"}}>Refresh</Button>
    </Box>
  );
}
