import { Divider, ListItemButton, ListItemIcon } from '@mui/material';
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from '../../styles/appbar';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Colors } from '../../styles/theme';

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
                            justifyContent: "center",
                            color: Colors.black,
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
                            justifyContent: "center",
                            color: Colors.black,
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
                            justifyContent: "center",
                            color: Colors.black,
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

