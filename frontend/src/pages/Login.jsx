import React from 'react';
import { KeyRound, Mail } from 'lucide-react';
import bg from '../assets/bg.gif';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({

  })

  return (
    <div className="bg-black min-h-screen flex items-center justify-center"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="bg-gray-800 bg-opacity-75 p-12 rounded shadow-md border border-gray-600">
        <h1 className="text-4xl font-bold mb-4 pb-5 text-white">Login</h1>
        <form className="flex flex-col items-center w-full">
          <div className="relative w-full mb-2">

            <Mail className="absolute left-2 top-2.5 h-5 w-5 text-white" />
            <input
              type="text"
              placeholder="Email"
              className="p-2 pl-10 border border-gray-600 rounded w-full bg-gray-700 text-white placeholder-gray-400"
            />
          </div>

          <div className="relative w-full mb-2">
            <KeyRound className="absolute left-2 top-2.5 h-5 w-5 text-white" />
            <input
              type="password"
              placeholder="Password"
              className="p-2 pl-10 border border-gray-600 rounded w-full bg-gray-700 text-white placeholder-gray-400"
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