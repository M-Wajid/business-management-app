import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import Actions from "./actions";
import SearchIcon from "@mui/icons-material/Search"
import Appdrawer from "../drawer";



export default function AppbarMobile({matches}) {
    return (
        <AppbarContainer>
            <Appdrawer />
            <AppbarHeader textAlign={'center'} variant = 'h4'>Jalazai Design</AppbarHeader>
            <IconButton >
                <SearchIcon />
            </IconButton>
            <Actions matches = {matches} />
        </AppbarContainer>
     );
}