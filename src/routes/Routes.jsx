import { lazy } from "react";
import { Navigate } from "react-router-dom";
import AppRoutes from "./appRoutes";
import Loadable from "../components/Loadable";
import SignUp from "../components/Auth/pages/SignUp";

const Login = Loadable(lazy(() => import("../components/Auth/pages/Login")));
const Home = Loadable(lazy(() => import("../pages/Home")));
const BlankLayout = Loadable(
  lazy(() => import("../components/Layouts/BlankLayout"))
);
const FullLayout = Loadable(
  lazy(() => import("../components/Layouts/ProtectedLayout"))
);

const AUTH_ROUTES = [
  {
    path: "/",
    element: <BlankLayout />,
    children: [
      { path: "/", element: <Login /> },
      { path: AppRoutes.LOGIN, element: <Login /> },
    ],
  },
];

const APP_ROUTES = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to={AppRoutes.LOGIN} /> },
      { path: AppRoutes.LOGIN, exact: true, element: <Login /> },
      { path: AppRoutes.SIGN_UP, element: <SignUp /> },
      { path: AppRoutes.HOME, exact: true, element: <Home /> },
    ],
  },
];

export { APP_ROUTES, AUTH_ROUTES };
