import { TruckIcon20 } from '../../../../../assets/icons';
import styled from 'styled-components';

export const BodyWrapper = styled.div`
  width: 100%;
`;

export const ItemWrapper = styled.div`
  display        : flex;
  align-items    : center;
  justify-content: space-between;
  min-width      : 100%;

  & > * {
    flex: 1;
    min-width      : 100px;
  }
`;

export const TitleWrapper = styled.div`
  display        : flex;
  align-items    : center;
  justify-content: space-between;
  min-width      : 100%;

  & > * {
		flex: 1;
    min-width      : 100px;
	}

	& > p:first-child {
    text-align: left;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  & > * {
    flex: 1;
  }
`;

export const NoteWrapper = styled.div`
  display: flex;
  & > * {
    margin: 0 auto;
  }

  &:hover {
    * {
      fill: ${({ theme }) => theme.color.main[7]};
      ${({ theme }) => theme.font.c_regular[5]};
    }
  }
`;

export const NoteWrapperWithHovering = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  & > * {
    margin: 0 auto;
  };
`;

export const TruckIcon = styled(TruckIcon20)<{ active?: string }>`
    ${({ theme, active }) => active === "true" ? `stroke: ${theme.color.main[7]}`: ''};

    &:hover {
      stroke: ${({ theme }) => theme.color.main[7]};
    }
`;

export const LoadingRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center !important;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;