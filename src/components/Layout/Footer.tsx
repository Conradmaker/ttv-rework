import React from 'react';
import Logo from './Logo';
import { FooterContainer } from './styles';

export default function Footer(): JSX.Element {
  return (
    <FooterContainer>
      <div className="inner">
        <div className="footer__left">
          <Logo height={60} light />
          <p>Terms of Use</p>
          <span>Powered by Shutterstock</span>
        </div>
        <ul className="footer__right">
          <li>
            B1, E10Dong, 70, Magokjungang 10-ro, Gangseo-gu, Seoul, Republic of Korea
          </li>
          <li>Founder : John (Yi.su.min)</li>
          <li>
            Email :
            <a href="mailto:waynehills.ventures@gmail.com">
              waynehills.ventures@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </FooterContainer>
  );
}
