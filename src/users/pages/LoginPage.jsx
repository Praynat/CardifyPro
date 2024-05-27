import React from "react";
import useForm from "../../forms/hooks/useForm";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/loginSchema";
import Container from "@mui/material/Container";
import Form from "../../forms/components/Form";
import ROUTES from "../../routes/routesModel";
import Input from "../../forms/components/Input";
import { useMyUser } from "../providers/UserProvider";
import { Navigate } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import { Box, Typography } from "@mui/material";
import NavItem from "../../routes/components/NavItem";

export default function LoginPage() {
  const {handleLogin} = useUsers();
  const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
    useForm(initialLoginForm, loginSchema, handleLogin);

    const {user}=useMyUser();
    if (user) return (
    <Navigate to={ROUTES.ROOT} replace/>)

    
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
          title="Login to Your Account"
          styles={{ maxWidth: "450px" }}
          to={ROUTES.ROOT}
          onSubmit={onSubmit}
          onReset={handleReset}
          validateForm={validateForm}
        >
          <Input
            label="email"
            name="email"
            type="email"
            error={errors.email}
            onChange={handleChange}
            data={data}
          />
          <Input
            label="password"
            name="password"
            type="password"
            error={errors.password}
            onChange={handleChange}
            data={data}
          />
        </Form>
        <Box sx={{display:"flex",gap:"20px", alignItems:"baseline"}}>
          <Typography variant="body" color="white" sx={{fontFamily:"Open-Sans",mt:"10px", fontWeight:"100",fontSize:"20px", color:'#B2B2B2'}}>
              Don't have an account?
          </Typography>
          <NavItem
              buttonSx={{color:"#428AFF", m:"0 0.1rem"}}
              sx={{height:"100px"}}
              to={ROUTES.SIGNUP} 
              label={"Sign Up"}
              variant="outlined"
              color="primary"
          />
        </Box>
      </Container>
  );
}