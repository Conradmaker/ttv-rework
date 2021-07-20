import React from 'react';
import SquareBtn from '../Button/SquareBtn';
import DropDown from '../Input/DropDown';
import Logo from './Logo';
import { HeaderContainer } from './styles';
import _LoginModal from '../Modal/LoginModal';
import { useModal } from '../../hooks';
import { RiArrowDownSLine } from 'react-icons/ri';
import { useState } from 'react';

export default function Header(): JSX.Element {
  const [LoginModal, toggleModal] = useModal(_LoginModal);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
  return (
    <>
      <HeaderContainer mobileMenuOpen={mobileMenuOpen}>
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
          <RiArrowDownSLine className="menu__mobile" onClick={toggleMobileMenu} />
        </div>
      </HeaderContainer>
      <LoginModal />
    </>
  );
}
