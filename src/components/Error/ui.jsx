import styled from 'styled-components';
import { colors } from '../../ui';

const Container = styled.div`
  position: absolute;
  transform: translateY(-30px);
  z-index: -1;

  &.active {
    margin-top: 2px;
    color: ${colors.red};
    transform: translateY(0);
    transition: transform 0.3s linear;
  }
`;

const ErrorText = styled.span`
  overflow: hidden;
  white-space: nowrap;
  font-weight: 600;
  font-family: 'Open Sans';
  font-size: 12px;
`;

export { Container, ErrorText };