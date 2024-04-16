import { useEffect, useState } from "react"
import { updateUser } from "../api"
import { useTheme } from "../ThemeContext";
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';

function UserRow({ user, setSelectedUserId }) {
    const userClicked = () => { setSelectedUserId(user._id) }

    return <div onClick={userClicked}> { user.name } </div>
}

function AddUserPage() {
    const [newUserInfo, setNewUser] = useState({name:"",team:""})
    const [newUserName, setNewUserName] = useState("")
    const [newTeamName, setNewTeamName] = useState("")
    const [loadError, setLoadError] = useState()
    const { dark, toggleDark } = useTheme();

    async function addUser(newUserInfo) {
        try {
            const newUser = await updateUser(newUserInfo)
            setNewUser(newUser)    
        }
        catch (error) {
            setLoadError(error)
        }
    }    

    useEffect(() => {
        addUser(newUserInfo)
    }, [])

    return (
        <div className={`app-header ${dark ? "dark" : ""}`}>
            <h1>Add a New User!</h1>
            { loadError && <div>Error: { loadError.message }</div> }
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <div>
                    <TextField required id="outlined-basic" label="Your Name:" variant="outlined" input onChange={e=>setNewUserName(e.target.value)} />
                </div>
                <div>
                    <TextField required id="outlined-basic" label="Your Team:" variant="outlined" input onChange={e=>setNewTeamName(e.target.value)} />
                </div>
                <div>
                    <button onClick={()=>addUser({name:newUserName, team: newTeamName})}>Create New User</button>
                </div>
            </Box>  
        </div>
    )
}

export default AddUserPage