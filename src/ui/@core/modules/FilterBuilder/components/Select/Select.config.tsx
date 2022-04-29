import { StatusFilter } from '../..';
import { CustomerFilter } from '../..';
import { OrderFilter } from '../..';
import { DateRangeFilter } from '../..';
import { StoreFilter } from '../..';
import { TagsFilter } from '../..';
import { NumberOfLineItemsFilter } from '../..';
import { StockQuantityFilter } from '../..';

import { WordFunc } from '../../../../../../assets/locale';

import {
  BookmarkIcon16,
  OrdersIcon16,
  UserIcon16,
  CalendarIcon16,
  StoreTrolleyIcon16,
  TagIcon16,
  HashIcon16,
  StockQuantityIcon16,
} from '../../../../../../assets/icons';

export type SelectType =
  | 'status'
  | 'customer'
  | 'order'
  | 'dateRange'
  | 'store'
  | 'tags'
  | 'numberOfLinesItems'
  | 'stockQuantity';

export const selectMap = (word: WordFunc) => (type: SelectType) => {
  switch (type) {
    case 'status':
      return {
        label: word('global.status'),
        icon: <BookmarkIcon16 />,
        section: <StatusFilter />,
      };
    case 'customer':
      return {
        label: word('global.customer'),
        icon: <UserIcon16 />,
        section: <CustomerFilter />,
      };
    case 'order':
      return {
        label: word('global.order'),
        icon: <OrdersIcon16 />,
        section: <OrderFilter />,
      };
    case 'dateRange':
      return {
        label: word('global.date.range'),
        icon: <CalendarIcon16 />,
        section: <DateRangeFilter />,
      };
    case 'store':
      return {
        label: word('global.store'),
        icon: <StoreTrolleyIcon16 />,
        section: <StoreFilter />,
      };
    case 'tags':
      return {
        label: word('global.tags'),
        icon: <TagIcon16 />,
        section: <TagsFilter />,
      };
    case 'numberOfLinesItems':
      return {
        label: word('global.number.of.line.items'),
        icon: <HashIcon16 />,
        section: <NumberOfLineItemsFilter />,
      };
    case 'stockQuantity':
      return {
        label: word('global.stock.qty'),
        icon: <StockQuantityIcon16 />,
        section: <StockQuantityFilter />,
      };
  }
};
