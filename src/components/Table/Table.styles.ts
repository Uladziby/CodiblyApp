/** @format */

import styled from "styled-components";

export const StyledTable = styled.table`
	padding: 32px;
	display: flex;
	flex-direction: column;
	gap: 24px;
	overflow: auto;

	& thead,
	tbody {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
`;

export const StyledRow = styled.tr<{ isLast?: boolean; background?: string }>`
	height: 64px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	border-bottom: 2px solid gray;
	background: ${({ background }) => background};
	cursor: pointer;

	& td:first-child,
	& th:first-child {
		width: 50px;
	}

	& td:nth-child(2),
	& th:nth-child(2) {
		width: 120px;
	}

	& td:nth-child(3),
	& th:nth-child(3) {
		width: 60px;
	}

	& td:nth-child(4),
	& th:nth-child(4) {
		width: 44px;
	}
`;

export const StyledTableHeadings = styled(StyledRow)`
	height: auto;
	border: none;

	& th {
		height: auto;
		font-size: 12px;
		line-height: 12px;
	}
`;

export const StyledCell = styled.td`
	height: 48px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: left;
	font-size: 14px;
	line-height: 20px;
	color: white;
`;
