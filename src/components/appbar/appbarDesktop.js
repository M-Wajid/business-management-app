import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import Actions from "./actions";
import SearchIcon from "@mui/icons-material/Search"
import Searchbox from "../search";



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
        </MyList>
            <Searchbox/>
        <Actions matches = {matches}/>
       </AppbarContainer>
    );
}