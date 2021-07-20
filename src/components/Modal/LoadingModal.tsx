import React, { useEffect, useState } from 'react';
import ModalWrapper from './ModalWrapper';
import { LoadingModalBox } from './styles';

type LoadingModalProps = {
  onClose: () => void;
};
export default function LoadingModal({ onClose }: LoadingModalProps): JSX.Element {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    let oldValue = 0;
    const interval = setInterval(() => {
      setPercent(prev => prev + 1);
      oldValue++;
      if (oldValue > 120) {
        clearInterval(interval);
        onClose();
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <ModalWrapper>
      <LoadingModalBox>
        <img
          src="https://i.ibb.co/JFjX32X/1c13f3fe7a6bba370007aea254e195e3.gif"
          alt="loading"
        />
        <span>{percent > 99 ? 'Finish!' : `${percent} %`}</span>
      </LoadingModalBox>
    </ModalWrapper>
  );
}
