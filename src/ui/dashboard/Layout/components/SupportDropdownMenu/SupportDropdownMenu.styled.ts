import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 240px;
  right: -50px;
  bottom: -7px;
  transform: translateX(100%);
  flex-direction: column;
  margin: 3px 7px;
  border-radius: 6px;

  background: ${({ theme }) => theme.color.greyscale[1]};
  ${({ theme }) => theme.shadow.medium};
  ${({ theme }) => theme.layer[3]};

  &[data-visible='false'] {
    display: none;
  }
`;

export const RowWrapper = styled.div`
  height: 40px;
  display: flex;
  margin: 0 10px;
  
  & > * {
    width: 100%;
    height: fit-content;
    align-self: center;
    ${({ theme }) => theme.font.c_regular[5]};
    color: ${({ theme }) => theme.color.greyscale[18]};

    &:hover {
      color: ${({ theme }) => theme.color.greyscale[16]};
    }
  }

  a {
    display: flex;
    align-items: center;
  }
`;

export const StatusDot = styled.div<{
  status: string;
}>`
  height: 8px;
  width: 8px;
  border-radius: 4px;
  margin-left: 5px;
  background: ${({ status }) => status === 'UP' ? '#1FC8BE' : status === 'UNDERMAINTENANCE' ? '#f4cb16' :  status === 'HASISSUES' ? '#F47B7B' : '#FFFFFF'};
`;

export const ChatStatusDot = styled.div<{
  status: boolean;
}>`
  height: 8px;
  width: 8px;
  border-radius: 4px;
  margin-left: 5px;
  background: ${({ status }) => status === true ? '#1FC8BE' : '#F47B7B'};
`;
