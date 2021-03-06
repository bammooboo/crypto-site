import React, { Fragment } from 'react';
import Hamburger from '../Hamburger';
import MobileMenu from '../MobileMenu';

const MobileNavigation = ({ clicked, toggleClicked, show }) => {
  return (
    <Fragment>
      <Hamburger clicked={toggleClicked} active={show} />
      <MobileMenu show={show} toggleClicked={toggleClicked} clicked={clicked} />
    </Fragment>
  );
};

export default MobileNavigation;