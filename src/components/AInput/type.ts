/** @format */

import { MouseEvent, ReactNode, SyntheticEvent } from "react";
import { Control } from "react-hook-form";
import { FormValues } from "../ListPage/type";

export interface IAInputProps {
	placeholder?: string;
	label?: string;
	hasError?: boolean;
	isDisabled?: boolean;
	name: string;
	type?: string;
	icon?: ReactNode;
	iconTitle?: string;
	onIconClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	className?: string;
	variant?: InputVariantsEnum;
	prefix?: CurrencyPrefixEnum;
	onBlur?: (event: SyntheticEvent) => void;
	control?: Control<any>;
}

export enum CurrencyPrefixEnum {
	EUR = "\\020AC",
	USD = "\\00024",
	GBP = "\\000A3",
	PLN = "\\007A\\0142",
	CHF = "\\20A3",
	KZT = "\\20B8",
}

export enum InputVariantsEnum {
	primary = "primary",
	currency = "currency",
}
