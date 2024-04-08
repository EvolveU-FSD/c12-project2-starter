import { useEffect, useState } from "react"
import { getAllUsers } from "../api"

function AllUsersPage() {
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
                <div key={user._id}> { user.name }</div>
            ))}
            <div>User count: { allUsers.length }</div>
        </div>
    )
}

export default AllUsersPage