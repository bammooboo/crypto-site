import React, { Fragment } from 'react';
import Backdrop from '../Backdrop';
import { Container, ExternalLink, Item, Link, List, NavList } from './ui';

const MobileMenu = ({ show, toggleClicked }) => {
  return (
    <Fragment>
      <Container show={show}> 
        <NavList>
          <List>
            <Item>
              <Link to="#" onClick={toggleClicked}>Lorem ipsum</Link>
            </Item>
            <Item>
              <Link to="#" onClick={toggleClicked}>Lorem ipsum</Link>
            </Item>
            <Item>
              <ExternalLink href="/" target="_blank" rel="noopener noreferrer" onClick={toggleClicked}>Lorem ipsum</ExternalLink>
            </Item>
          </List>
        </NavList>
      </Container>
      <Backdrop show={show} />
    </Fragment>
  );
};

export default MobileMenu;