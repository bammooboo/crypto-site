import React from 'react';
import { ButtonLink, Container, Item, Link, LinkContainer, List } from './ui';

const Navigation = () => {
  return (
    <Container>
      <List>
        <Item>
          <Link to="#">Lorem ipsum</Link>
        </Item>
        <Item>
          <Link to="#">Lorem ipsum</Link>
        </Item>
        <Item>
          <LinkContainer href="/" target="_blank" rel="noopener noreferrer">
            <ButtonLink>Lorem ipsum</ButtonLink>
          </LinkContainer>
        </Item>
      </List>
    </Container>
  );
};

export default Navigation;