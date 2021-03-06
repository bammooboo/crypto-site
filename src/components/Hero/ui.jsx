import styled, { css } from 'styled-components';
import { breakpoints, colors } from '../../ui';
import { Button } from '../Button';
import {HashLink } from 'react-router-hash-link';

const Font = css`
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.43px;
  font-weight: 600;
`;

const Underline = css`
  color: ${colors.blue};
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  padding: 0.5rem 0;
  font-size: 12px;
  width: auto;

  &:before, &:after {
    content: '';
    display: block;
    position: absolute;
    height: 1px;
    width: 0;
    bottom: 4px;
  }

  &:before {
    transition: width 0s ease, background .4s ease;
		left: 0;
		right: 0;
  }

  &:after {
		right: 2.2%;
    background: ${colors.blue};
		transition: width .4s ease;
	}

  &:hover {
		&:before {
			width: 97.8%;
			background: ${colors.blue};
      transition: width .4s ease;
		}

		&:after {
			width: 97.8%;
      background: 0 0;
			transition: all 0s ease;
		}
	}
`;

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: repeat(6, 1fr);
  align-content: center;
  position: relative;

  @media (min-width: ${breakpoints.md}px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media (min-width: ${breakpoints.lg}px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

const TextWrap = styled.div`
  grid-column: 2 / span 5;
  grid-row: 1;
  max-width: 300px;
  margin-bottom: 32px;
  z-index: 1;

  @media (min-width: ${breakpoints.md}px) {
    grid-row: unset;
    grid-column: 5 / span 4;
  }

  @media (min-width: ${breakpoints.lg}px) {
    grid-column: 8 / span 4;
  }
`;

const VideoWrap = styled.div`
  grid-column: 1 / span 6;
  grid-row: 2;
  display: flex;
  align-items: center;
  z-index: 1;

  iframe {
    width: 100%;
  }

  @media (min-width: ${breakpoints.md}px) {
    grid-row: unset;
    grid-column: 1 / span 3;
    margin: 0 64px;

    iframe {
      width: 288px;
      height: 162px;
    }
  }

  @media (min-width: ${breakpoints.lg}px) {
    grid-column: 1 / span 7;

    iframe {
      width: 464px;
      height: 261px;
    }
  }

  @media (min-width: 1024px) {
    iframe {
      width: 560px;
      height: 315px;
    }
  }

  @media (min-width: 1200px) {
    iframe {
      width: 640px;
      height: 360px;
    }
  }
`;

const TitleBlock = styled.div`
  margin-bottom: 14px;
`;

const Title = styled.h1`
  ${Font}
  color: ${colors.white};
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 1.71px;
  max-width: 300px;
  margin: 0;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  span {
    color: ${colors.blue};
  }

  @media (min-width: ${breakpoints.lg}px) {
    font-size: 48px;
  }
`;

const Text = styled.p`
  ${Font}
  color: ${colors.white};
  max-width: 300px;
  font-size: 12px;
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 1px;
`;

const Link = styled(HashLink)`
  ${Font}
  ${Underline}
  margin-right: 20px;
`;

const ExternalLink = styled.a`
  ${Font}
  ${Underline}
`;

const LinkContainer = styled.a`
  text-decoration: none;
  display: block;
  padding-top: 12px;
`;

const ButtonLink = styled(Button)`
`;

const LinesContainer = styled.div`
  overflow: hidden;
  position: fixed;
  bottom: -5px;
  left: 0;
  right: 0;
  width: 100vw;
  z-index: ${({ animated }) => animated ? '0' : '4'};
  opacity: ${({ animated }) => animated ? '0' : '1'};
  transition: ${({ animated }) => animated ? 'opacity 1s cubic-bezier(.21,1,.84,1.01)' : 'opacity 2s cubic-bezier(.21,1,.84,1.01)'};
`;

const BarsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: ${({ animated }) => animated ? '-200px' : '0'};
  right: 0;
  transform: translateY(-50%);
  z-index: 0;
  width: 100vw;
  opacity: ${({ animated }) => animated ? '0' : '1'};
  transition: opacity 5s cubic-bezier(.21,1,.84,1.01), left 4s cubic-bezier(.21,1,.84,1.01);
`;

export { BarsContainer, ButtonLink, Container, ExternalLink, LinesContainer, Link, LinkContainer, Text, TextWrap, Title, TitleBlock, VideoWrap };