import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

function Navbar() {
const [Fullname, setFullname] = useState('')

useEffect(() => {
  const storedName = localStorage.getItem('Fullname')
    setFullname(storedName)
},[]);

const navigate = useNavigate()

const handleLogout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('Fullname')
  navigate('/')
}

  return (
    <nav className="flex items-center justify-between px-16 py-6 bg-green-800 text-white shadow-lg text-xl">
      <div className="flex items-center font-bold text-lg">IETI</div>
      <div className="flex items-center font-bold text-lg">{Fullname}</div>
      <div className="flex space-x-8">
        <NavLink
          to="/dashboard/home"
          className={({ isActive }) =>
            `text-lg font-medium hover:text-blue-300 ${
              isActive ? 'border-b-4 border-white pb-2 font-bold' : ''
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            `text-lg font-medium hover:text-blue-300 ${
              isActive ? 'border-b-4 border-white pb-2 font-bold' : ''
            }`
          }
        >
          Profile
        </NavLink>
        
        <NavLink
          to="/dashboard/users"
          className={({ isActive }) =>
            `text-lg font-medium hover:text-blue-300 ${
              isActive ? 'border-b-4 border-white pb-2 font-bold' : ''
            }`
          }
        >
          Users
        </NavLink>

        <button
          onClick={handleLogout}
          className="text-lg font-medium hover:text-blue-300"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar