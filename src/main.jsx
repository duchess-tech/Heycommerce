import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from './pages/Login'
import Home from './Home'
import Signup from './pages/Signup'
import Showmore from './pages/showmore'
import Cartprovider from './cartprovider'
import Addcart from './addcart'
import 'antd/dist/reset.css';


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/:pid", element: <Showmore /> },
  { path: "/Login", element: <Login /> },
  { path: "/Signup", element: <Signup /> },
  { path: "/showmore", element: <Showmore /> },
  { path: "/addcart", element: <Addcart /> },
  // {
  //   path: "/", element: <Home />,
  //   children: [
  //     { path: "Login", element: <Login /> },
  //     { path: "Signup", element: <Signup /> }
  //   ]
  // }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cartprovider>
      <RouterProvider router={router} />
    </Cartprovider>
  </React.StrictMode>
)
