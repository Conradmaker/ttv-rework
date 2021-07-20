import React from 'react';
import Logo from './Logo';
import { FooterContainer } from './styles';
import _TermModal from '../Modal/TermModal';
import { useModal } from 'src/hooks';

export default function Footer(): JSX.Element {
  const [TermModal, toggleTermModal] = useModal(_TermModal);
  return (
    <>
      <FooterContainer>
        <div className="inner">
          <div className="footer__left">
            <Logo height={60} light />
            <p onClick={toggleTermModal}>Terms of Use</p>
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
      <TermModal />
    </>
  );
}
