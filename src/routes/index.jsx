import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import NotFoundPage from "../pages/error/NotFoundPage";
import RegisterMentorPage from "../pages/mentor/RegisterMentorPage";
import HomePage from "../pages/home/HomePage";
import ModeratorPage from "../pages/moderator/ModeratorPage";
import Layout from "../components/Layout/Layout";
import ModeratorRoute from "../components/ModeratorRoute/ModeratorRoute";

import { createBrowserRouter, Navigate } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout><HomePage /></Layout>,
  },
  {
    path: "/login",
    element: <Layout><LoginPage /></Layout>,
  },

  {
    path: "/register",
    element: <Layout><RegisterPage /></Layout>,
  },
  {
    path: "/register-mentor",
    element: <Layout><RegisterMentorPage /></Layout>,
  },
  {
    path: "/moderator",
    element: <Layout><ModeratorRoute><ModeratorPage /></ModeratorRoute></Layout>,
  },
  {
    path: "*",
    element: <Layout><NotFoundPage /></Layout>,
  },

],

);

export default routes;