import { RedirectSwitch } from '../../../app/components';
import { DashboardView } from '../views/DashboardView';

export const DashboardRouteLayout: React.FC = ({ children }) => {
  return (
    <DashboardView>
      <RedirectSwitch>
        {children}
      </RedirectSwitch>
    </DashboardView>
  );
};
