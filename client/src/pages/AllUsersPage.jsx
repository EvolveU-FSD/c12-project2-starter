import { useEffect, useState, useContext } from "react"
import { getAllUsers } from "../api"
import { useTheme } from "../ThemeContext";

function UserRow({ user }) {
    const userClicked = () => { window.location.href = user._id }
    return <div onClick={userClicked}> { user.name } </div>
}

function AllUsersPage({ setSelectedUserId }) {
    const [allUsers, setAllUsers] = useState([])
    const [loadError, setLoadError] = useState()
    const [userId, setUserId] = useState()
    const { dark, toggleDark } = useTheme();

    async function loadUsers() {
        try {
            const users = await getAllUsers()
            setAllUsers(users)    
        }
        catch (error) {
            setLoadError(error)
        }
    }    

    useEffect(() => {
        loadUsers()
    }, [])

    return (
        <div className={`app-header ${dark ? "dark" : ""}`}>
            <h1>All Users</h1>
            { loadError && <div>Error: { loadError.message }</div> }
            { allUsers.map((user) => (
                <UserRow key={user._id} user={user}/>
            ))}
            <div>User count: { allUsers.length }</div>
        </div>
    )
}

export default AllUsersPage