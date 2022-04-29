import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  /* Focus */
  input:focus + .ant-radio-inner {
    box-shadow: none !important;
  }

  /* Checked */
  .ant-radio-checked .ant-radio-inner {
    border-color: ${({ theme }) => theme.color.main[7]};
  }

  .ant-radio-checked::after {
    border: 1px solid ${({ theme }) => theme.color.main[7]};
  }

  .ant-radio-inner:after {
    background-color: ${({ theme }) => theme.color.main[7]};
  }

  /* Default */
  .ant-radio-inner {
    background: ${({ theme }) => theme.color.greyscale[1]};
    border-color: ${({ theme }) => theme.color.greyscale[6]};
  }

  /* Active */
  .ant-radio-input:focus + .ant-radio-inner,
  .ant-radio-wrapper:hover .ant-radio,
  .ant-radio:hover .ant-radio-inner {
    border-color: ${({ theme }) => theme.color.main[7]};
  }

  /* Disabled */
  .ant-radio-disabled {
    color: ${({ theme }) => theme.color.greyscale[5]};

    .ant-radio-inner {
      background-color: ${({ theme }) => theme.color.greyscale[2]};
    }

    .ant-radio-inner:after {
      border-color: ${({ theme }) => theme.color.greyscale[6]};
      background-color: ${({ theme }) => theme.color.greyscale[5]};
    }
  }
`;

export const Title = styled.p`
  ${({ theme }) => theme.font.c_regular[5]};
  color: ${({ theme }) => theme.color.greyscale[14]};
  margin-left: 2px;

  &[data-bold='true'] {
    font-weight: 500;
  }
`;
