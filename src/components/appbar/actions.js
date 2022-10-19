import { Divider, ListItemButton, ListItemIcon } from '@mui/material';
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from '../../styles/appbar';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Actions({matches}) {
    const Component = matches? ActionIconsContainerMobile: ActionIconsContainerDesktop;
    
    return(
        <Component>
            <MyList type = 'row'> 

                <ListItemButton
                    sx ={{
                        justifyContent: "center",
                    }}
                >
                    <ListItemIcon
                        sx ={{
                            display: 'flex',
                            justifyContent: "center"
                        }}
                    >
                        <LoginIcon />
                    </ListItemIcon>   
                </ListItemButton>

                <Divider orientation="vertical" flexItem/>

                <ListItemButton
                    sx ={{
                        justifyContent: "center",
                    }}
                >
                    <ListItemIcon
                        sx ={{
                            display: 'flex',
                            justifyContent: "center"
                        }}
                    >
                        <LogoutIcon />
                    </ListItemIcon>
                    
                </ListItemButton>

                <Divider orientation="vertical" flexItem/>

                <ListItemButton
                    sx ={{
                        justifyContent: "center",
                    }}
                >
                    <ListItemIcon
                        sx ={{
                            display: 'flex',
                            justifyContent: "center"
                        }}
                    >
                        <PersonIcon />
                    </ListItemIcon>
                    
                </ListItemButton>

                <Divider orientation="vertical" flexItem/>

            </MyList>
        </Component>
    );
}

