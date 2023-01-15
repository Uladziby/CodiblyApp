/** @format */

import { StyledCell, StyledRow, StyledTable, StyledTableHeadings } from "./Table.styles";
import { ITableProps } from "./type";

export const Table = ({ className, items, onShowModalHandler }: ITableProps) => {
	return (
		<StyledTable className={className}>
			<thead>
				<StyledTableHeadings background="white">
					<StyledCell>Id</StyledCell>
					<StyledCell>Name</StyledCell>
					<StyledCell>Year</StyledCell>
				</StyledTableHeadings>
			</thead>
			<tbody>
				{items ? (
					items.map(({ id, name, color, value, year }, index) => (
						<StyledRow key={id} background={color} onClick={() => onShowModalHandler(id)}>
							<StyledCell>{id}</StyledCell>
							<StyledCell>{name}</StyledCell>
							<StyledCell>{year}</StyledCell>
						</StyledRow>
					))
				) : (
					<StyledRow>
						<StyledCell>List of product is an empty</StyledCell>
					</StyledRow>
				)}
			</tbody>
		</StyledTable>
	);
};
