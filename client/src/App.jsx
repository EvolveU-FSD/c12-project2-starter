import { useEffect, useState } from 'react'
import AllUsersPage from './pages/AllUsersPage'
import UserPage from './pages/UserPage'
import AddUserPage from './pages/AddUserPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'

const router = createBrowserRouter([
  { path: "/", element: <AllUsersPage></AllUsersPage>, errorElement: <ErrorPage/>},
  { path: "/:id", element: <UserPage></UserPage>},
  { path: "/newuser", element: <AddUserPage></AddUserPage>}
])

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return <div>
    <h2>Oh snap! something went sideways!</h2>
    <div>{error.statusText || error.message}</div>
  </div>
}

function App() {

  const [selectedUserId, setSelectedUserId] = useState()
  const [targetRoute, setTargetRoute] = useState()

  async function setRoute(targetRoute) {
    try {
      setTargetRoute(targetRoute)
      window.location.href = targetRoute
    }
    catch (error) {
        console.log("error: ", error)
    }
  }

  return (
    <div>
      <button onClick={() => setRoute("/")}>See All Users</button>
      <button onClick={() => setRoute("/newuser")}>Create A User</button>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
