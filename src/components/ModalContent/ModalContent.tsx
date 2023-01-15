/** @format */

import { ITableItems } from "../Table/type";
import { StyledContainer } from "./ModalContetn.styles";

export const ModalContent = ({ id, value, year, color, name }: ITableItems) => {
	return (
		<StyledContainer>
			<div>id : {id}</div>
			<div>value : {value}</div>
			<div>year : {year}</div>
			<div>color : {color}</div>
			<div>name : {name}</div>
		</StyledContainer>
	);
};
