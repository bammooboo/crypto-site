import styled from 'styled-components';
import { colors } from '../../ui';
import { HashLink } from 'react-router-hash-link';

const Container = styled.div`
  width: 100vw;
  height: auto;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(131deg, #020215, #080022 101%);
  z-index: 5;
  transform: ${({ show }) => show ? 'translateX(0)' : 'translateX(101%)'};
  transition: transform 0.3s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const NavList = styled.nav`
  color: ${colors.white};
  width: 100%;
`;

const List = styled.ul`
  list-style: none;
  padding: 68px 24px 60px;
  margin: 0;
`;

const Item = styled.li`
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.43px;
  position: relative;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  a {
    color: ${colors.white};
    text-decoration: none;
  }
`;

const Link = styled(HashLink)`
  padding-left: 12px;
`;

const ExternalLink = styled.a`
  text-decoration: none;
  padding-left: 12px;
`;

const ModalTrigger = styled.span`
  padding-left: 12px;
`;

export { Container, ExternalLink, Item, Link, List, ModalTrigger, NavList };