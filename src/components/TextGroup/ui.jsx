import styled from 'styled-components';
import { breakpoints, colors } from '../../ui';

const Container = styled.div`
  width: 100vw;
  position: absolute;
  bottom: 52px;
  display: none;

  @media (min-width: ${breakpoints.md}px) {
    display: block;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  @media (min-width: ${breakpoints.md}px) {
    padding: 0 32px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    padding: 0 64px;
  }
`;

const Text = styled.p`
  font-family: 'Open Sans', sans-serif;
  opacity: 0.25;
  font-size: 18px;
  letter-spacing: 0.64px;
  color: ${colors.white};
`;

export { Container, Inner, Text };