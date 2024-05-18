import { RouteObject } from "react-router-dom";

import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";

import pathname from "./pathname";

const routes: RouteObject[] = [
  { path: pathname.home, element: <HomePage /> },
  { path: pathname.notFound, element: <NotFoundPage /> },
];

export default routes;
