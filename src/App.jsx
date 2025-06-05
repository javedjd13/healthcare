import { useRoutes } from "react-router-dom";
import { APP_ROUTES, AUTH_ROUTES } from "./routes/Routes";
const App = () => {
  const isLoggedIn = true;
  const routing = useRoutes(isLoggedIn ? APP_ROUTES : AUTH_ROUTES);
  return routing;
};

export default App;
