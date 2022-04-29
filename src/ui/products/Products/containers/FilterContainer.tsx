import {
  StoreFilterProvider,
  TagsFilterProvider,
  StockQuantityFilterProvider,
} from '../../../@core/modules/FilterBuilder/providers';
import { ShowedItemFilterProvider } from '../../../@core/modules/FilterBuilder/components/FiltersRow/useShowedItemFilter';

export const FilterContainer: React.FC = ({ children }) => {
  return (
    <ShowedItemFilterProvider>
      <StockQuantityFilterProvider>
        <TagsFilterProvider>
          <StoreFilterProvider>{children}</StoreFilterProvider>
        </TagsFilterProvider>
      </StockQuantityFilterProvider>
    </ShowedItemFilterProvider>
  );
};
