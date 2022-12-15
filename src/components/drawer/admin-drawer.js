import { IconButton } from "@mui/material";
import { Divider, Drawer, List, ListItemButton } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import AuthUser from "../sign-in/auth-user";

export default function Appdrawer() {
  const {logout} = AuthUser();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setIsDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <List>
          <Link
            style={{
              textDecoration: "none",
              color: "White",
              fontSize: "22px",
              fontWeight: "bold",
            }}
            to="/"
          >
            <ListItemButton>Home</ListItemButton>
          </Link>
          <Divider variant="middle" />

          <Link
            style={{
              textDecoration: "none",
              color: "White",
              fontSize: "22px",
              fontWeight: "bold",
            }}
            to="/designs"
          >
            <ListItemButton>Designs</ListItemButton>
          </Link>
          <Divider variant="middle" />

          <Link
            style={{
              textDecoration: "none",
              color: "White",
              fontSize: "22px",
              fontWeight: "bold",
            }}
            to="/services"
          >
            <ListItemButton>Services</ListItemButton>
          </Link>
          <Divider variant="middle" />
          {/* <Link
            style={{
              textDecoration: "none",
              color: "White",
              fontSize: "22px",
              fontWeight: "bold",
            }}
            to="/portfolio"
          >
            <ListItemButton>Porfolio</ListItemButton>
          </Link> */}
          <Divider variant="middle" />
          <Link
            style={{
              textDecoration: "none",
              color: "White",
              fontSize: "22px",
              fontWeight: "bold",
            }}
            to="/projects"
          >
            <ListItemButton>Projects</ListItemButton>
          </Link>
          <Divider variant="middle" />
          <Link
            style={{
              textDecoration: "none",
              color: "White",
              fontSize: "22px",
              fontWeight: "bold",
            }}
            to="/admin"
          >
            <ListItemButton>Admin</ListItemButton>
          </Link>
          <Divider variant="middle" />
          <ListItemButton style={{
              textDecoration: "none",
              color: "White",
              fontSize: "22px",
              fontWeight: "bold",
            }}
            onClick={logout}>Logout</ListItemButton>
        </List>
      </Drawer>
    </>
  );
}
