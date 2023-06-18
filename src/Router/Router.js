import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Bedroom from "../Pages/Bedroom/Bedroom";
import ComingSoon from "../Share/ComingSoon";
import React from 'react';
import Login from '../Share/Login';
import Signup from '../Share/Signup';
const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[

        ]
    },
    {
        path: "/",
        element: <Bedroom />,
      },
    {
        path: "/comingsoon",
        element: <ComingSoon></ComingSoon>,
      },
    {
        path: "/login",
        element: <Login></Login>,
      },
    {
        path: "/signup",
        element: <Signup></Signup>
      },
])
export default router;