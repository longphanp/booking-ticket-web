import { createBrowserRouter } from "react-router-dom";

import AdminLayout from "layouts/AdminLayout";
import MainLayout from "layouts/MainLayout";
import NotFoundPage from "pages/NotFoundPage";

import adminRoutes from "./adminRoutes";
import routes from "./routes";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminLayout />,
    children: adminRoutes,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: routes,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
