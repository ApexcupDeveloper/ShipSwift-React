import { AlertInfoIcon20 } from '../../../../../assets/icons';

import * as styled from './WelcomeAlert.styled';
import * as stepStyled from '../WelcomeStep/WelcomeStep.styled';

type Props = {
	title: string;
	description: string;
  customStyle?: any;
};

export const WelcomeAlert: React.VFC<Props> = ({ title, description, customStyle }) => {
  return (
    <styled.BodyWrapper style={customStyle}>
      <AlertInfoIcon20 />
      <stepStyled.TitleContainer>
        <stepStyled.Title children={title} />
        <stepStyled.Description children={description} />
      </stepStyled.TitleContainer>
    </styled.BodyWrapper>
  );
};
