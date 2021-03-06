import styled from 'styled-components';
import { colors } from '../../ui';

const Container = styled.div`
  overflow: hidden;
  position: relative;
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(124deg, ${colors.blueGradient}, ${colors.blackgradient} 101%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
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

export { Background, Container, Inner };