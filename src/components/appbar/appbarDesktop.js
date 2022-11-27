import { ListItemButton } from "@mui/material";
import { AppbarContainer, Logo, MyList } from "../../styles/appbar";
import Actions from "./actions";
import Searchbox from "../search";
import { Link } from "react-router-dom";

export default function AppbarDesktop({ matches }) {
  return (
    <AppbarContainer>
      <Logo src="/images/logo/logo2.jpg" />
      <MyList type="row">
        <Link
          style={{
            textDecoration: "none",
            color: "#696969",
            fontSize: "22px",
            fontWeight: "bold",
          }}
          to="/"
        >
          <ListItemButton>Home</ListItemButton>
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "#696969",
            fontSize: "22px",
            fontWeight: "bold",
          }}
          to="/designs"
        >
          <ListItemButton>Designs</ListItemButton>
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "#696969",
            fontSize: "22px",
            fontWeight: "bold",
          }}
          to="/services"
        >
          <ListItemButton>Services</ListItemButton>
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "#696969",
            fontSize: "22px",
            fontWeight: "bold",
          }}
          to="/portfolio"
        >
          <ListItemButton>Porfolio</ListItemButton>
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "#696969",
            fontSize: "22px",
            fontWeight: "bold",
          }}
          to="/projects"
        >
          <ListItemButton>Projects</ListItemButton>
        </Link>
      </MyList>
      <Searchbox />
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
