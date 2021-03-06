import styled from 'styled-components';
import { breakpoints, colors } from '../../ui';

const StyledInput = styled.input`
  border: 2px solid ${colors.blue};
  color: ${colors.darkGrey};
  border-radius: 0;
  height: 49px;
  width: 300px;
  font-family: 'Open Sans', sans-serif;
  appearance: none;
  outline: 0;
  padding: 0 8px;
  background-image: none;
  background-color: ${colors.white};
  box-shadow: none;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;

  &:disabled {
    cursor: not-allowed;
    color: ${colors.lightGrey};
  }

  &::placeholder {
    color: ${colors.lightGrey};
  }

  @media (min-width: ${breakpoints.md}px) {
    width: 100%;
  }
`;

const Wrapper = styled.label`
  display: block;
  position: relative;
  margin-bottom: 30px;

  @media (min-width: ${breakpoints.md}px) {
    width: 230px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    width: 380px;
  }
`;

export { StyledInput, Wrapper };