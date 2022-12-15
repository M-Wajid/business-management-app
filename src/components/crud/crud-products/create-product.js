import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";

import AuthUser from '../../sign-in/auth-user';

const theme = createTheme();

export default function CreateProduct() {

  const {config} = AuthUser();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDesciption] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleDescription = (event) => {
    setDesciption(event.target.value);
  };
  const handleUrl = (event) => {
    setImgUrl(event.target.value);
  };
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const postData = async () => {
    const API = `/api/v1/products`;

    const newBody = {};

    console.log(newBody);

    if (name.length !== 0) newBody.name = name;
    if (description.length !== 0) newBody.description = description;
    if (imgUrl.length !== 0) newBody.imageUrl = imgUrl;
    if (price.length !== 0) newBody.price = price;

    console.log(newBody);
    await axios.post(API, newBody, config);
    alert("Data Posted");
    window.location.reload();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Create Product
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={name}
              label="Name"
              onChange={handleName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={price}
              label="Price"
              onChange={handlePrice}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Description"
              value={description}
              onChange={handleDescription}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={imgUrl}
              label="Image URL"
              onChange={handleUrl}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={postData}
            >
              Post
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
