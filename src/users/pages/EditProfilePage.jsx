import React, { useEffect } from "react";
import useForm from "../../forms/hooks/useForm";
import Container from "@mui/material/Container";
import { useMyUser } from "../providers/UserProvider";
import useUsers from "../hooks/useUsers";
import { getUserData } from "../services/usersApiService";
import denormalizeUser from "../helpers/normalization/denormalizeUser";
import EditUserForm from "../components/EditUserForm";
import initialEditUserForm from "../helpers/initialForms/initialEditUserForm";
import editUserSchema from "../models/editUserSchema";


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
  } = useForm(initialEditUserForm, editUserSchema, (userFromClient) =>
    handleUserUpdate(userFromClient, userId)
  );

  useEffect(() => {
    if (userId) {
      getUserData(userId)
        .then((data) => {
          const modelUser = denormalizeUser(data);
          setData(modelUser);
        })
        .catch((error) => {
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
        mt: "68px",
      }}
    >
      {user ? (
        <EditUserForm
          onSubmit={onSubmit}
          onReset={handleReset}
          validateForm={validateForm}
          title={"Change user info"}
          errors={errors}
          data={data}
          onChange={handleChange}
        />
      ) : (
        <div>Error: User data not available.</div>
      )}
    </Container>
  );
}
