import React from 'react';
import { Close } from '../SVGs';
import { Container, CloseButton } from './ui';

const Modal = ({ children, show, close }) => {
  return (
    <Container className="modal" show={show}>
      {children}
      <CloseButton show={show} onClick={close}>
        <Close />
      </CloseButton>
    </Container>
  );
};

export default Modal;