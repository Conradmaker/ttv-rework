import React from 'react';
import { CommonInputBox } from './styles';

type CommonInputProps = {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  type?: 'text' | 'email' | 'password';
};
export default function CommonInput({
  value = '',
  onChange,
  label = '',
  type = 'text',
}: CommonInputProps): JSX.Element {
  return (
    <CommonInputBox className="input__common">
      <label>{label}</label>
      <input value={value} onChange={onChange} type={type} />
    </CommonInputBox>
  );
}
