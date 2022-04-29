import { SelectPageProvider } from '../../../@core/modules/ListBuilder/providers';
import { PerPageProvider } from '../../../@core/modules/ListBuilder/providers/PerPageProvider';
import { SelectTabProvider } from '../../../@core/modules/ListBuilder/providers/SelectTabProvider';

export const ProductsContainer: React.FC = ({ children }) => {
  return (
    <PerPageProvider>
      <SelectPageProvider>
        <SelectTabProvider queryKey="products-tab">{children}</SelectTabProvider>
      </SelectPageProvider>
    </PerPageProvider>
  );
};
