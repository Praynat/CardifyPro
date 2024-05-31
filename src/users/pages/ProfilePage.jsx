import React from 'react';
import { Avatar, Grid, Typography, Box, Card, CircularProgress } from '@mui/material';
import { useMyUser } from '../providers/UserProvider';
import UseCapitalize from '../../hooks/UseCapitalize';

const ProfilePage = () => {
  const { userData, loading } = useMyUser();
  const { capitalizeFirstLetter } = UseCapitalize();

  const styles = {
    card: {
      padding: 2,
      maxWidth: 400,
      margin: 'auto',
      backgroundColor: "#1F2937",
      borderRadius: "10px",
      border: "solid #9CA3AF",
      ':hover': {
        boxShadow: 6, // Adds a shadow effect on hover
        borderColor: '#D1D5DB' // Changes border color on hover
      },
      color: 'white',
      textAlign: 'center'
    },
    avatar: {
      backgroundColor: 'primary.main',
      width: 56,
      height: 56,
    },
    title: {
      fontWeight: 'bold',
    },
    nameStyle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    image: {
      height: 150,
      width: 150,
      borderRadius: userData?.image?.url ? 0 : '50%',
    },
    span: {
      fontWeight: 'normal',
      color: "#9CA3AF",
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (!userData) {
    return <Typography variant="h6" color="error">Failed to load user data</Typography>;
  }

  return (
    <Card sx={styles.card}>
      <Grid container spacing={2}>
        <Grid item xs={12} container justifyContent="center">
          <Avatar sx={styles.avatar}>
            {capitalizeFirstLetter(userData.name.first[0])}
          </Avatar>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Typography variant="h1" sx={styles.nameStyle}>
            {capitalizeFirstLetter(userData.name.first)} {capitalizeFirstLetter(userData.name.last)}
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Typography variant="subtitle1" sx={styles.title}>
            ID: <span style={styles.span}>{userData._id}</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={styles.title}>
            Address:{" "}
            <span style={styles.span}>
              {userData.address.houseNumber} {userData.address.street} {userData.address.city} {userData.address.country} {userData.address.zip}
            </span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={styles.title}>
            Email: <span style={styles.span}>{userData.email}</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={styles.title}>
            Phone: <span style={styles.span}>{userData.phone}</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={styles.title}>
            Business user: <span style={styles.span}>{userData.isBusiness ? 'Yes' : 'No'}</span>
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          {userData.image.url && (
            <Box
              component="img"
              sx={styles.image}
              src={userData.image.url}
              alt="Profile"
            />
          )}
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProfilePage;
