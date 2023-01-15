/** @format */

import styled from "styled-components";

export const StyledInput = styled.input<{ hasError?: boolean }>`
	font-family: inherit;
	width: 100%;
	border: 0;
	border-bottom: 2px solid #9b9b9b;
	outline: 0;
	font-size: 18px;
	padding: 7px 10px;
	background: transparent;
	transition: border-color 0.2s;

	&:focus {
		padding-bottom: 6px;
		font-weight: 700;
		border-width: 3px;
		border-image: linear-gradient(to right, #11998e, #38ef7d);
		border-image-slice: 1;
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
