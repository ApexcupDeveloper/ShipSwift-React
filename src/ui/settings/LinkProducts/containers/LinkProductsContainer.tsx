import { SelectPageProvider, SelectTabProvider } from '../../../@core/modules/ListBuilder/providers';
import { PerPageProvider } from '../../../@core/modules/ListBuilder/providers/PerPageProvider';

export const LinkProductsContainer: React.FC = ({ children }) => {
  return (
    <PerPageProvider>
      <SelectTabProvider queryKey={'product-type'}>
        <SelectPageProvider>{children}</SelectPageProvider>
      </SelectTabProvider>
    </PerPageProvider>
  );
};
