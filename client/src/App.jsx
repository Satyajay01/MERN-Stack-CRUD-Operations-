import React from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element: "Home page",
    },
    {
      path:"/add",
      element: "User add Page",
    },
    {
      path:"/edit",
      element: "Update User Page",
    },
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App