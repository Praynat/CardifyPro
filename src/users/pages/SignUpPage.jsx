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


export default function SignupPage() {
  const {handleSignup} = useUsers();
  
  const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
    useForm(initialSignupForm, signupSchema, handleSignup);

  const {user}=useMyUser();
  
  if (user) return <Navigate to={ROUTES.ROOT} replace/>
  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignupForm
        onSubmit={onSubmit}
        onReset={handleReset}
        validateForm={validateForm}
        title={"register form"}
        errors={errors}
        data={data}
        onInputChange={handleChange}
      />
    </Container>
  );
}


//have to add loading (on button or else) and error (if email already exists...)