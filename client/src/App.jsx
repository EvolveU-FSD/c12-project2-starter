import { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './reactRoutes'
import { ThemeContext } from "./ThemeContext";
import Header from "./Header";
import { Button, ButtonGroup } from "@mui/material";

import './App.css'


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
    <ThemeContext>
      <div>
        <Header />
        <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        >
          <Button onClick={() => setRoute("/")}>
            See All Users
          </Button>
          <Button onClick={() => setRoute("/newuser")}>
            Create A User
          </Button>
        </ButtonGroup>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </ThemeContext>
  )
}

export default App
