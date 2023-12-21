import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Welcome from './pages/Welcome'
import About from './pages/About'

const router = createBrowserRouter([
  { 
    path: "/welcome",
    element: <Welcome />

  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about/:pokeName",
    element: <About />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>

)
