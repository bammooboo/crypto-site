import styled from 'styled-components';
import { breakpoints, colors } from '../../ui';
import { HashLink } from 'react-router-hash-link';

const Container = styled.header`
  color: white;
  height: 88px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 100%;
  z-index: 4;

  @media (min-width: ${breakpoints.lg}px) {
    height: 90px;
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 100%;
  max-width: 100%;

  @media (min-width: ${breakpoints.md}px) {
    padding: 0 32px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    padding: 0 64px;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(124deg, ${colors.blueGradient}, ${colors.blackgradient} 101%);
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;

const InnerBg = styled.div`
  height: 100%;
  background-color: ${colors.black};
  position: absolute;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.2;

  &:first-child {
    width: 50vw;
  }

  &:nth-child(2) {
    width: 25vw;
  }

  &:nth-child(3) {
    width: 12.5vw;
  }

  &:last-child {
    width: 6vw;
  }
`;

const Link = styled(HashLink)`
  z-index: 1;
  max-height: 50px;

  @media (min-width: ${breakpoints.lg}px) {
    max-height: unset;
  }
`;

const MenuWrap = styled.div`
  display: inline-flex;
  height: 88px;

  @media (min-width: ${breakpoints.lg}px) {
    height: 90px;
  }
`;

const LargeLink = styled.a`
  height: 100%;
  background-color: ${colors.blue};
  width: 94px;
  position: relative;
  margin-right: -64px;
  cursor: pointer;
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${colors.white};
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.43px;
  text-align: center;
  text-transform: uppercase;

  span {
    color: inherit;
    width: 40px;
    margin-left: 10px;
  }
`;

export { Background, Container, Inner, InnerBg, LargeLink, Link, MenuWrap };