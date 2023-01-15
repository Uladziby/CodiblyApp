/** @format */

import styled from "styled-components";

export const StyledInput = styled.input<{ hasError?: boolean }>`
	padding: 12px 15px;
	height: 20px;
	margin: 8px 0;
	color: gray;

	&:focus {
		border: 2px solid black;
		outline: none;
	}

	&:focus::placeholder {
		color: transparent;
	}
`;
export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
export const StyledInputWrapper = styled.div`
	position: relative;
`;

export const StyledLabel = styled.label`
	cursor: pointer;
	text-align: left;
	color: gray;
	font-size: 14px;
`;
