import styled from 'styled-components';
import { ArrowDownIconSmall16, ArrowUpIcon } from '../../../../assets/icons';

export const BodyWrapper = styled.div`
  position: relative;
`;

export const TimeContainer = styled.div`
    height: 36px;
    width: 100%;
    background: ${({ theme }) => theme.color.greyscale[1]};
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.color.greyscale[2]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
    cursor: pointer;

    &:hover {
      border-color: ${({ theme }) => theme.color.main[7]} !important;
    }
`;

export const TimeWrapper = styled.div`
    font-size: 13px;
    line-height: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.greyscale[16]};
`;

export const TimeDropdownContainer = styled.div`
    margin-top: 10px;
    background: ${({ theme }) => theme.color.greyscale[1]};
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.color.greyscale[2]};
    box-shadow: 0px 5px 20px 0px #9499a933;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    position: absolute;
    width: 100%;
    z-index: 10;
    min-width: 250px;
`;

export const TimeDropdownWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const TimeInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    margin-left: 5px;
`;

export const Dividen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 5px;
    color: ${({ theme }) => theme.color.greyscale[18]};
`;

export const TimeInput = styled.input`
    width: 54px;
    height: 36px;
    background: ${({ theme }) => theme.color.greyscale[1]};
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.color.greyscale[2]};
    text-align: center;
    margin: 8px 0;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => theme.color.greyscale[18]};
`;


export const AmPmWrapper = styled.div`
    display: flex;
`;

export const AmButton = styled.div<{
  ampm: boolean;
}>`
    width: 44px;
    height: 36px;
    background: ${({ ampm }) => ampm ? ({ theme }) => theme.color.greyscale[2] : ({ theme }) => theme.color.background[2]};
    border-radius: 4px 0px 0px 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    cursor: pointer;
    color: ${({ ampm }) => ampm ? ({ theme }) => theme.color.main[8] : '#BCC1D0'};
`;

export const PmButton = styled.div<{
  ampm: boolean
}>`
    width: 44px;
    height: 36px;
    background: ${({ ampm }) => ampm ? ({ theme }) => theme.color.greyscale[2] : ({ theme }) => theme.color.background[2]};
    border-radius: 0px 4px 4px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    cursor: pointer;
    color: ${({ ampm }) => ampm ? ({ theme }) => theme.color.main[8] : '#BCC1D0'};
`;

export const Divider = styled.div`
    width: 1px;
    height: 76px;
    background: ${({ theme }) => theme.color.greyscale[2]};
`;

export const ArrowUp = styled(ArrowUpIcon) <{ active?: boolean }>`
    ${({ theme, active }) => active ? `stroke: ${theme.color.main[7]}` : ''};
    cursor: pointer;

    &:hover {
      stroke: ${({ theme }) => theme.color.main[7]};
    }
`;

export const ArrowDown = styled(ArrowDownIconSmall16) <{ active?: boolean }>`
    ${({ theme, active }) => active ? `stroke: ${theme.color.main[7]}` : ''};
    cursor: pointer;

    &:hover {
      stroke: ${({ theme }) => theme.color.main[7]};
    }
`;