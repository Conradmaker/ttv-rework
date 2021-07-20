import styled, { css } from 'styled-components';

export const PageLayoutContainer = styled.main`
  padding-bottom: 7.5rem;
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    padding-bottom: 14rem;
    width: 100vw;
    overflow-x: hidden;
  }
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

export const HeaderContainer = styled.header<{ mobileMenuOpen: boolean }>`
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
        & > li + li {
          margin-left: 20px;
        }
      }
    }
    .header__right {
      display: flex;
      button + button {
        margin-left: 1rem;
      }
    }
    .menu__mobile {
      display: none;
      font-size: 32px;
    }
  }

  @media ${({ theme }) => theme.viewPortSize.mobile} {
    width: 100vw;
    overflow: hidden;
    transition: all 0.3s;
    .inner {
      padding: 0.9rem 1rem;
      align-items: flex-start;
      .header__left {
        flex-direction: column;
        & > ul {
          display: none;
          position: absolute;
          top: 4.5rem;
          left: 0;
          justify-content: space-evenly;
          width: 100%;
          margin-left: 0;
          font-size: 18px;
          z-index: 1;
          li + li {
            margin-left: 0px;
            & > div > p {
              padding: 0 0.6rem;
            }
          }
        }
      }
      .header__right {
        flex-direction: column;
        display: none;
        position: absolute;
        top: 7rem;
        left: 0;
        width: 100%;
        padding: 0 1rem;
        button + button {
          margin: 1rem 0 0 0;
        }
      }
      .menu__mobile {
        display: initial;
        transition: all 0.3s;
      }
    }
    ${({ mobileMenuOpen }) =>
      mobileMenuOpen &&
      css`
        height: 14rem;
        .inner {
          .header__left > ul {
            display: flex;
          }
          .header__right {
            display: initial;
          }
          .menu__mobile {
            transform: rotate(180deg);
          }
        }
      `}
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

  @media ${({ theme }) => theme.viewPortSize.mobile} {
    height: 14rem;
    .inner {
      flex-direction: column;
      justify-content: center;
      & > .footer__left {
        text-align: center;
      }
      & > .footer__right {
        text-align: center;
      }
    }
  }
`;
