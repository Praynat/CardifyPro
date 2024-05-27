import React from "react";
import useUsers from "../../users/hooks/useUsers";
import useForm from "../../forms/hooks/useForm";
import { useSnack } from "../../providers/SnackbarProvider";
import ROUTES from "../../routes/routesModel";
import { Container} from "@mui/material";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import initialContactUsForm from "../helpers/initialContactUsForm";
import contactSchema from "../models/contactSchema";


export default function ContactPage() {
  const {handleContact} = useUsers();
  const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
    useForm(initialContactUsForm, contactSchema, handleContact);

    const setSnack = useSnack();
    

    const onFormSubmit = () => {
      onSubmit();
      setTimeout(() => {
        setSnack("success","Message Sent");        
      }, 500);
    };
   
  return (
    
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection:"column"
        }}
      >
        <Form
          title="Contact Us" 
          styles={{ maxWidth: "450px" }}
          to={ROUTES.ROOT}
          onSubmit={onFormSubmit}
          onReset={handleReset}
          validateForm={validateForm}
        >
          <Input
            label="Name"
            name="name"
            type="name"
            error={errors.email}
            onChange={handleChange}
            data={data}
          
          />
          <Input
            label="Email"
            name="email"
            type="email"
            error={errors.email}
            onChange={handleChange}
            data={data}
          />
          <Input
            label="Message"
            name="message"
            type="text"
            error={errors.email}
            onChange={handleChange}
            data={data}
            rows={4}
            multiline={true}
          />
           
        </Form>
       
      </Container>
  );
}