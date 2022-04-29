import { SelectPageProvider } from '../../../@core/modules/ListBuilder/providers';
import { PerPageProvider } from '../../../@core/modules/ListBuilder/providers/PerPageProvider';

export const OrdersContainer: React.FC = ({ children }) => {
  return (
    <PerPageProvider>
      <SelectPageProvider>{children}</SelectPageProvider>
    </PerPageProvider>
  );
};
