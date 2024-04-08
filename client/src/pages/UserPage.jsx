import { useEffect, useState } from "react"
import { getUserById } from "../api"

function UserPage({ userId }) {
    const [user, setUser] = useState({ name: '', team: ''})
    const [loadError, setLoadError] = useState()

    useEffect(() => {
        getUserById(userId)
            .then(setUser)
            .catch(setLoadError)
    }, [userId])

    return (
        <div>
            { loadError && <div>Error: { loadError.message }</div> }
            <div>UserId: { userId }</div>
            <div>name: { user.name }</div>
            <div>team: { user.team }</div>
        </div>
    )
  }

export default UserPage