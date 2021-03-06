import styled from 'styled-components';
import { breakpoints, colors } from '../../ui';

const Container = styled.section`
  background-color: ${colors.white};
  position: relative;
  width: 100vw;
  min-height: 100vh;
  height: auto;
`;

const AreasContainer = styled.div`
  position: fixed;
  top: 50%;
  right: 0;
  left: 0;
  transform: translateY(-50%);
  z-index: 0;
  width: 100vw;
  opacity: ${({ show }) => show ? '1' : '0'};
  transition: ${({ show }) => show ? 'opacity 0.3s cubic-bezier(.21,1,.84,1.01)' : 'opacity 0s cubic-bezier(.21,1,.84,1.01)'};
`;

const Inner = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  align-content: center;
  position: relative;

  @media (min-width: ${breakpoints.md}px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media (min-width: ${breakpoints.lg}px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

const Wrap = styled.div`
  grid-column: 2 / span 4;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (min-width: ${breakpoints.md}px) {
    grid-column: 2 / span 6;
    flex-flow: ${({ layout }) => layout === 'left' ? 'row nowrap' : 'row-reverse nowrap'};
  }

  @media (min-width: ${breakpoints.lg}px) {
    grid-column: 2 / span 10;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  min-height: 200px;
  opacity: 0;
  transition: opacity 1.4s cubic-bezier(.21,1,.84,1.01), transform 1.2s cubic-bezier(.21,1,.84,1.01);
  transition-delay: 0.3s;

  @media (min-width: ${breakpoints.md}px) {
    width: 50%;
    transform: ${({ layout }) => layout === 'left' ? 'translateX(160px)' : 'translateX(-160px)'};
  }

  @media (min-width: ${breakpoints.lg}px) {
    min-height: 320px;
  }

  @media (min-width: ${breakpoints.xl}px) {
    min-height: 410px;
    max-width: 700px;
  }

  &.active {
    opacity: 1;
    transform: translateX(0);
    transition-duration: 0;
    transition-delay: 0;
  }
`;

const TextWrap = styled.div`
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  margin-bottom: 36px;
  opacity: 0;
  transition: opacity 1.4s cubic-bezier(.21,1,.84,1.01), transform 1.2s cubic-bezier(.21,1,.84,1.01);

  @media (min-width: ${breakpoints.md}px) {
    width: 40%;
    margin-bottom: 0;
    transform: ${({ layout }) => layout === 'left' ? 'translateX(-160px)' : 'translateX(160px)'};
  }

  &.active {
    opacity: 1;
    transform: translateX(0);
    transition-duration: 0;
  }
`;

const Title = styled.h3`
  color: ${colors.darkGrey};
  font-size: 28px;
  line-height: 1.4;
  letter-spacing: 1px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 14px;
`;

const Description = styled.p`
  color: ${colors.dust};
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: 0.5px;
  font-size: 14px;
  margin-bottom: 16px;
`;

const Highlight = styled.span`
  color: ${colors.blue};
`;

const Image = styled.div`
  position: absolute;

  &:first-child {
    top: ${({ layout }) => layout === 'left' ? '0' : 'unset'};
    right: ${({ layout }) => layout === 'left' ? '0' : 'unset'};
    left: ${({ layout }) => layout === 'left' ? 'unset' : '0'};
    bottom: ${({ layout }) => layout === 'left' ? 'unset' : '0'};
    width: 80%;
  }

  &:last-child {
    bottom: ${({ layout }) => layout === 'left' ? '0' : 'unset'};
    left: ${({ layout }) => layout === 'left' ? '0' : 'unset'};
    right: ${({ layout }) => layout === 'left' ? 'unset' : '0'};
    top: ${({ layout }) => layout === 'left' ? 'unset' : '0'};
    width: 50%;
  }

  &:only-child {
    width: 100%;
    top: 50%;
    left: 50%;
    right: unset;
    bottom: unset;
    transform: translate(-50%, -50%);
  }

  img {
    width: 100%;
  }
`;

const Heading = styled.h3`
  color: ${colors.blue};
  font-family: 'Open Sans', sans-serif;
  font-size: 64px;
  text-transform: lowercase;
  text-align: center;
  letter-spacing: 4.29px;
  margin: 0;
  padding-top: 100px;

  @media (min-width: ${breakpoints.md}px) {
    font-size: 80px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    font-size: 120px;
  }
`;

const Link = styled.a`
  text-decoration: none;
`;

const AnchorTo = styled.span`
  position: absolute;
  left: 0;
  top: -140px;
`;

export { AnchorTo, AreasContainer, Container, Description, Heading, Highlight, Image, ImageWrap, Inner, Link, TextWrap, Title, Wrap };