import React from 'react';
import { Background, Container, Inner, LogoWrap, Partners } from './ui';

const Overlay = ({ hide }) => (
  <Container hide={hide}>
    <Background>
      <Inner />
      <Inner />
      <Inner />
      <Inner />
    </Background>
    <LogoWrap hide={hide}>
      <img src="" alt="" />
    </LogoWrap>
    <Partners hide={hide}>
      <img src="" alt="" />
    </Partners>
  </Container>
);

export default Overlay;