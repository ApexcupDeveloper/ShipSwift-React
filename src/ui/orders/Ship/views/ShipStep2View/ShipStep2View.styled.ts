import styled from 'styled-components';

export const BodyWrapper = styled.div`
	& > *:not(:last-child, :last-child) {
    margin-bottom: 23px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  position: absolute;
  width: calc(100% - 40px);
  background: white;
  padding-bottom: 10px;
  z-index: 1000;
  background:  ${({ theme }) => theme.color.greyscale[1]};
  
  & > * {
    min-width: 114px;
    margin-right: 16px;

    :first-child {
      width: 100%;
    }
  }
`;

export const DimensionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  & > *:last-child {
    margin-top: 16px;
  }
`;

export const CourierContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const AddCourier = styled.div`
  max-width: 120px;
`;