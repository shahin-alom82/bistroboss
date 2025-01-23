import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Route/Home.jsx'
import RootLayout from './Route/RootLayout.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  children: [
    {
      path: "/",
      element: <Home />
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
