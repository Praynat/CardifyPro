import React from "react";
import Form from "../../forms/components/Form";
import ROUTES from "../../routes/routesModel";
import Input from "../../forms/components/Input";
import { Grid, FormControlLabel, Checkbox } from "@mui/material";

export default function SignupForm({
  onSubmit,
  onReset,
  validateForm,
  title,
  errors,
  data,
  onInputChange,
  setData,
}) {
  return (
    <Form
      onSubmit={onSubmit}
      onReset={onReset}
      validateForm={validateForm}
      title={title}
      styles={{ maxWidth: "800px" }}
      to={ROUTES.ROOT}
    >
      <Grid container spacing={2} sx={{mt:"10px"}}>
        <Grid item xs={12} sm={5}>
          <Input
            name="first"
            label="First Name"
            error={errors.first}
            onChange={onInputChange}
            data={data}
          />
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <Input
            name="last"
            label="Last Name"
            error={errors.last}
            onChange={onInputChange}
            data={data}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Input
            name="middle"
            label="Middle Name"
            error={errors.middle}
            onChange={onInputChange}
            data={data}
            required={false}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Input
            name="phone"
            label="Phone"
            type="phone"
            error={errors.phone}
            onChange={onInputChange}
            data={data}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            name="email"
            label="Email"
            type="email"
            error={errors.email}
            onChange={onInputChange}
            data={data}
          />
        </Grid>

        <Grid item xs={12} sm={9}>
          <Input
            name="url"
            label="Image URL"
            error={errors.url}
            onChange={onInputChange}
            data={data}
            required={false}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Input
            name="alt"
            label="Image Alt"
            error={errors.alt}
            onChange={onInputChange}
            data={data}
            required={false}
          />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Input
            label="Country"
            name="country"
            error={errors.country}
            onChange={onInputChange}
            data={data}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Input
            name="state"
            label="State"
            error={errors.state}
            onChange={onInputChange}
            data={data}
            required={false}
          />
         </Grid>
        <Grid item xs={12} sm={5}>
          <Input
            name="city"
            label="City"
            error={errors.city}
            onChange={onInputChange}
            data={data}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Input
            name="street"
            label="Street"
            error={errors.street}
            onChange={onInputChange}
            data={data}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Input
            name="houseNumber"
            label="House Number"
            type="number"
            error={errors.houseNumber}
            onChange={onInputChange}
            data={data}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Input
            name="zip"
            label="Zip"
            error={errors.zip}
            onChange={onInputChange}
            data={data}
            required={false}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            onChange={onInputChange}
            name="isBusiness"
            control={<Checkbox value={data.isBusiness} color="primary" sx={{color:"white"}}/>}
            label="Signup as business"
            sx={{color:"white"}}
          />
        </Grid>
      </Grid>
    </Form>
  );
}
