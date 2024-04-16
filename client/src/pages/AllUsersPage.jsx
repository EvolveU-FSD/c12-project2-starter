import { useEffect, useState, useContext } from "react"
import { getAllUsers } from "../api"
import { useTheme } from "../ThemeContext";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function UserRow({ user }) {
    const userClicked = () => { window.location.href = user._id }
    return (
        user.name ? 
            <TableRow onClick={userClicked}
                key={user.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align="right">{user._id}</TableCell>
                <TableCell align="right">{user.name}</TableCell>
                <TableCell align="right">{user.team}</TableCell>
            </TableRow> 
            : <></>
        )
    // return <div onClick={userClicked}> { user.name } </div>

}

function createData(id, name, team) {
    return { id, name, team };
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
            {/* <DataGrid
            // rows={rows}
            // columns={columns}
            // initialState={{
            // pagination: {
            //     paginationModel: { page: 0, pageSize: 5 },
            // },
            // }}
            // pageSizeOptions={[5, 10]}
            checkboxSelection> */}

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">ID</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Team</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { loadError && <div>Error: { loadError.message }</div> }
                            { allUsers.map((user) => (
                                <UserRow key={user._id} user={user}/>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            {/* </DataGrid> */}
        </div>
    )
}

export default AllUsersPage