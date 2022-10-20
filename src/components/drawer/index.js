import { IconButton } from "@mui/material";
import { Divider, Drawer, List, ListItemButton } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function Appdrawer (){
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return(
        <>
            <IconButton onClick={()=> setIsDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>

            <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <List>
                    <ListItemButton>
                        Home
                    </ListItemButton>
                    <Divider variant = 'middle' />
                    <ListItemButton>
                        Designs
                    </ListItemButton>
                    <Divider variant = 'middle' />
                    <ListItemButton>
                        Services
                    </ListItemButton>
                    <Divider variant = 'middle' />
                    <ListItemButton>
                        Porfolio
                    </ListItemButton>
                    <Divider variant = 'middle' />
                    <ListItemButton>
                        Projects
                    </ListItemButton>
                </List>
            </Drawer>
        </>
    );
}