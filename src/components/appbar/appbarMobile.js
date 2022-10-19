import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import Actions from "./actions";


export default function AppbarMobile({matches}) {
  
    return (
        <AppbarContainer>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <AppbarHeader sx={{padding: '0px 0px 0px 120px'}} textAlign={'center'} variant = 'h4'>Jalazai Design</AppbarHeader>
            <Actions/>
        </AppbarContainer>
     );
}