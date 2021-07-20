/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useCallback } from 'react';

type UseModalHookType = <T>(
  Modal: (props: T) => JSX.Element,
  props?: any
) => [(props: any) => JSX.Element, () => void];

export const useModal: UseModalHookType = (Modal, props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(prev => !prev);

  const ModalComponent = useCallback(
    (): JSX.Element =>
      modalOpen ? <Modal onClose={toggleModal} {...props}></Modal> : <></>,
    [modalOpen]
  );

  return [ModalComponent, toggleModal];
};
