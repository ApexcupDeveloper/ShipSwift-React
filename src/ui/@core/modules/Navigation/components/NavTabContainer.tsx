import { Portal } from "../../Other";

export const NavTabContainer: React.FC = ({ children }) => {
  return <Portal id='nav-tab-portal' children={children}/>;
};
