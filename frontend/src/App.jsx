//Routes
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Users from './pages/Users'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />}> </Route>
        <Route path="/register" element={<Register />}> </Route>
        <Route path="/home" element={<Home />}> </Route>
        <Route path="/dashboard" element={<Dashboard />}> </Route>
        <Route path="/profile" element={<Profile />}> </Route>
        <Route path="/users" element={<Users />}> </Route>
      </Routes>
  )
}

export default App;
