/** @format */

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { fetchProducts } from "../../api/api";
import { AInput } from "../AInput/AInput";
import { ModalContent } from "../ModalContent/ModalContent";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { Pagination } from "../Pagination/Pagination";
import { Table } from "../Table/Table";
import { ITableItems } from "../Table/type";
import { StyledContainer } from "./ListPage.styles";
import { FormValues, IOptions, IResponseProducts } from "./type";
import { filterProducts } from "./utils";

export const ListPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const [products, setProducts] = useState<ITableItems[]>();
	const [options, setOptions] = useState<IOptions>({
		page: Number(searchParams.get("page") || 1),
		maxPage: 1,
		isShowModal: false,
		choosedItem: { id: 0, year: 0, value: "", color: "", name: "" },
		error: "",
	});
	const { control, watch } = useForm<FormValues>();
	const { id } = watch();

	const onUpdateTable = () => {
		fetchProducts(options.page)
			.then((data: IResponseProducts) => {
				setProducts(data.data);
				setOptions((prevState) => ({
					...prevState,
					maxPage: data.total_pages,
				}));
			})
			.catch((err) => {
				setOptions((prevState) => ({
					...prevState,
					error: err,
				}));
			});
	};

	const onChangePageHandler = (page: number) => {
		setOptions((prevState) => ({
			...prevState,
			page,
		}));
	};

	const onShowModalHandler = (id: number) => {
		setOptions((prevState) => ({
			...prevState,
			isShowModal: !prevState.isShowModal,
			choosedItem: filterProducts(id, products!)[0],
		}));
	};

	const onCloseHandler = () => {
		setOptions((prevState) => ({
			...prevState,
			isShowModal: false,
		}));
	};

	useEffect(() => {
		setSearchParams(`page=${String(options.page)}`);
		onUpdateTable();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [options.page]);

	const visibleItems = filterProducts(id, products!);

	return (
		<>
			<StyledContainer data-testid="listPage">
				<form>
					<AInput type="number" name="id" placeholder="Type your id" control={control} />
				</form>
				{options.error ? (
					<StyledContainer>{options.error}</StyledContainer>
				) : (
					<Table onShowModalHandler={onShowModalHandler} items={visibleItems} />
				)}
				<Pagination
					onChangePageHandler={onChangePageHandler}
					currentPage={options.page}
					amountOfPages={options.maxPage}
				/>
			</StyledContainer>
			{options.isShowModal && (
				<ModalWindow onCloseHandler={onCloseHandler}>
					<ModalContent {...options.choosedItem!} />
				</ModalWindow>
			)}
		</>
	);
};
