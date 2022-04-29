import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Tooltip } from '../../../../@core/modules/Tooltip';

import * as styled from './NavLink.styled';

type Props = {
  icon      : React.ReactNode;
  label     : string;
  link      : string;
  showLabel?: boolean;
  onClick?  : () => void;
};

export const NavLink: React.VFC<Props> = ({ icon, label, link, showLabel = true, onClick }) => {
  const { pathname } = useLocation();
  const active = useMemo(() => pathname.includes(link), [link, pathname]);
  const support = link === 'support' ? true : false;

  if(link === 'support') {
    return (
      <styled.SupportWrapper onClick={onClick}>
        <styled.BodyWrapper data-is-open={showLabel}>
          <styled.IconWrapper data-active={active} data-is-open={showLabel}>
            <Tooltip align="left" position="center" disabled={showLabel} content={label}>
              {icon}
            </Tooltip>
          </styled.IconWrapper>
          {showLabel && <styled.Label data-active={active}>{label}</styled.Label>}
        </styled.BodyWrapper>
      </styled.SupportWrapper>
    );
  }

  return (
    <Link to={link}>
      <styled.BodyWrapper data-is-open={showLabel}>
        <styled.IconWrapper data-active={active} data-is-open={showLabel}>
          <Tooltip align="left" position="center" disabled={showLabel} content={label}>
            {icon}
          </Tooltip>
        </styled.IconWrapper>
        {showLabel && <styled.Label data-active={active}>{label}</styled.Label>}
      </styled.BodyWrapper>
    </Link>
  );
};
