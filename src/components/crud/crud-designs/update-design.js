import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContext } from "react";
import { DesignsContext } from "../../../context/designContext";
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";

import AuthUser from '../../sign-in/auth-user';

const theme = createTheme();

export default function UpdateDesign() {

  const {config} = AuthUser();

  const { designs } = useContext(DesignsContext);

  const [oldName, setOldName] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDesciption] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleOldName = (event) => {
    setOldName(event.target.value);
  };
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

  const updateData = async () => {
    var index = designs.findIndex((item) => item.name === oldName);
    const id = designs[index]._id;
    const API = `/api/v1/designs/${id}`;

    const newBody = {};

    console.log(newBody);

    if (name.length !== 0) newBody.name = name;
    if (description.length !== 0) newBody.description = description;
    if (imgUrl.length !== 0) newBody.imageUrl = imgUrl;
    if (price.length !== 0) newBody.price = price;

    console.log(newBody);
    await axios.patch(API, newBody, config);
    alert("Data Updated");
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
            Update Design
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select Name</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select Name"
                onChange={handleOldName}
              >
                {designs.map(({ name }) => (
                <MenuItem value={name}>{name}</MenuItem>
              ))}
              </Select>
            </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              value={name}
              label="New Name"
              onChange={handleName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={price}
              label="New Price"
              onChange={handlePrice}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="New Description"
              value={description}
              onChange={handleDescription}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={imgUrl}
              label="New Image URL"
              onChange={handleUrl}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={updateData}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
