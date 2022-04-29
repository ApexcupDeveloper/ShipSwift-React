import { CustomerFilterProvider } from '../../../@core/modules/FilterBuilder/providers';
import { SelectPageProvider } from '../../../@core/modules/ListBuilder/providers';
import { PerPageProvider } from '../../../@core/modules/ListBuilder/providers/PerPageProvider';

export const ProductsContainer: React.FC = ({ children }) => {
  return (
    <PerPageProvider>
      <SelectPageProvider>
        <CustomerFilterProvider>{children}</CustomerFilterProvider>
      </SelectPageProvider>
    </PerPageProvider>
  );
};
