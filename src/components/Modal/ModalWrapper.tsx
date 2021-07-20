import React from 'react';
import { ModalWrappertContainer } from './styles';

type ModalWrapperProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};
export default function ModalWrapper({
  children,
  onClick,
}: ModalWrapperProps): JSX.Element {
  return <ModalWrappertContainer onClick={onClick}>{children}</ModalWrappertContainer>;
}
