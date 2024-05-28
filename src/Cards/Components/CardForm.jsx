import React from "react";
import { Grid } from "@mui/material";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import ROUTES from "../../routes/routesModel";

const CardForm = ({
  onSubmit,
  onReset,
  errors,
  validateForm,
  onInputChange,
  data,
  title,
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      onReset={onReset}
      errors={errors}
      validateForm={validateForm}
      styles={{ maxWidth: "800px" }}
      title={title}
      to={ROUTES.ROOT}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Input
            name="title"
            label="Title"
            error={errors.title}
            onChange={onInputChange}
            data={data}
          />
        </Grid>

        <Grid item xs={6}>
          <Input
            name="subtitle"
            label="Subtitle"
            error={errors.subtitle}
            onChange={onInputChange}
            data={data}
          />
        </Grid>

        <Grid item xs={12}>
          <Input
            name="description"
            label="Description"
            multiline
            rows={3}
            error={errors.description}
            onChange={onInputChange}
            data={data}
          />
        </Grid>

        

        <Grid item xs={4}>
          <Input
            name="street"
            label="Street"
            error={errors.street}
            onChange={onInputChange}
            data={data}
          />
        </Grid>

        <Grid item xs={2}>
          <Input
            name="houseNumber"
            label="Nº"
            type="number"
            error={errors.houseNumber}
            onChange={onInputChange}
            data={data}
          />
        </Grid>

        <Grid item xs={2}>
          <Input
            name="city"
            label="City"
            error={errors.city}
            onChange={onInputChange}
            data={data}
          />
        </Grid>

        <Grid item xs={2}>
          <Input
            name="country"
            label="Country"
            error={errors.country}
            onChange={onInputChange}
            data={data}
          />
        </Grid>

        <Grid item xs={2}>
          <Input
            name="zip"
            label="ZIP"
            type="number"
            error={errors.zip}
            onChange={onInputChange}
            data={data}
            required={false}
          />
        </Grid>

        <Grid item xs={5}>
          <Input
            name="phone"
            label="Phone"
            type="phone"
            error={errors.phone}
            onChange={onInputChange}
            data={data}
          />
        </Grid>

        <Grid item xs={7}>
          <Input
            name="email"
            label="Email"
            type="email"
            error={errors.email}
            onChange={onInputChange}
            data={data}
          />
        </Grid>

        <Grid item xs={12}>
          <Input
            name="webUrl"
            label="Web Address"
            error={errors.webUrl}
            onChange={onInputChange}
            data={data}
            required={false}
          />
        </Grid>

        <Grid item xs={7}>
          <Input
            name="imageUrl"
            label="Image URL"
            error={errors.imageUrl}
            onChange={onInputChange}
            data={data}
            required={false}
          />
        </Grid>

        <Grid item xs={5}>
          <Input
            name="imageAlt"
            label="Image Alt"
            error={errors.imageAlt}
            onChange={onInputChange}
            data={data}
            required={false}
          />
        </Grid>
      </Grid>
    </Form>
  );
};

export default React.memo(CardForm);
