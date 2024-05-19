import { RouteObject } from "react-router-dom";

import AdminAuthLayout from "layouts/AdminAuthLayout";
import AdminLoginPage from "pages/AdminLoginPage";
import ErrorPage from "pages/ErrorPage";
import HomePage from "pages/HomePage";

import adminPathname from "./adminPathname";

const routes: RouteObject[] = [
  {
    path: adminPathname.login,
    element: <AdminLoginPage />,
  },
  {
    path: "/admin",
    element: <AdminAuthLayout />,
    children: [
      { element: <HomePage /> },
      { path: adminPathname.error, element: <ErrorPage /> },
    ],
  },
];

export default routes;
