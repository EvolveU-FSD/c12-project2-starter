import { useState } from 'react'
import AllUsersPage from './pages/AllUsersPage'
import UserPage from './pages/UserPage'

import './App.css'

function App() {

  const [selectedUserId, setSelectedUserId] = useState()

  return (
    <div>
      { !selectedUserId && <AllUsersPage setSelectedUserId={setSelectedUserId} />}
      { selectedUserId && <UserPage userId={selectedUserId} /> }
    </div>
  )
}

export default App
