/** @format */

import styled from "styled-components";

export const StyledCover = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	background-color: rgba(0, 0, 0, 0.75);
	z-index: 20;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 16px 32px 56px;
	gap: 16px;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background: white;
	border-radius: 8px;
`;

export const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

export const StyledText = styled.div`
	display: flex;
	line-height: 24px;
	color: gray;
	padding-left: 14.5px;
`;

export const BackButton = styled.button`
	width: 72px;
	height: 24px;
`;

export const CloseButton = styled.button`
	position: absolute;
	padding: 5px;
	top: 16px;
	right: 16px;

	& svg {
		pointer-events: none;
	}
`;
