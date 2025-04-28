import React from 'react';
import axios from 'axios';
import bg from '../assets/bg.gif'; 
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

import { KeyRound, User, LetterText, Mail } from 'lucide-react';


function Register() {
  const [formData, setFormData] = useState({
      FullName: '',
      Username: '',
      Email: '',
      Password: ''
    });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/adduser', formData);
      alert(res.data.message);

      navigate('/');
      
    } catch (err) {
      alert(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div
      className="bg-black min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-gray-800 bg-opacity-75 p-12 rounded shadow-md border border-gray-600">
        <h1 className="text-4xl font-bold mb-4 pb-5 text-white">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">

          <div className="relative w-full mb-2">
          <LetterText className="absolute left-2 top-2.5 h-5 w-5 text-white" />
            <input
              type="text"
              id="FullName"
              name="FullName"
              placeholder="Full Name"
              className="p-2 pl-10 border border-gray-600 rounded w-full bg-gray-700 text-white placeholder-gray-400"
              value={formData.FullName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="relative w-full mb-2">
          <User className="absolute left-2 top-2.5 h-5 w-5 text-white" />
            <input
              type="text"
              id="Username"
              name="Username"
              placeholder="Username"
              className="p-2 pl-10 border border-gray-600 rounded w-full bg-gray-700 text-white placeholder-gray-400"
              value={formData.Username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative w-full mb-2">
          <Mail className="absolute left-2 top-2.5 h-5 w-5 text-white" />
            <input
              type="email"
              id="Email"
              name="Email"
              placeholder="Email"
              className="p-2 pl-10 border border-gray-600 rounded w-full bg-gray-700 text-white placeholder-gray-400"
              value={formData.Email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="relative w-full mb-2">
          <KeyRound className="absolute left-2 top-2.5 h-5 w-5 text-white" />
            <input
              type="password"
              id="Password"
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
            className="text-white p-2 rounded w-full "
          >
            Register
          </button>
        </form>
        <div className="flex flex-col items-center mt-4">
          <p className="mt-4 text-white">
            Already have an account?{' '}
            <Link to="/" className="text-blue-400">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register