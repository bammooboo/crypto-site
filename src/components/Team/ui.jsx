import styled from 'styled-components';
import { breakpoints, colors } from '../../ui';

const Container = styled.div`
  height: auto;
  position: relative;
  padding: 48px 40px;

  @media (min-width: ${breakpoints.md}px) {
    padding: 0 40px 40px;
  }
`;

const Title = styled.h2`
  color: ${colors.blue};
  font-family: 'Open Sans', sans-serif;
  font-size: 52px;
  text-transform: lowercase;
  text-align: center;
  letter-spacing: 4.29px;
  margin-top: 0;
  margin-bottom: 80px;

  @media (min-width: ${breakpoints.md}px) {
    font-size: 80px;
    margin-bottom: 50px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    font-size: 120px;
  }
`;

const PrimaryMembers = styled.div`
  margin-bottom: 50px;

  @media (min-width: ${breakpoints.md}px) {
    margin-bottom: 80px;
  }
`;

const SecondaryMembers = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export { Container, PrimaryMembers, SecondaryMembers, Title };