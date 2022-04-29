import { Link } from 'react-router-dom';

import * as styled from './SettingsCard.styled';

export type SettingsCardProps = {
  icon: React.ReactNode;
  label: string;
  link: string;
  isAdmin: boolean;
  userBox?: boolean;
  description: string;
};

export const SettingsCard: React.VFC<SettingsCardProps> = ({ icon, label, link, description }) => {
  return (
    <Link to={link}>
      <styled.BodyWrapper>
        <styled.LabelWrapper>
          <styled.IconWrapper children={icon} />
          <styled.Label children={label} />
        </styled.LabelWrapper>
        <styled.Description children={description} />
      </styled.BodyWrapper>
    </Link>
  );
};
