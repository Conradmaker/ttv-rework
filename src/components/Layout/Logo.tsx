import React from 'react';
import { LogoBox } from './styles';

type LogoProps = {
  height?: number;
  light?: boolean;
};
export default function Logo({ light, ...rest }: LogoProps): JSX.Element {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LogoBox light={light} {...rest} onClick={scrollTop}>
      <img
        src={
          light
            ? 'https://i.ibb.co/KV2mDXc/wayne-hills-logo-white.png'
            : 'https://i.ibb.co/BznGdg0/1-5-removebg-preview.png'
        }
        alt="logo"
      />
      <span>Wayne Hills</span>
    </LogoBox>
  );
}
