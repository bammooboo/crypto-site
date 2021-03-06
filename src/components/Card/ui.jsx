import styled from 'styled-components';
import { colors } from '../../ui';

const Container = styled.div`
  max-width: 300px;
  width: 300px;
  margin: 0 8px;
  opacity: 0;
  transform: translateY(100px);
  transition: opacity 3s cubic-bezier(.21,1,.84,1.01), transform 2s cubic-bezier(.21,1,.84,1.01);

  &:not(:only-child) {
    margin-bottom: 10px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &.active {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ImageWrap = styled.div`
  margin-bottom: 10px;
  width: 300px;

  img {
    width: 100%;
  }
`;

const Title = styled.h5`
  color: ${colors.blue};
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
  margin-top: 0;
`;

const Description = styled.p`
  color: ${colors.white};
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.43px;
  margin-top: 0;
  line-height: 1.6;
`;

export { Container, Description, ImageWrap, Title };