import { CustomerFilterProvider } from '../../../@core/modules/FilterBuilder/providers';
import { SelectPageProvider } from '../../../@core/modules/ListBuilder/providers';
import { SelectTabProvider } from '../../../@core/modules/ListBuilder/providers/SelectTabProvider';

export const ProductsContainer: React.FC = ({ children }) => {
  return (
    <SelectPageProvider>
      <SelectTabProvider queryKey='product-tab'>
        <CustomerFilterProvider>
          {children}
        </CustomerFilterProvider>
      </SelectTabProvider>
    </SelectPageProvider>
  );
};
