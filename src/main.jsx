import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import RegisterRBS from './RegisterRBS';
import RegisterBS from './RegisterBS';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/register-rbs',
        element:<RegisterRBS></RegisterRBS>
      },
      {
        path:'/register-bs',
        element:<RegisterBS></RegisterBS>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
