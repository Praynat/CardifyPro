import React, { useState } from "react";
import { Box, Button, Card, TextField } from "@mui/material";
import Joi from "joi";

const schema = Joi.object({
  firstName: Joi.string().min(2),
  lastName: Joi.string().min(2).max(10),
});

export default function FormExample() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const validatePropertט= (name,value) =>{
    
    //create object with this only name and value
    //create joi object with this only name and the validation
    //do the validation
    //return the error.details[0].message OR null

  }


  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    const validateObj = schema.validate(formData);
    console.log(validateObj);
  };

  return (
    <Box>
      <Card sx={{mt:"4rem",p:"2rem 2rem",borderRadius:"1rem"}}>
        <Box sx={{display:"flex", flexDirection:"column",alignItems:"center", gap:"2rem"}}>
          <TextField
            sx={{direction:"rtl"}}
            label="First name"
            value={formData.firstName}
            name="firstName"
            onChange={handleChange}
          />
          <TextField
            sx={{direction:"rtl"}}
            label="Last name"
            value={formData.lastName}
            name="lastName"
            onChange={handleChange}
          />
          <Button 
          sx={{width:"80%"}}
          variant="contained" 
          onClick={handleSubmit}>Submit</Button>
        </Box>
      </Card>
    </Box>
  );
}
