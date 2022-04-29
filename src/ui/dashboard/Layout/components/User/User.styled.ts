import styled from 'styled-components';

export const BodyWrapper = styled.div`
  position: relative;
  margin: 0 !important;
`;

export const UserWrapper = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  cursor: pointer;

  &[data-is-open='false'] {
    justify-content: center;
  }
`;

export const Name = styled.p`
  ${({ theme }) => theme.font.c_medium[5]};
  color: ${({ theme }) => theme.color.greyscale[16]};
`;

export const AvatarContainer = styled.div`
  &[data-is-open='true'] {
    margin-right: 10px;
  }
`;

export const Avatar = styled.img`
  border-radius: 32px;
  height: 32px;
  width: 32px;
  object-fit: fill;
`;

export const ArrowWrapper = styled.div`
  display: flex;
`;
