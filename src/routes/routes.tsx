import { RouteObject } from "react-router-dom";

import AuthLayout from "layouts/AuthLayout";
import ErrorPage from "pages/ErrorPage";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";

import pathname from "./pathname";

const routes: RouteObject[] = [
  {
    path: pathname.login,
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: pathname.home, element: <HomePage /> },
      { path: pathname.error, element: <ErrorPage /> },
    ],
  },
];

export default routes;
