import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import UpdateProfile from "../pages/UpdateProfile";
import UserProfile from "../pages/UserProfile";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BlogDetails from "../pages/BlogDetails";
import PrivateRoute from "./PrivateRoute";
import Errorpage from "../pages/Errorpage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <h2>Page not found</h2>,
      children: [
        {
            path: '/',
            element: <Home />,
            // loader: () => fetch('blogs.json'),
        },
        {
            path: '/update-profile',
            element: <UpdateProfile />,

        },
        {
            path: '/user-profile',
            element: <UserProfile />
        },
        {
          path: 'blog-details/:id',
          element: <PrivateRoute><BlogDetails /></PrivateRoute>,
          loader: () => fetch('/blogs.json'),
        }
      ],
      
    },
    {
      path: 'auth',
      element: <AuthLayout />,
      children: [
        {
          path: '/auth/login',
          element: <Login />
        },
        {
          path: '/auth/register',
          element: <Register />
        }
      ]
    },
    {
      path: '*',
      element: <Errorpage />
    },
  ]);

  export default router