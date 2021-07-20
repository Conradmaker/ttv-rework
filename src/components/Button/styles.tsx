import styled, { css } from 'styled-components';

export const SquareBtnBox = styled.button<{
  onClick?: () => void;
  width?: number;
  height?: number;
  color?: 'light' | 'primary';
}>`
  outline: none;
  border: 2px solid ${({ theme }) => theme.textColor.primary};
  width: 100%;
  background-color: ${({ theme }) => theme.textColor.primary};
  color: #fff;
  padding: 0.5rem 1.3rem;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border: 2px solid ${({ theme }) => theme.textColor.primary};
    color: ${({ theme }) => theme.textColor.primary};
    background-color: ${({ theme }) => theme.background.initial};
  }

  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `}
  ${({ height }) =>
    height &&
    css`
      height: ${height}px;
    `}
    ${({ color }) =>
    color === 'light' &&
    css`
      border: 2px solid ${({ theme }) => theme.primary.lighter};
      background-color: ${({ theme }) => theme.primary.lighter};
      color: ${({ theme }) => theme.textColor.primary};
    `}
  &:disabled {
    cursor: no-drop;
    border: 2px solid #aaa;
    background-color: #aaa;
  }
`;
