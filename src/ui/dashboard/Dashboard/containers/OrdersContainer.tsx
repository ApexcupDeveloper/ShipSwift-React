import { SelectPageProvider } from '../../../@core/modules/ListBuilder/providers';
import { SelectTabProvider } from '../../../@core/modules/ListBuilder/providers/SelectTabProvider';

export const OrdersContainer: React.FC = ({ children }) => {
  return (
    <SelectPageProvider>
      <SelectTabProvider queryKey='orders-tab'>{children}</SelectTabProvider>
    </SelectPageProvider>
  );
};
