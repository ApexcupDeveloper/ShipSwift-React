import styled from 'styled-components';
import { Nullable } from '../../../../../utils';

export const BodyWrapper = styled.div`
	background    : ${({ theme }) => theme.color.greyscale[1]};
	display       : flex;
	flex-direction: column;
	width         : 350px !important;

  & > *:not(:first-child) {
    padding: 0 25px;
  }
`;

export const DimensionFieldWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 12px;
`;

export const PrintWrapper = styled.div`
  display: flex;
  
  button {
    width      : 90px;
    margin-left: 12px;
    margin-top : auto;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width     : 100%;
  position: relative;

  .product-image {
    display: flex;
  }

  .button-image {
    display: none;
  }

  &:hover {
    .button-image {
      display: flex;
    }
  }
`;

export const OrderImage = styled.img`
  width     : 100%;
  object-fit: cover;
  border-radius: 4px 4px 0px 0px;
`;

export const ButtonImage = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  border-radius: 4px 4px 0px 0px;
  background: #4c4a4a99;
`;