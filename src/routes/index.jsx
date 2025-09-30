import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

import ProfilePage from "../pages/user/ProfilePage";

import { createBrowserRouter, Navigate } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  
  {
    path: "/register",
    element: <RegisterPage />,
  
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },

],

);

export default routes;