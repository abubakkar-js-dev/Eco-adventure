import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import UpdateProfile from "../pages/UpdateProfile";
import UserProfile from "../pages/UserProfile";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
            path: '/',
            element: <Home />,
            loader: () => fetch('blogs.json'),
        },
        {
            path: '/update-profile',
            element: <UpdateProfile />,

        },
        {
            path: '/user-profile',
            element: <UserProfile />
        }
      ],
      
    },
  ]);

  export default router