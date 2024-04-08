import { useEffect, useState } from "react"
import { getAllUsers } from "../api"

function UserRow({ user, setSelectedUserId }) {
    const userClicked = () => { setSelectedUserId(user._id) }

    return <div onClick={userClicked}> { user.name } </div>
}

function AllUsersPage({ setSelectedUserId }) {
    const [allUsers, setAllUsers] = useState([])
    const [loadError, setLoadError] = useState()

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
        <div>
            <h1>All Users</h1>
            { loadError && <div>Error: { loadError.message }</div> }
            { allUsers.map((user) => (
                <UserRow key={user._id} user={user} setSelectedUserId={setSelectedUserId}/>
            ))}
            <div>User count: { allUsers.length }</div>
        </div>
    )
}

export default AllUsersPage