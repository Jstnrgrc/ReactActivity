import React from 'react'
import Navbar from '../components/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom' 
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Users from '../pages/Users'

function Dashboard() {
  return (
      <div className="flex flex-col h-screen bg-gray-100">
        <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>} /> {/* Redirect to /home */}
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard