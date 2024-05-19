import { Navigate, Outlet } from "react-router-dom";

import useAuthentication from "hooks/useAuthentication";
import pathname from "routes/pathname";

export default function AuthLayout() {
  const isAuth = useAuthentication();
  if (!isAuth) return <Navigate to={pathname.login} />;

  return <Outlet />;
}
