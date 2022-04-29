import styled from 'styled-components';

export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0 25px;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;

  & > *:not(:first-child) {
    margin-left: 10px;
  }
`;

/* Cell */
export const CellWrapper = styled.div`
  display: flex;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  width: fit-content;
  white-space: nowrap;
`;

export const Label = styled.div``;

export const ButtonWrapper = styled.div`
  height: 28px;
  & > * {
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  margin: 18px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-right: 14px;
  }
`;

export const FoterWrapper = styled.div`
  display: flex;
  & > *:first-child {
    margin-right: 20px;
  }
`;

export const AllApliedsName = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.color.greyscale[12]};
`;

export const AllApliedsText = styled.div`
  color: ${({ theme }) => theme.color.greyscale[9]};
  margin-left: 5px;
`;
