/** @format */

import { ReactNode } from "react";

export interface ModalWindowProps {
	onCloseHandler?: () => void;
	children: ReactNode | string;
}
