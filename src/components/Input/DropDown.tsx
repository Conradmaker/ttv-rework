import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { DropDownContainer } from './styles';

export default function DropDown(): JSX.Element {
  return (
    <DropDownContainer>
      <p>
        <span>TTV A.I</span>
        <RiArrowDownSLine />
      </p>
      <ul>
        <li>
          <a
            target="_blank"
            href="http://busan-mbc-poc.s3-website.ap-northeast-2.amazonaws.com/"
          >
            VTA A.I
          </a>
        </li>
        <li>
          <a target="_blank" href="http://picasso.waynehills.co/">
            Picasso A.I
          </a>
        </li>
      </ul>
    </DropDownContainer>
  );
}
