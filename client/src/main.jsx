import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home.jsx'
import SignUp from './pages/signUp.jsx'
import Login from './pages/login.jsx'
import ErrorPage from './pages/error.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path:"/signup",
    element: <SignUp />
  },
  {
    path:"/login",
    element: <Login />
  },
  {
    path:"/create-new-quiz"
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
