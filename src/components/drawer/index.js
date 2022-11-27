import { IconButton } from "@mui/material";
import { Divider, Drawer, List, ListItemButton } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Colors } from "../../styles/theme";

export default function Appdrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setIsDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <List>
          <ListItemButton sx={{ color: Colors.white }}>Home</ListItemButton>
          <Divider variant="middle" />
          <ListItemButton sx={{ color: Colors.white }}>Designs</ListItemButton>
          <Divider variant="middle" />
          <ListItemButton sx={{ color: Colors.white }}>Services</ListItemButton>
          <Divider variant="middle" />
          <ListItemButton sx={{ color: Colors.white }}>Porfolio</ListItemButton>
          <Divider variant="middle" />
          <ListItemButton sx={{ color: Colors.white }}>Projects</ListItemButton>
        </List>
      </Drawer>
    </>
  );
}
