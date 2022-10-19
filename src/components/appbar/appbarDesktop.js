import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import Actions from "./actions";
import SearchIcon from "@mui/icons-material/Search"



export default function AppbarDesktop ({matches}) {

    return (
       <AppbarContainer>
        <AppbarHeader>Jalazai Design</AppbarHeader>
        <MyList type = 'row'>
            <ListItemText primary = "Home" />
            <ListItemText primary = "Designs" />
            <ListItemText primary = "Services" />
            <ListItemText primary = "Portfolio" />
            <ListItemText primary = "Projects" />
            <ListItemText primary = "About Us" />
            <ListItemButton>
                <ListItemIcon>
                    <SearchIcon />
                </ListItemIcon>
            </ListItemButton>
        </MyList>
        <Actions matches = {matches}/>
       </AppbarContainer>
    );
}