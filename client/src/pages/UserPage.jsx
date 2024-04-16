import { useEffect, useState } from "react"
import { getUserById } from "../api"
import { useParams } from 'react-router-dom'
import { useTheme } from "../ThemeContext";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

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
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="ID" secondary={id} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Name" secondary={user.name} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Team" secondary={user.team} />
      </ListItem>
    </List>
        // <div className={`app-header ${dark ? "dark" : ""}`}>
        //     { loadError && <div>Error: { loadError.message }</div> }
        //     <div>UserId: { id }</div>
        //     <div>name: { user.name }</div>
        //     <div>team: { user.team }</div>
        // </div>
    )
}

export default UserPage