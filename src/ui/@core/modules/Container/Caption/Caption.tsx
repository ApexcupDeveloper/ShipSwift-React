import * as styled from './Caption.styled';

type Props = {
  caption: string;
};

export const Caption: React.FC<Props> = ({ caption, children }) => {
  return (
    <styled.BodyWrapper>
      <styled.Caption>{caption}</styled.Caption>
      {children}
    </styled.BodyWrapper>
  );
};
