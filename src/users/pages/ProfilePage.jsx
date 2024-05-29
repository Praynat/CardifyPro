import React from 'react';
import { Avatar, Grid, Typography, Box, Card } from '@mui/material';

const ProfilePage = () => {
  const user = {
    name: 'John Doe',
    id: '123456',
    address: '1234 Street Name, City, Country',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    isBusinessUser: true,
    imageUrl: 'https://via.placeholder.com/150'
  };

  const styles = {
    card: {
      padding: 2,
      maxWidth: 400,
      margin: 'auto',
      backgroundColor: "#111827",
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
    name: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    image: {
      height: 150,
      width: 150,
      borderRadius: user.imageUrl ? 0 : '50%',
    }
  };

  return (
    <Card sx={styles.card}>
      <Grid container spacing={2}>
        <Grid item xs={12} container justifyContent="center">
          <Avatar sx={styles.avatar}>
            {user.name[0]}
          </Avatar>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Typography variant="h1" sx={styles.name}>
            {user.name}
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Typography variant="subtitle1" sx={styles.title}>
            ID:  <span style={{ fontWeight: 'normal', color:"#F0F0F0" }}>{user.id}</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={styles.title}>
            Address: <span style={{ fontWeight: 'normal', color:"#F0F0F0" }}>{user.address}</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={styles.title}>
            Email: <span style={{ fontWeight: 'normal', color:"#F0F0F0" }}>{user.email}</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={styles.title}>
            Phone: <span style={{ fontWeight: 'normal', color:"#F0F0F0" }}>{user.phone}</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={styles.title}>
            Business User: <span style={{ fontWeight: 'normal', color:"#F0F0F0" }}>{user.isBusinessUser ? 'Yes' : 'No'}</span>
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          {user.imageUrl && (
            <Box
              component="img"
              sx={styles.image}
              src={user.imageUrl}
              alt="Profile"
            />
          )}
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProfilePage;
