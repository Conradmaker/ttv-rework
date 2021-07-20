import React, { useState } from 'react';
import SquareBtn from '../Button/SquareBtn';
import { VVTDemoContainer } from './styles';

export default function VVTDemo(): JSX.Element {
  const [text, setText] = useState('');
  const [textError, setTextError] = useState('');

  const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.trim().length > 5000) {
      return setTextError('You must enter no more than 5000 characters.');
    } else {
      setTextError('');
    }
    setText(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim().length < 500) {
      return setTextError('You must enter more than 500 characters.');
    } else if (textError) return;

    alert('전송');
  };

  return (
    <VVTDemoContainer id="demo" textError={textError} onSubmit={onSubmit}>
      <div className="inner">
        <h2>TTV A.I</h2>
        <p>
          <span>Put your script here 500~5,000 letters</span>
          <span>{text.trim().length} letters</span>
        </p>
        <textarea
          placeholder="insert Here!"
          value={text}
          onChange={onChangeText}
        ></textarea>
        <strong>{textError}</strong>
        <SquareBtn width={150}>CONVERT</SquareBtn>
        <div className="circle" />
      </div>
    </VVTDemoContainer>
  );
}
