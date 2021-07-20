import React from 'react';
import SquareBtn from '../Button/SquareBtn';
import DropDown from '../Input/DropDown';
import Logo from './Logo';
import { HeaderContainer } from './styles';

export default function Header(): JSX.Element {
  return (
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
          <SquareBtn color="light">Login</SquareBtn>
          <SquareBtn>DashBoard</SquareBtn>
        </div>
      </div>
    </HeaderContainer>
  );
}
