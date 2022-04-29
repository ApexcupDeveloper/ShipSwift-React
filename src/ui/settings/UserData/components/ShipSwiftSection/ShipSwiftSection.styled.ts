import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display: flex;
`;

export const ThemeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .switch-theme {
    padding-top: 2px !important;
  }
`;

export const ToogleWrapper = styled.div`
  display: flex;
`;

export const ThemeText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color:  ${({ theme }) => theme.color.greyscale[14]};
  margin-right: 10px;
`;

export const AutoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
`;

export const TimePickerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
`;

export const TimePickerDividen = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`;