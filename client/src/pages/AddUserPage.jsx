import { useEffect, useState } from "react"
import { updateUser } from "../api"

function UserRow({ user, setSelectedUserId }) {
    const userClicked = () => { setSelectedUserId(user._id) }

    return <div onClick={userClicked}> { user.name } </div>
}

function AddUserPage() {
    const [newUserInfo, setNewUser] = useState({name:"",team:""})
    const [newUserName, setNewUserName] = useState("")
    const [newTeamName, setNewTeamName] = useState("")
    const [loadError, setLoadError] = useState()

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
        <div>
            <h1>Add a New User!</h1>
            { loadError && <div>Error: { loadError.message }</div> }
            <div>Your name:
                <input type="text" value={newUserName} onChange={e=>setNewUserName(e.target.value)}/>
            </div>
            <div>Your team:
                <input type="text" value={newTeamName} onChange={e=>setNewTeamName(e.target.value)}/>
            </div>
            <div>
                <button onClick={()=>addUser({name:newUserName, team: newTeamName})}>Create New User</button>
            </div>
        </div>
    )
}

export default AddUserPage