import React, { useEffect } from "react";
import useForm from "../../forms/hooks/useForm";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import signupSchema from "../models/signupSchema";
import Container from "@mui/material/Container";
import SignupForm from "../components/SignupForm";
import { useMyUser } from "../providers/UserProvider";
import useUsers from "../hooks/useUsers";
import { getUserData } from "../services/usersApiService";
import denormalizeUser from "../helpers/normalization/denormalizeUser";

export default function EditProfilePage() {
  const { handleUserUpdate } = useUsers();
  const { user } = useMyUser();

  const userId = user ? user._id : null;

  const {
    data,
    errors,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
    setData,
  } = useForm(initialSignupForm, signupSchema, (newUser) =>
    handleUserUpdate(newUser, userId)
  );

  useEffect(() => {
    if (userId) {
      getUserData(userId).then((data) => {
        const modelUser = denormalizeUser(data);
        setData(modelUser);
      }).catch((error) => {
        console.error("Failed to fetch user data:", error);
      });
    }
  }, [userId, setData]);

  if (!user) {
    return <div>Loading...</div>; 
  }

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt:"68px"
      }}
    >
      <SignupForm
        onSubmit={onSubmit}
        onReset={handleReset}
        validateForm={validateForm()}
        title={"Change user info"}
        errors={errors}
        data={data}
        onChange={handleChange}
      />

    </Container>
  );
}
