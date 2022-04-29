
import { Redirect, Route } from "react-router-dom";
import { useAuth0 } from "../../../business/auth/hooks";
import { AppRoutes } from "../api/routes";

type Props = React.ComponentProps<typeof Route>;

export const SignUpRoute: React.FC<Props> = ({ ...rest  }) => {
  const { isSignUpFinished,isAuthenticated } = useAuth0();

  if (!isSignUpFinished && isAuthenticated)
    return <Route {...rest} />;

  return <Redirect to={AppRoutes.Dashboard.Index} />
};
