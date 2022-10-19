import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import Actions from "./actions";
import SearchIcon from "@mui/icons-material/Search"


export default function AppbarMobile({matches}) {
  
    return (
        <AppbarContainer>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <AppbarHeader textAlign={'center'} variant = 'h4'>Jalazai Design</AppbarHeader>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <Actions matches = {matches} />
        </AppbarContainer>
     );
}