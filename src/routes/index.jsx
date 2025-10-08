// Feature-based imports
import {
  LoginPage,
  RegisterPage
} from '../features/auth';

import {
  AdminPage
} from '../features/admin';

import {
  ModeratorPage
} from '../features/moderator';

import {
  MentorDashboard,
  RegisterMentorPage
} from '../features/mentor';

// Common pages and components
import {
  HomePage,
  NotFoundPage
} from '../pages/common';

import { Layout } from '../components/layout';

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
    element: <Layout><ModeratorPage /></Layout>,
  },
  {
    path: "/admin",
    element: <Layout><AdminPage /></Layout>,
  },
  {
    path: "/mentor/dashboard",
    element: <Layout><MentorDashboard /></Layout>,
  },
  {
    path: "*",
    element: <Layout><NotFoundPage /></Layout>,
  },

],

);

export default routes;