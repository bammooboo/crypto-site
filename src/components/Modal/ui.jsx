import styled from 'styled-components';
import { breakpoints, colors } from '../../ui';

const Container = styled.div`
  position: fixed;
  z-index: ${({ show }) => show ? '5' : '-1'};
  background-color: ${colors.white};
  box-shadow: 0 24px 24px 0 rgba(0, 0, 0, 0.3), 0 0 24px 0 rgba(0, 0, 0, 0.22);
  border-radius: 2px;
  width: 100vw;
  max-width: 960px;
  margin: 0 auto;
  top: 0;
  left: 0;
  opacity: ${({ show }) => show ? '1' : '0'};
  visibility: ${({ show }) => show ? 'visible' : 'hidden'};
  overflow: scroll;
  transition: opacity 0.5s linear;
  height: 100%;
  overflow-x: hidden;

  ::-webkit-scrollbar { 
    display: none;
  }

  @media (min-width: ${breakpoints.md}px) {
    min-height: 90vh;
    height: 90vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  align-items: center;
  appearance: none;
  background-color: transparent;
  border: none;
  box-shadow: none;
  justify-content: center;
  padding: 24px;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
`;

export { CloseButton, Container };