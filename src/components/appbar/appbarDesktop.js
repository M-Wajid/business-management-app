import { ListItemButton } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import { Link } from "react-router-dom";

export default function AppbarDesktop({ matches }) {
  return (
    <AppbarContainer>
      <AppbarHeader textAlign={"center"} variant="h4">
        Jalalzai Designs
      </AppbarHeader>
      <MyList type="row">
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "19px",
            flexGrow: 0.5,
          }}
          to="/"
        >
          <ListItemButton>Home</ListItemButton>
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "19px",
            flexGrow: 0.5,
          }}
          to="/designs"
        >
          <ListItemButton>Designs</ListItemButton>
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "19px",
            flexGrow: 0.5,
          }}
          to="/services"
        >
          <ListItemButton>Services</ListItemButton>
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "19px",
            flexGrow: 0.5,
          }}
          to="/portfolio"
        >
          <ListItemButton>Porfolio</ListItemButton>
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "19px",
            flexGrow: 0.5,
          }}
          to="/projects"
        >
          <ListItemButton>Projects</ListItemButton>
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "19px",
            flexGrow: 0.5,
          }}
          to="/login"
        >
          <ListItemButton>Login</ListItemButton>
        </Link>
      </MyList>
    </AppbarContainer>
  );
}
