import {
  createBrowserRouter,
} from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import BlogDetails from "../pages/BlogDetails";
import Errorpage from "../pages/Errorpage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyProfile from "../pages/MyProfile";
import Register from "../pages/Register";
import UpdateProfile from "../pages/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "../pages/ForgetPassword";

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
            element: <PrivateRoute><UpdateProfile /></PrivateRoute>,

        },
        {
            path: '/user-profile',
            element: <PrivateRoute><MyProfile /></PrivateRoute>
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
        },
        {
          path: '/auth/forget-password',
          element: <ForgetPassword />
        }
      ]
    },
    {
      path: '*',
      element: <Errorpage />
    },
  ]);

  export default router