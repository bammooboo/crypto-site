import React, { useState, useEffect } from 'react';
import Landing from '../../pages/Landing';
import Hero from '../Hero';
import Footer from '../Footer';
import Roadmap from '../Roadmap';
import Tools from '../Tools';
import { Background, Container, Inner } from './ui';

import  { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const HomeContent = () => {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    disableBodyScroll();
    setTimeout(() => {
      setShowLanding(false);
      enableBodyScroll();
      clearAllBodyScrollLocks();
    }, 1800);
  }, []);
  
  return (
    <Container>
      <Landing hide={!showLanding} />
      <Background>
        <Inner />
        <Inner />
        <Inner />
        <Inner />
      </Background>
      <Hero />
      <Tools />
      <Roadmap />
      <Footer />
    </Container>
  );
};

export default HomeContent;