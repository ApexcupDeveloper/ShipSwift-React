import styled from 'styled-components';

export const LeftBlock = styled.div`
  padding-right: 0px;
  & > *:not(:last-child) {
    margin-right: 11px;
  }
`;

export const TrialPeriod = styled.div`
height: fit-content;
  color: white;
  float: left;
  line-height: 1em;
`;

export const SomeText = styled.div`
  float: left;
  height: fit-content;
  color: ${({ theme }) => theme.color.greyscale[14]};
  font-size: 13px;
  font-weight: 400;
  line-height: 1em;
`;
