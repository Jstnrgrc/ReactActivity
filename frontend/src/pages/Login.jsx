import React from 'react';
import { KeyRound, Mail } from 'lucide-react';
import bg from '../assets/bg.gif';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {jwtDecode} from 'jwt-decode';

function Login() {

  const [formData, setFormData] = useState({
    Username: '',
    Password: '',
  });

const navigate = useNavigate();

const handleChange = (e) =>{
  setFormData({ ...formData, [e.target.name]: e.target.value });
}

// Removed unused error state

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:5000/api/users/login', formData);
    const decoded = jwtDecode(response.data.token);
    
    console.log("Decoded token:", decoded); // Debugging

    localStorage.setItem('token', response.data.token);
    localStorage.setItem('Fullname', decoded.Fullname);
    localStorage.setItem('Email', decoded.Email); // Ensure Email is stored

    navigate('/Dashboard/home');
  } catch (error) {
    alert(error.response?.data?.message || 'Something went wrong.');
  }
};

  return (
    <div className="bg-black min-h-screen flex items-center justify-center"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="bg-gray-800 bg-opacity-75 p-12 rounded shadow-md border border-gray-600">
        <h1 className="text-4xl font-bold mb-4 pb-5 text-white">Login</h1>
        <form className="flex flex-col items-center w-full" onSubmit={handleLogin}>

          <div className="relative w-full mb-2">
            <Mail className="absolute left-2 top-2.5 h-5 w-5 text-white" />
            <input
              type="text"
              name="Username"
              placeholder="Username"
              className="p-2 pl-10 border border-gray-600 rounded w-full bg-gray-700 text-white placeholder-gray-400"
              value={formData.Username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative w-full mb-2">
          <KeyRound className="absolute left-2 top-2.5 h-5 w-5 text-white" />
            <input
              type="password"
              name="Password"
              placeholder="Password"
              className="p-2 pl-10 border border-gray-600 rounded w-full bg-gray-700 text-white placeholder-gray-400"
              value={formData.Password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            style={{ backgroundColor: '#4BA4A6' }}
            className="text-white p-2 rounded w-full"
          >
            Login
          </button>
        </form>

        <div className="flex flex-col items-center mt-4">
          <p className="mt-4 text-white">
            Don't have an account?{' '}
            <a href="/register" className="text-blue-400">
              Register
            </a>
          </p>
          <p className="mt-4 text-white">
            Forgot Password?{' '}
            <a href="/register" className="text-blue-400">
              Reset
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}  

export default Login