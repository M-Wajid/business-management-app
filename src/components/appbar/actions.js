import { ListItemButton, ListItemIcon } from '@mui/material';
import { MyList } from '../../styles/appbar';
import PersonIcon from '@mui/icons-material/Person';

export default function Actions() {
    return(
        <MyList type = 'row'> 
            <ListItemButton
                sx ={{
                    justifyContent: "center",
                    flexGrow: 0
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
        </MyList>
    );
}

