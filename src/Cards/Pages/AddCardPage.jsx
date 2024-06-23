import React from "react";
import { useMyUser } from "../../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useCards from "../hooks/useCards";
import useForm from "../../forms/hooks/useForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import cardSchema from "../models/cardSchema";
import { Container } from "@mui/material";
import CardForm from "../Components/CardForm";

export default function AddCardPage() {
  const { user } = useMyUser();
  const { handleCreateCard } = useCards();

  const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
    useForm(initialCardForm, cardSchema, handleCreateCard);

  if (!user) return <Navigate replace to={ROUTES.LOGIN} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardForm
        title="Create your business card"
        onSubmit={onSubmit}
        onReset={handleReset}
        errors={errors}
        validateForm={validateForm()}
        onInputChange={handleChange}
        data={data}
      />
    </Container>
  );
}