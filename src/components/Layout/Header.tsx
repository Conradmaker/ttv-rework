import React from 'react';
import SquareBtn from '../Button/SquareBtn';
import DropDown from '../Input/DropDown';
import Logo from './Logo';
import { HeaderContainer } from './styles';
import _LoginModal from '../Modal/LoginModal';
import useModal from '../../hooks/useModal';

export default function Header(): JSX.Element {
  const [LoginModal, toggleModal] = useModal(_LoginModal);
  return (
    <>
      <HeaderContainer>
        <div className="inner">
          <div className="header__left">
            <Logo />
            <ul>
              <li>
                <a href="https://www.waynehills.co/" target="_blank">
                  ABOUT US
                </a>
              </li>
              <li>
                <DropDown />
              </li>
            </ul>
          </div>
          <div className="header__right">
            <SquareBtn onClick={toggleModal} color="light">
              Login
            </SquareBtn>
            <SquareBtn>DashBoard(Beta)</SquareBtn>
          </div>
        </div>
      </HeaderContainer>
      <LoginModal />
    </>
  );
}
