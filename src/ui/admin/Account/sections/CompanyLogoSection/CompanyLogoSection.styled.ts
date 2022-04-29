import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display      : flex;
  margin-bottom: 36px;
  align-items: center;
  
  & > :first-child {
    margin-right: 20px;
  }
`;

export const LogoFileSection = styled.div`
  display       : flex;
  flex-direction: column;

  & > :last-child {
    margin-top: 12px;
    width: 120px;
  }
`;

export const LogoSectionTitle = styled.p`
  ${({ theme }) => theme.font.c_medium[5]};
  color: ${({ theme }) => theme.color.greyscale[20]};
  margin-bottom: 4px;
`;

export const FileDescription = styled.p`
  ${({ theme }) => theme.font.c_regular[5]};
  color: ${({ theme }) => theme.color.greyscale[14]};
`;

export const FileInput = styled.input`
  display: none;
`;