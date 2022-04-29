import styled from 'styled-components';

export const BodyWrapper = styled.div`
  /* Default */

  .ant-tooltip {
    padding: 0;
    height: fit-content;
    width: fit-content;
  }

  &[data-tooltip-placement='top'] .ant-tooltip {
    top: 0 !important;
    left: 50% !important;
    transform: translate(-50%, -100%);
  }
  &[data-tooltip-placement='bottom'] .ant-tooltip {
    top: 0 !important;
    left: 50% !important;
    transform: translate(-50%, 10px);
  }

  .ant-tooltip-arrow {
    display: none;
  }

  .ant-tooltip-inner,
  .ant-tooltip-arrow-content {
    background-color: transparent;
    color: ${({ theme }) => theme.color.greyscale[14]};
    font: ${({ theme }) => theme.font.p};
    box-shadow: none;
  }

  .ant-slider-rail {
    background-color: ${({ theme }) => theme.color.greyscale[3]};
  }
  .ant-slider-handle,
  .ant-slider-handle-1 {
    border: 3px solid ${({ theme }) => theme.color.main[6]} !important;
    transform: scale(1.2, 1.2) !important;
  }
  .ant-slider-track,
  .ant-slider-track-1 {
    background-color: ${({ theme }) => theme.color.main[6]};
  }

  .ant-slider-handle-click-focused {
    box-shadow: ${({ theme }) => theme.shadow.light};
  }

  /* Hover */
  .ant-slider:hover .ant-slider-handle,
  .ant-slider-handle:hover,
  .ant-slider-handle-1:hover {
    border-color: ${({ theme }) => theme.color.main[7]} !important;
  }

  .ant-slider:hover .ant-slider-track {
    background-color: ${({ theme }) => theme.color.main[7]};
  }

  .ant-slider:hover .ant-slider-rail {
    background-color: ${({ theme }) => theme.color.greyscale[5]};
  }

  /* Focus */
  .ant-slider-handle:focus,
  .ant-slider-handle1:focus {
    border-color: ${({ theme }) => theme.color.main[8]} !important;
  }
`;
