import { Select, SectionsList } from '../../../../@core/modules/FilterBuilder';

type Props = {
  visible?: boolean;
};

export const FiltersOrderForm: React.FC<Props> = ({ children, visible }) => {
  return (
    <SectionsList>
      <Select type="status" />
      <Select type="order" />
      <Select type="customer" />
      <Select type="dateRange" />
      <Select type="store" />
      <Select type="tags" />
      <Select type="numberOfLinesItems" />
    </SectionsList>
  );
};
