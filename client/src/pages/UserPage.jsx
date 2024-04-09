import { useEffect, useState } from "react"
import { getUserById } from "../api"
import { useParams } from 'react-router-dom'


function UserPage() {
    const [user, setUser] = useState({ name: '', team: ''})
    const [loadError, setLoadError] = useState()
    const { id } = useParams();

    useEffect(() => {
        getUserById(id)
            .then(setUser)
            .catch(setLoadError)
    }, [])

    return (
        <div>
            { loadError && <div>Error: { loadError.message }</div> }
            <div>UserId: { id }</div>
            <div>name: { user.name }</div>
            <div>team: { user.team }</div>
        </div>
    )
}

export default UserPage