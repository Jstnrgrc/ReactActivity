import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]); // State to store user data

  useEffect(() => {
    // Fetch user data from the backend
    axios.get('http://localhost:5000/api/users/viewUsers') // Replace with your API endpoint
      .then((response) => {
        setUsers(response.data); // Store the fetched data in state
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Users</h1>
      <p className="text-lg text-gray-700 mb-8">Manage your users here!</p>
      <div className="overflow-x-auto w-full px-8">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">User ID</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Full Name</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Email</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.UserID}
                className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} // Alternating row colors
              >
                <td className="py-3 px-6 text-sm text-gray-900">{user.StudentID}</td>
                <td className="py-3 px-6 text-sm text-gray-900">{user.FullName}</td>
                <td className="py-3 px-6 text-sm text-gray-900">{user.Email}</td>
                <td className="py-3 px-6 text-sm">
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;