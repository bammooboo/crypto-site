import styled from 'styled-components';
import { breakpoints, colors } from '../../ui';

const Container = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 5;
  opacity: ${({ hide }) => hide ? '0' : '1'};
  visibility: ${({ hide }) => hide ? 'hidden' : 'visible'};
  transition: all 1s ease-in;
  transition-delay: 0.4s;

  img {
    width: 100%;
  }
`;

const LogoWrap = styled.div`
  left: 50%;
  position: absolute;
  top: 250px;
  transform: translateX(-50%);
  width: 300px;
  opacity: ${({ hide }) => hide ? '0' : '1'};
  visibility: ${({ hide }) => hide ? 'hidden' : 'visible'};
  transition: all 0.4s ease-in;

  @media (min-width: ${breakpoints.md}px) {
    top: 250px;
    width: 668px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    top: 200px;
  }
`; 

const Partners = styled.div`
  bottom: 90px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 320px;
  opacity: ${({ hide }) => hide ? '0' : '1'};
  visibility: ${({ hide }) => hide ? 'hidden' : 'visible'};
  transition: all 0.4s ease-in;

  @media (min-width: ${breakpoints.md}px) {
    width: 676px;
  }
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(124deg, ${colors.blueGradient}, ${colors.blackgradient} 101%);
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Inner = styled.div`
  height: 100vh;
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

export { Background, Container, Inner, LogoWrap, Partners }; 