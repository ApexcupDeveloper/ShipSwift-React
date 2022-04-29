import {
  CustomerFilterProvider,
  DateRangeFilterProvider,
  NumberOfLineItemsFilterProvider,
  OrderFilterProvider,
  StatusFilterProvider,
  StoreFilterProvider,
  TagsFilterProvider,
} from '../../../@core/modules/FilterBuilder/providers';
import { ShowedItemFilterProvider } from '../../../@core/modules/FilterBuilder/components/FiltersRow/useShowedItemFilter';

export const FilterContainer: React.FC = ({ children }) => {
  return (
    <ShowedItemFilterProvider>
      <TagsFilterProvider>
        <DateRangeFilterProvider>
          <CustomerFilterProvider>
            <NumberOfLineItemsFilterProvider>
              <OrderFilterProvider>
                <StatusFilterProvider>
                  <StoreFilterProvider>{children}</StoreFilterProvider>
                </StatusFilterProvider>
              </OrderFilterProvider>
            </NumberOfLineItemsFilterProvider>
          </CustomerFilterProvider>
        </DateRangeFilterProvider>
      </TagsFilterProvider>
    </ShowedItemFilterProvider>
  );
};
