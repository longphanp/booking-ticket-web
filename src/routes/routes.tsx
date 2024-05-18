import { RouteObject } from "react-router-dom";

import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import NotFoundPage from "pages/NotFoundPage";

import pathname from "./pathname";

const routes: RouteObject[] = [
  { path: pathname.home, element: <HomePage /> },
  { path: pathname.login, element: <LoginPage /> },
  { path: pathname.notFound, element: <NotFoundPage /> },
];

export default routes;
