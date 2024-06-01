import React from "react";
import useForm from "../../forms/hooks/useForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import signupSchema from "../models/signupSchema";
import Container from "@mui/material/Container";
import SignupForm from "../components/SignupForm";
import { useMyUser } from "../providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useUsers from "../hooks/useUsers";
import { Box, Typography } from "@mui/material";
import NavItem from "../../routes/components/NavItem";


export default function SignupPage() {
  const {handleSignup} = useUsers();
  
  const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
    useForm(initialSignupForm, signupSchema, handleSignup);

  const {user}=useMyUser();
  
  if (user) return <Navigate to={ROUTES.ROOT} replace/>
  
  return (
    <Container
      sx={{
     
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column",
        mt:"68px"
      }}
    >
      <SignupForm
        onSubmit={onSubmit}
        onReset={handleReset}
        validateForm={validateForm()}
        title={"Create New Account"}
        errors={errors}
        data={data}
        onChange={handleChange}
      />
      <Box sx={{display:"flex",gap:"20px", alignItems:"baseline"}}>
          <Typography variant="body" color="white" sx={{fontFamily:"Open-Sans",mt:"10px", fontWeight:"100",fontSize:"20px", color:'#B2B2B2'}}>
              Already have an account?
          </Typography>
          <NavItem
              buttonSx={{color:"#428AFF", m:"0 0.1rem"}}
              sx={{height:"100px"}}
              to={ROUTES.LOGIN} 
              label={"Login"}
              variant="outlined"
              color="primary"
          />
        </Box>
    </Container>
  );
}


//have to add loading (on button or else) and error (if email already exists...)  