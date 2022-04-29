import { Select, SectionsList } from '../../../../@core/modules/FilterBuilder/components';

type Props = {
  visible?: boolean;
};

export const FiltersProductsForm: React.FC<Props> = ({ children, visible }) => {
  return (
    <SectionsList>
      <Select type="store" />
      <Select type="tags" />
      <Select type="stockQuantity" />
    </SectionsList>
  );
};
