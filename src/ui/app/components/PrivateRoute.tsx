
import { Redirect, Route } from "react-router-dom";
import { useAuth0 } from "../../../business/auth/hooks";
import { AppRoutes } from "../api/routes";

type Props = React.ComponentProps<typeof Route>;

export const PrivateRoute: React.FC<Props> = ({ ...rest  }) => {
  const { isAuthenticated,isLoading } = useAuth0();
  if (isAuthenticated)
    return <Route {...rest} />;
    
  return <Redirect to={AppRoutes.Auth.SignIn} />
};
