import { createBrowserRouter } from "react-router-dom";

import NotFoundPage from "pages/NotFoundPage";

import adminRoutes from "./adminRoutes";
import routes from "./routes";

const router = createBrowserRouter([
  {
    path: "/admin",
    children: adminRoutes,
  },
  {
    path: "/",
    children: routes,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
