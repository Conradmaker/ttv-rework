import React from 'react';
import { SquareBtnBox } from './styles';

type SquareBtnProps = {
  children: React.ReactNode;
  onClick?: () => void;
  width?: number;
  height?: number;
  color?: 'light' | 'primary';
  disabled?: boolean;
};
export default function SquareBtn({
  children,
  color = 'primary',
  ...rest
}: SquareBtnProps): JSX.Element {
  return (
    <SquareBtnBox color={color} {...rest}>
      {children}
    </SquareBtnBox>
  );
}
