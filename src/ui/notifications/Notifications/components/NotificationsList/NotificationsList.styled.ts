import styled from 'styled-components';

export const BodyWrapper = styled.div``;

export const RowWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #f0f1f5;
  overflow-y: auto;
  margin-bottom: 20px;

  & > p {
    text-align: left;
    color: ${({ theme }) => theme.color.greyscale[14]};

    :last-child {
      color: ${({ theme }) => theme.color.greyscale[18]};
    }
  }
`;
