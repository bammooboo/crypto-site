import React, { useState } from 'react';
import { withWindowSizeListener } from 'react-window-size-listener';

import { Background, Container, Inner, InnerBg, Link, MenuWrap } from './ui';
import { breakpoints } from '../../ui';

import Navigation from '../Navigation';
import Logo from '../Logo';
import MobileNavigation from '../MobileNavigation';

import useDocumentScrollThrottled from '../../utils/useDocumentScrollThrottled';
 
const Header = ({ windowSize, clicked, toggleClicked, show }) => {
  const [background, setBackground] = useState(false);

  const MINIMUM_SCROLL = 0;
  const TIMEOUT_DELAY = 0;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setTimeout(() => {
      setBackground(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  return (
    <Container background={background}>
      <Background>
        <InnerBg />
        <InnerBg />
        <InnerBg />
        <InnerBg />
      </Background>
      <Inner>
        <Link to="#home">
          <Logo />
        </Link>
        {windowSize.windowWidth > breakpoints.lg && (
          <MenuWrap>
            <Navigation clicked={clicked} />
          </MenuWrap>
        )}
        {windowSize.windowWidth < breakpoints.lg && <MobileNavigation clicked={clicked} toggleClicked={toggleClicked} show={show} />}
      </Inner>
    </Container>
  );
};

export default withWindowSizeListener(Header);