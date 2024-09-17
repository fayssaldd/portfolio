import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'


const router = createBrowserRouter([
  {
    path:"/portfolio/",
    element:<App/>,
    children:[
      {
        path:"/portfolio/",
        element:<Home/>
      },
      {
        path:"/portfolio/contact",
        element:<Contact/>
      },
      {
        path:"/",
        element:<h1>Hi</h1>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
