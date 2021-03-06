import styled from 'styled-components';
import { colors } from '../../ui';

const Button = styled.button`
  align-items: center;
  appearance: none;
  background-color: ${colors.blue};
  border: 1px solid transparent;
  box-shadow: none;
  color: ${colors.white};
  cursor: pointer;
  display: inline-flex;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  font-size: 12px;
  height: 36px;
  justify-content: center;
  letter-spacing: 0.43px;
  min-height: 36px;
  padding: 10px 12px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
  outline: none;
  width: auto;

  &:disabled {
    background-color: ${colors.lightGrey};
    cursor: not-allowed;
  }
`;

export { Button };