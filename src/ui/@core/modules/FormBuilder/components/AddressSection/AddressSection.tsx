import * as styled from './AddressSection.styled';

type Props = { label: string };
type AddressFC = React.FC<Props> & {
  Field: typeof styled.Field;
};

const AddressSection: AddressFC = ({ label, children }) => {
  return (
    <styled.BodyWrapper>
      <styled.Label children={label} />
      {children}
    </styled.BodyWrapper>
  );
};

AddressSection.Field = styled.Field;

export { AddressSection };
export default AddressSection;
