import { CheckIcon, UncheckIcon } from './WelcomeCheck.icons';
import * as styled from './WelcomeCheck.styled';

export type WelcomeCheckProps = {
  checked?: boolean;
  title: string;
};

export const WelcomeCheck: React.FC<WelcomeCheckProps> = ({ title, checked = false }) => {
  return (
    <styled.BodyWrapper>
      {checked ? <CheckIcon /> : <UncheckIcon />}
      <p children={title} />
    </styled.BodyWrapper>
  );
};
