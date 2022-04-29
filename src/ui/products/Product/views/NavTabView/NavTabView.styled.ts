import styled from 'styled-components';

export const BodyWrapper = styled.div`
	display        : flex;
	justify-content: space-between;
	align-items    : center;
	width          : 100%;
`;


export const TagsContainer = styled.div`
  display: flex;
  margin-left: 12px;
  margin-top: -3px;

  & > *:not(:last-child) {
    margin-right: 5px;
  }
`;

// export const BodyWrapper = styled.div`
// 	display        : flex;
// 	justify-content: flex-end;
// 	align-items    : center;
// 	width          : 100%;

// 	& > *:not(:last-child) {
// 		margin-right: 20px;
// 	}
// `;
