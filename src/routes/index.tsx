import { createBrowserRouter } from "react-router-dom";

import MainLayout from "layouts/MainLayout";

import routes from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: routes,
  },
]);

export default router;
