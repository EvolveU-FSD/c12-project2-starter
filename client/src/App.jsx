import { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './reactRoutes'
import { ThemeContext } from "./ThemeContext";
import Header from "./Header";
import { Button, ButtonGroup } from "@mui/material";
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import './App.css'

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

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
        size="large"
        orientation="vertical"
        aria-label="outlined primary button group"
        >
          <ColorButton variant="text" onClick={() => setRoute("/")}>
            See All Users
          </ColorButton>
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
