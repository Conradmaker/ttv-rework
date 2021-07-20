import React from 'react';
import SquareBtn from '../Button/SquareBtn';
import ModalWrapper from './ModalWrapper';
import { TermModalBox } from './styles';

type TermModalProps = {
  onClose: () => void;
};
export default function TermModal({ onClose }: TermModalProps): JSX.Element {
  return (
    <ModalWrapper onClick={onClose}>
      <TermModalBox>
        <h2>Terms of Use</h2>
        <p>Shutterstock</p>
        <ul>
          <li>
            Content is for digital use within Wayne Hills Ventures only and may not be
            used for printing.
          </li>
          <li>You may not use the content as a trademark for a business.</li>
          <li>
            You may not portray a person in a way that may be offensive, including: in
            connection with adult-oriented services or ads for dating services; in
            connection with the promotion of tobacco products; in connection with
            political endorsements; with pornographic, defamatory, unlawful, offensive or
            immoral content; and as suffering from, or being treated for, a physical or
            mental ailment.
          </li>
          <li>
            You may only use the content in campaigns and content created on Wayne Hills
            Ventures, and not with other website or content services.
          </li>
        </ul>
        <SquareBtn onClick={() => onClose}>Got it!</SquareBtn>
      </TermModalBox>
    </ModalWrapper>
  );
}
