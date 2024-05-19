import { Navigate, Outlet } from "react-router-dom";

import useAuthentication from "hooks/useAuthentication";
import adminPathname from "routes/adminPathname";

export default function AdminAuthLayout() {
  const isAuth = useAuthentication();
  if (!isAuth) return <Navigate to={adminPathname.login} />;

  return <Outlet />;
}
