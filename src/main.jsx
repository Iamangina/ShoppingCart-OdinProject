import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Homepage from './components/Homepage'
import Shoppage from './components/Shoppage'
import Cartpage from './components/Cartpage'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Homepage /> }, 
      { path: 'shop', element: <Shoppage /> },
      { path: 'cart', element: <Cartpage /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
