import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './pages/Home';
import Backdrop from './components/Backdrop';
import { useModal } from './utils/useModal';
import  { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Container = styled.div`
  overflow: hidden;
`;

function App() {
  useEffect(() => {
    window.location.hash = "";
    window.scrollTo({
      top: 0
    });
  }, []);

  const {
    showModal, openModal, closeModal
  } = useModal();

  const [showMenu, setShowMenu] = useState(null);

  const toggleMenu = () => {
    if (!showMenu && !showModal) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (showModal || showMenu) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
  }, [showMenu, showModal]);

  return (
    <div className="App">
      <Container>
        <Header clicked={openModal} toggleClicked={toggleMenu} show={showMenu} />
        <Home />
        <Backdrop show={showModal} clicked={closeModal} />
      </Container>
    </div>
  );
}

export default App;
