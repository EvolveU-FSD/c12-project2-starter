import { useEffect, useState } from "react"
import { getUserById } from "../api"
import { useParams } from 'react-router-dom'
import { useTheme } from "../ThemeContext";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

function UserPage() {
    const [user, setUser] = useState({ name: '', team: ''})
    const [loadError, setLoadError] = useState()
    const { id } = useParams();
    const { dark, toggleDark } = useTheme();

    useEffect(() => {
        getUserById(id)
            .then(setUser)
            .catch(setLoadError)
    }, [])

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List  sx={{bgcolor: 'black'}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={id} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary={ user.name } />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary={ user.team } />
            </ListItemButton>
          </ListItem>
        </List>
      <Divider />
    </Box>
        // <div className={`app-header ${dark ? "dark" : ""}`}>
        //     { loadError && <div>Error: { loadError.message }</div> }
        //     <div>UserId: { id }</div>
        //     <div>name: { user.name }</div>
        //     <div>team: { user.team }</div>
        // </div>
    )
}

export default UserPage