import styled from 'styled-components';

export const BodyWrapper = styled.div`
  /* Animation */
  .ant-click-animating-node,
  [ant-click-animating-without-extra-node='true']:after {
    box-shadow: none !important;
  }

  .ant-switch-checked[data-size='default'] .ant-switch-handle {
    left: calc(100% - 18px);
  }

  .ant-switch {
    /* Default */
    background-color: ${({ theme }) => theme.color.greyscale[8]};

    &[data-size='default'] {
      height: 20px !important;
      min-width: 34px !important;
    }

    &-handle:before {
      box-shadow: none !important;
    }

    &-handle {
      max-width: 16px;
      max-height: 16px;
    }

    /* Checked */
    &-checked {
      background-color: ${({ theme }) => theme.color.main[7]};
    }

    /* Focus */
    :focus,
    &-checked:focus {
      box-shadow: none !important;
    }

    /* Disabled */
    &-disabled,
    &-loading {
      opacity: 1;
      background-color: ${({ theme }) => theme.color.greyscale[3]} !important;
    }
  }
`;
