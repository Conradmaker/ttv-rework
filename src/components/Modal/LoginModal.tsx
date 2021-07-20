import React from 'react';
import { useInput } from '../../hooks';
import SquareBtn from '../Button/SquareBtn';
import CommonInput from '../Input/CommonInput';
import ModalWrapper from './ModalWrapper';
import { LoginModalBox } from './styles';

type LoginModalProps = {
  onClose: () => void;
};
export default function LoginModal({ onClose }: LoginModalProps): JSX.Element {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onClickBackGroung = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <ModalWrapper onClick={onClickBackGroung}>
      <LoginModalBox>
        <h2>Log in to TTV</h2>
        <CommonInput value={email} onChange={onChangeEmail} label="Email" type="email" />
        <CommonInput
          value={password}
          onChange={onChangePassword}
          label="Password"
          type="password"
        />
        <div className="btn__wrapper">
          <SquareBtn>Log in</SquareBtn>
          <SquareBtn disabled>Sign up</SquareBtn>
        </div>
        <SquareBtn onClick={onClose} color="light">
          Close
        </SquareBtn>
      </LoginModalBox>
    </ModalWrapper>
  );
}
