import React from 'react'


function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100"> 
        <h1 className="text-4xl font-bold mb-4">Welcome to IETI</h1>
        <p className="text-lg text-gray-700 mb-8">Your one-stop solution for everything!</p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Get Started</button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Learn More</button>
        </div>
      </div>
    </>
  );
}

export default Home