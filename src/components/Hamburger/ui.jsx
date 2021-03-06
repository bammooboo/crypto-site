import styled, { css } from 'styled-components';
import { colors } from '../../ui';

const Line = styled.span`
  background-color: ${colors.white};
  height: 1px;
  width: 20px;
  position: relative;
  transform-origin: 50% 50%;

  &.bottom, &.top {
    transform: rotate(0deg) translateY(0px);
	  transition: 0.5s;
  }

  &.middle {
    opacity: 1;
    transition: 0.6s;
  }
`;

const Container = styled.div`
  cursor: pointer;
  width: 20px;
  height: 11px;
  overflow: hidden;
  position: relative;
  z-index: 6;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  ${({ active }) => active && css`
    ${Line} {
      &.bottom {
        transform: translateY(-6px) rotate(-45deg);
        transition: 0.5s;
      }

      &.top {
        transform: translateY(6px) rotate(45deg);
        transition: 0.5s;
      }

      &.middle {
        opacity: 0;
        transition: 0.6s;
      }
    }
  `}
`;

export { Container, Line };