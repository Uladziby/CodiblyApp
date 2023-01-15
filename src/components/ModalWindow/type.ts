import { ReactNode } from 'react';

export interface ModalWindowProps {
  onCloseHandler?: () => void;
  onBackHandler?: () => void;
  children: ReactNode | string;
  withBackground?: boolean;
}
