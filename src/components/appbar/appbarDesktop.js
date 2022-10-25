import { ListItemText } from "@mui/material";
import { AppbarContainer, Logo, MyList } from "../../styles/appbar";
import Actions from "./actions";
import Searchbox from "../search";



export default function AppbarDesktop ({matches}) {

    return (
       <AppbarContainer>
        <Logo src="/images/logo/logo2.jpg"/>
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