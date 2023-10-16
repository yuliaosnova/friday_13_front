import { useSelector } from "react-redux";
import { Navigate } from "react-router";

import { getIsLoggedIn } from "../../redux/auth/authSelectors";

export const PublicRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLogged = useSelector(getIsLoggedIn);

  return isLogged ? <Navigate to={redirectTo} /> : <Component />;
};
