import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContext } from "react";
import { ProductsContext } from "../../../context/productContext";
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";

import AuthUser from '../../sign-in/auth-user';

const theme = createTheme();

export default function DeleteProduct() {

  const {config} = AuthUser();

  const { products } = useContext(ProductsContext);

  const [oldName, setOldName] = useState("");

  const handleOldName = (event) => {
    setOldName(event.target.value);
  };


  const deleteData = async () => {
    var index = products.findIndex((item) => item.name === oldName);
    const id = products[index]._id;
    const API = `/api/v1/products/${id}`;

    await axios.delete(API,config);
    alert("Data deleted");
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
            Delete Product
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
                {products.map(({ name }) => (
                <MenuItem value={name}>{name}</MenuItem>
              ))}
              </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={deleteData}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
