import styled, { css } from 'styled-components';
import { colors } from '../../ui';

const Font = css`
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.5px;
  font-weight: 600;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  width: 400px;

  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Name = styled.h3`
  ${Font};
  margin: 0;
  color: ${colors.blue};
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 4px;
  display: inline-flex;
  align-items: center;
`;

const Position = styled.h4`
  ${Font};
  margin: 0;
  color: ${colors.blue};
  font-size: 18px;
  margin-bottom: 8px;
`;

const Bio = styled.p`
  ${Font};
  font-size: 16px;
  letter-spacing: 0.57px;
  line-height: 1.4;
  color: ${colors.darkGrey};
  margin: 0;

  a {
    color: ${colors.blue};
    text-decoration: none;
  }
`;

const IconLink = styled.a`
  cursor: pointer;
  margin-left: 12px;
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
`;

export { Bio, Container, Icon, IconLink, Name, Position };