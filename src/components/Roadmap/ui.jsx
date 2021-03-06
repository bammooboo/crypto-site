import styled from 'styled-components';
import { breakpoints, colors } from '../../ui';

const Container = styled.section`
  padding-top: 110px;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

const Title = styled.h2`
  color: ${colors.blue};
  font-family: 'Open Sans', sans-serif;
  font-size: 64px;
  text-transform: lowercase;
  text-align: center;
  letter-spacing: 4.29px;
  margin-top: 0;

  @media (min-width: ${breakpoints.md}px) {
    font-size: 80px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    font-size: 120px;
  }
`;

const AnchorTo = styled.span`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: -100px;
`;

export { AnchorTo, Container, Title };