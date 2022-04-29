import { SelectPageProvider } from '../../../@core/modules/ListBuilder/providers';

export const OrdersContainer: React.FC = ({ children }) => {
  return <SelectPageProvider>{children}</SelectPageProvider>;
};
