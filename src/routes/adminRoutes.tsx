import { RouteObject } from "react-router-dom";

import AdminAuthLayout from "layouts/AdminAuthLayout";
import AdminHomePage from "pages/AdminHomePage";
import AdminLoginPage from "pages/AdminLoginPage";
import AdminTicketPage from "pages/AdminTicketsPage";
import ErrorPage from "pages/ErrorPage";

import adminPathname from "./adminPathname";

const routes: RouteObject[] = [
  {
    path: adminPathname.login,
    element: <AdminLoginPage />,
  },
  {
    element: <AdminAuthLayout />,
    children: [
      { path: adminPathname.home, element: <AdminHomePage /> },
      { path: adminPathname.tickets, element: <AdminTicketPage /> },
      { path: adminPathname.error, element: <ErrorPage /> },
    ],
  },
];

export default routes;
