import styled, { css } from 'styled-components';
import { breakpoints, colors } from '../../ui';

const Font = css`
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.5px;
  font-weight: 600;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 50px;
  }

  @media (min-width: ${breakpoints.md}px) {
    flex-flow: row nowrap;
    align-items: flex-start;
  }
`;

const ImageWrap = styled.div`
  width: 200px;
  min-width: 200px;
  margin-bottom: 48px;

  img {
    width: 100%;
  }

  @media (min-width: ${breakpoints.md}px) {
    margin-bottom: 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;

  @media (min-width: ${breakpoints.md}px) {
    margin-left: 62px;
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

export { Bio, Container, Content, Icon, IconLink, ImageWrap, Name, Position };