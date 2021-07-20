import styled, { css } from 'styled-components';

export const SquareBtnBox = styled.button<{
  onClick?: () => void;
  width?: number;
  height?: number;
  color?: 'light' | 'primary';
}>`
  outline: none;
  border: 2px solid #8c30f5;
  width: 100%;
  background-color: #8c30f5;
  color: #fff;
  padding: 0.5rem 1.3rem;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border: 2px solid #8c30f5;
    color: #8c30f5;
    background-color: #fff;
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
      border: 2px solid #f1e4ff;
      background-color: #f1e4ff;
      color: #8c30f5;
    `}
  &:disabled {
    cursor: no-drop;
    border: 2px solid #aaa;
    background-color: #aaa;
  }
`;
