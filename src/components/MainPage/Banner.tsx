import React from 'react';
import SquareBtn from '../Button/SquareBtn';
import { BannerContainer } from './styles';

export default function Banner(): JSX.Element {
  return (
    <BannerContainer>
      <div className="inner">
        <article>
          <h1>
            Just play your <br /> TEXT
          </h1>
          <p>
            We provide the easiest way to make a video
            <br />
            Now how about watching your book on video?
          </p>
          <a href="#demo">
            <SquareBtn width={150}>Get Started</SquareBtn>
          </a>
        </article>
        <div className="banner__right">
          <div className="circle"></div>
          <img
            src="https://i.ibb.co/RPLMPDx/2021-07-20-3-57-56.png"
            alt="service_interface"
          />
        </div>
      </div>
    </BannerContainer>
  );
}
