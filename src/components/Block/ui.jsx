import styled from 'styled-components';
import { breakpoints, colors } from '../../ui';

const Events = styled.div`
  width: auto;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;

  @media (min-width: ${breakpoints.md}px) {
    flex-flow: row nowrap;
    width: 648px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;

  &:nth-child(6),
  &:nth-child(7),
  &:nth-child(8),
  &:nth-child(9) {
    opacity: 0.6;
  }

  @media (min-width: ${breakpoints.md}px) {
    &:first-child {
      ${Events} {
        justify-content: center;
      }

      .card {
        &:last-child {
          padding-top: 40px;
        }
      }
    }

    &:nth-child(2) {
      ${Events} {
        justify-content: flex-start;
      }
    }

    &:nth-child(3) {
      ${Events} {
        justify-content: flex-end;
        align-items: center;
      }
    }

    &:nth-child(4) {
      ${Events} {
        justify-content: flex-start;
        align-items: center;
      }
    }

    &:nth-child(5) {
      ${Events} {
        flex-flow: row-reverse nowrap;
        justify-content: center;

        .card {
          &:last-child {
            padding-top: 50px;
          }
        }
      }
    }

    &:nth-child(6) {
      ${Events} {
        flex-flow: row-reverse wrap;
        justify-content: space-between;

        .card {
          &:nth-child(2) {
            margin-right: 336px;
            margin-top: -20px;
          }

          &:last-child {
            margin-top: -70px;
          }
        }
      }
    }

    &:nth-child(7) {
      ${Events} {
        justify-content: center;

        .card {
          &:last-child {
            padding-top: 40px;
          }
        }
      }
    }

    &:nth-child(8) {
      ${Events} {
        justify-content: flex-start;
      }
    }

    &:nth-child(9) {
      ${Events} {
        justify-content: flex-end;
      }
    }
  }
`;

const Title = styled.h3`
  color: ${colors.white};
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 0.86px;
  text-transform: uppercase;
  text-align: center;
  border-bottom: 1px solid ${colors.blue};
  width: 100%;
  padding-bottom: 6px;
  margin-bottom: 20px;
`;

export { Container, Events, Title };