import { ThemeProvider } from "@mui/system";
import { Container } from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/theme";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Home from "./pages/home";
import Designs from "./pages/designs";
import Login from "./pages/login";
// import Porfolio from "./pages/porfolio";
import Projects from "./pages/projects";
import Services from "./pages/services";
import Admin from "./pages/admin";
import AdminDesign from "./pages/admin-design";
import AdminProduct from "./pages/admin-product";
import AdminProject from "./pages/admin-project";
import AdminService from "./pages/admin-service";

function App() {
  useEffect(() => {
    document.title = "Business Management App";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          backgroud: "#fff",
        }}
      >
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/designs" element={<Designs />} />
          <Route exact path="/services" element={<Services />} />
          {/* <Route exact path="/portfolio" element={<Porfolio />} /> */}
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/admin-design" element={<AdminDesign />} />
          
          <Route exact path="/admin-product" element={<AdminProduct />} />
          
          <Route exact path="/admin-project" element={<AdminProject />} />
          
          <Route exact path="/admin-service" element={<AdminService />} />
          
        </Routes>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
