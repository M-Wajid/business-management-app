import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

const theme = createTheme();

export default function AdminMenu() {
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
          <Typography component="h1" variant="h4">
            Admin Menu
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2, pt: 3, pb: 3 }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "19px",
                flexGrow: 0.5,
              }}
              to="/admin-product"
            >
              Products
            </Link>
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2, pt: 3, pb: 3 }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "19px",
                flexGrow: 0.5,
              }}
              to="/admin-design"
            >
              Designs
            </Link>
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2, pt: 3, pb: 3 }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "19px",
                flexGrow: 0.5,
              }}
              to="/admin-project"
            >
              Projects
            </Link>
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2, pt: 3, pb: 3 }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "19px",
                flexGrow: 0.5,
              }}
              to="/admin-service"
            >
              Services
            </Link>
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
