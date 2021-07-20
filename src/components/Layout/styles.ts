import styled, { css } from 'styled-components';

export const PageLayoutContainer = styled.main`
  padding-bottom: 7.5rem;
`;

export const LogoBox = styled.div<{ height?: number; light?: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 2.6rem;
  img {
    height: 100%;
  }
  & > span {
    margin-left: 0.4rem;
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
  }
  ${({ height }) =>
    height &&
    css`
      height: ${height}px;
      img {
        height: ${height}px;
      }
    `}
  ${({ light }) =>
    light &&
    css`
      span {
        color: ${({ theme }) => theme.textColor.contrast};
      }
    `}
`;

export const HeaderContainer = styled.header`
  z-index: 200;
  position: fixed;
  top: 0;
  left: 0;
  height: 4.2rem;
  width: 100vw;
  background-color: ${({ theme }) => theme.background.initial};
  .inner {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header__left {
      font-weight: bold;
      display: flex;
      align-items: center;
      & > ul {
        margin-left: 2rem;
        display: flex;
        align-items: center;
        gap: 20px;
      }
    }
    .header__right {
      display: flex;
      button + button {
        margin-left: 1rem;
      }
    }
  }
`;

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 7.5rem;
  width: 100vw;
  font-size: 14px;
  background-color: ${({ theme }) => theme.primary.normal};
  color: ${({ theme }) => theme.textColor.contrast};
  .inner {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > .footer__left {
      p {
        margin: 0.6rem 0;
        font-weight: bold;
        text-decoration: underline 2px solid;
        cursor: pointer;
      }
    }
    & > .footer__right {
      line-height: 1.4;
      li:first-of-type {
        margin-bottom: 1rem;
      }
      li > a {
        color: ${({ theme }) => theme.textColor.contrast};
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }
`;
