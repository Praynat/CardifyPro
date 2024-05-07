import React from "react";
import useForm from "../../forms/hooks/useForm";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/loginSchema";
import Container from "@mui/material/Container";
import PageHeader from "../../Cards/Components/PageHeader";
import Form from "../../forms/components/Form";
import ROUTES from "../../routes/routesModel";
import Input from "../../forms/components/Input";
import { useMyUser } from "../providers/UserProvider";
import { Navigate } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import { useSnack } from "../../providers/SnackbarProvider";

export default function LoginPage() {
  const {handleLogin} = useUsers();
  const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
    useForm(initialLoginForm, loginSchema, handleLogin);

    const {user}=useMyUser();
    const setSnack = useSnack();
    if (user) return (
    <Navigate to={ROUTES.ROOT} replace/>)

    const onFormSubmit = () => {
      onSubmit();
      setTimeout(() => {
        setSnack("success","Login successful");        
      }, 1000);
    };
  return (
    <Container>
      <PageHeader
        title="Welcome to Login page"
        subtitle="here you can log in"
      />
      <Container
        sx={{
          paddingTop: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          title="login"
          styles={{ maxWidth: "450px" }}
          to={ROUTES.ROOT}
          onSubmit={onFormSubmit}
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
      </Container>
    </Container>
  );
}