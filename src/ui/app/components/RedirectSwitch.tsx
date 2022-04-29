import { Redirect, Switch } from "react-router-dom";
import { AppRoutes } from "../api";

export const RedirectSwitch: React.FC = ({ children }) => {
  return (
    <Switch>
      {children}
      <Redirect to={AppRoutes[404]} />
    </Switch>
  );
};
