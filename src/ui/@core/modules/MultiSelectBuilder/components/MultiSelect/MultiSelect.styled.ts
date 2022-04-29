import styled from 'styled-components';

export const RelativeWrapper = styled.div`
  position: relative;
  visibility: hidden;

  &[data-visible='true'] {
    visibility: visible;
  }
`;

export const BodyWrapper = styled.div`
  height: 56px;
  display: flex;
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);

  background-color: #262739;
  border-radius: 28px;
  align-items: center;
  padding: 0 30px;

  & > *:not(:last-child) {
    margin-right: 30px;;
  }
`;
