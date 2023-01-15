/** @format */

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { fetchProducts } from "../../api/api";
import { AInput } from "../AInput/AInput";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { Pagination } from "../Pagination/Pagination";
import { Table } from "../Table/Table";
import { ITableItems } from "../Table/type";
import { StyledContainer } from "./ListPage.styles";
import { FormValues, IOptions, IResponseProducts } from "./type";
import { filterProducts } from "./utils";

export const ListPage = () => {
	const [products, setProducts] = useState<ITableItems[]>();
	const [filteredProducts, setFilteredProducts] = useState<ITableItems[]>();
	const [options, setOptions] = useState<IOptions>({
		page: 1,
		maxPage: 1,
		isShowModal: false,
	});

	const { control, watch } = useForm<FormValues>();
	const { id } = watch();

	const onUpdateTable = () => {
		fetchProducts(options.page).then((data: IResponseProducts) => {
			setProducts(data.data);
			setOptions((prevState) => ({
				...prevState,
				maxPage: data.total_pages,
			}));
		});
	};

	const onChangePageHandler = (page: number) => {
		setOptions((prevState) => ({
			...prevState,
			page,
		}));
	};

	const onShowModalHandler = () => {
		setOptions((prevState) => ({
			...prevState,
			isShowModal: !prevState.isShowModal,
		}));
	};

	useEffect(() => {
		onUpdateTable();
	}, [options.page]);

	const visibleItems = filterProducts(id, products!);

	return (
		<>
			<StyledContainer>
				<form>
					<AInput type="number" name="id" placeholder="type your id" control={control} />
				</form>
				<Table onShowModalHandler={onShowModalHandler} items={visibleItems} />
				<Pagination
					onChangePageHandler={onChangePageHandler}
					currentPage={options.page}
					amountOfPages={options.maxPage}
				/>
			</StyledContainer>
			{options.isShowModal && (
				<ModalWindow onCloseHandler={onShowModalHandler}>
					{products?.map((elem) => {
						return <div key={elem.id}>{elem.value}</div>;
					})}
				</ModalWindow>
			)}
		</>
	);
};
