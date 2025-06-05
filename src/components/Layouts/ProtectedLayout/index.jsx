import { Navigate, Outlet, useLocation } from "react-router-dom";
import AppRoutes from "../../../routes/appRoutes";

export default function ProtectedRoute() {
  const isLoggedIn = true;
  const location = useLocation();

  return isLoggedIn ? (
    <div>
      <Outlet />
    </div>
  ) : (
    <Navigate state={{ path: location.pathname }} to={AppRoutes.LOGIN} />
  );
}
