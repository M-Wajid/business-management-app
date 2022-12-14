import { ThemeProvider } from "@mui/system";
import { Container } from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/theme";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Products from "./components/products";
import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "./components/sign-in/signin";
import DeleteDesign from "./components/delete-design";
import UpdateDesign from "./components/update-design";
import CreateDesign from "./components/create-design";

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
        <Appbar />
        <Switch>
          <Route exact path="/designs">
             <Products /> 
          </Route>
          <Route exact path="/services">
            <Products />
          </Route>
          <Route exact path="/portfolio">
            <Products />
          </Route>
          <Route exact path="/projects">
            <Products />
          </Route>
          <Route exact path="/login">
            <SignIn />
          </Route>
          <Route exact path="/update-design">
            <UpdateDesign />
          </Route>
          <Route exact path="/delete-design">
            <DeleteDesign />
          </Route>
          <Route exact path="/create-design">
            <CreateDesign />
          </Route>
          <Route exact path="/">
            <Banner />
            <Products />
          </Route>
        </Switch>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
