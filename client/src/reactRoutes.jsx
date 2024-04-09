import { createBrowserRouter, useRouteError } from 'react-router-dom'
import AllUsersPage from './pages/AllUsersPage'
import UserPage from './pages/UserPage'
import AddUserPage from './pages/AddUserPage'
import UpdateUser from './pages/UpdateUser'

const router = createBrowserRouter([
  { path: "/", element: <AllUsersPage/>, errorElement: <ErrorPage/>},
  { path: "/:id", element: <UserPage/>, errorElement: <ErrorPage/>},
  { path: "/newuser", element: <AddUserPage/>, errorElement: <ErrorPage/>},
  { path: "/updateuser/:id", element: <UpdateUser/>, errorElement: <ErrorPage/>},
  { path: "/error", element: <ErrorPage/>}
])

function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return <div>
        <h2>Oh snap! something went sideways!</h2>
        <div>{error}</div>
    </div>
}

export default router
