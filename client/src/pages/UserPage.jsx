import { useEffect, useState } from "react"
import { getUserById } from "../api"
import { useParams } from 'react-router-dom'
import { useTheme } from "../ThemeContext";

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
        <div className={`app-header ${dark ? "dark" : ""}`}>
            { loadError && <div>Error: { loadError.message }</div> }
            <div>UserId: { id }</div>
            <div>name: { user.name }</div>
            <div>team: { user.team }</div>
        </div>
    )
}

export default UserPage