import styled from 'styled-components';
import { RestoreIcon16 } from '../../../../../assets/icons';

export const BodyWrapper = styled.div`
  width: 100%;
`;

export const NoteWrapperWithHovering = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  flex: 1;
  & > * {
    margin: 0 auto;
  };
`;


export const RestoreIcon = styled(RestoreIcon16)<{ active?: boolean }>`
    ${({ theme, active }) => active? `stroke: ${theme.color.main[7]}`: ''};

    &:hover {
      stroke: ${({ theme }) => theme.color.main[7]};
    }
`;