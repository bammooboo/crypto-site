import styled from 'styled-components';
import { breakpoints, colors } from '../../ui';

const Container = styled.footer`
  position: relative;
  bottom: 0;
  margin: 0;
  width: 100vw;
  height: auto;
  overflow: hidden;
  z-index: 1;
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: repeat(6, 1fr);
  padding: 30px 0;

  @media (min-width: ${breakpoints.md}px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media (min-width: ${breakpoints.lg}px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  padding: 0 16px;
  height: 100%;
  max-width: 100%;
  grid-column: 1 / span 6;

  @media (min-width: ${breakpoints.md}px) {
    padding: 0 32px;
    grid-column: 2 / span 6;
  }

  @media (min-width: ${breakpoints.lg}px) {
    padding: 0 64px;
    grid-column: 1 / span 8;
    align-items: flex-start;
  }

  @media (min-width: ${breakpoints.xl}px) {
    grid-column: 1 / span 7;
  }
`;

const Logos = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  @media (min-width: ${breakpoints.md}px) {
    flex-flow: row nowrap;
    margin: 0 auto;
  }

  @media (min-width: ${breakpoints.lg}px) {
    flex-flow: row wrap;
    margin: unset;
    justify-content: flex-start;
  }
`;

const Logo = styled.div`
  margin-bottom: 12px;

  img {
    width: 100%;
  }

  @media (min-width: ${breakpoints.md}px) {
    margin-bottom: 0;

    &:not(:last-child) {
      margin-right: 28px;
    }
  }

  @media (min-width: ${breakpoints.lg}px) {
    margin-bottom: 24px;
  }
`;

const Social = styled.div`
  @media (min-width: ${breakpoints.lg}px) {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
`;

const Text = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.5px;
  color: ${colors.white};
  text-align: center;
  margin: 30px 0 24px;
  white-space: nowrap;

  @media (min-width: ${breakpoints.lg}px) {
    margin: unset;
    margin-right: 40px;
  }
`;

const Icons = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const IconLink = styled.a`
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 40px;
  }
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;

  img {
    width: 100%;
  }
`;

const LinkBlock = styled.div`
  display: none;

  @media (min-width: ${breakpoints.lg}px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-end;
    background-color: ${colors.blue};
    position: absolute;
    right: 0;
    top: 0;
    width: 305px;
    height: 100%;
    clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%);
    padding-right: 64px;
    padding-left: 32px;
  }
`;

const CtaWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`;

const CtaText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.64px;
  line-height: 1.4;
  color: ${colors.white};
  width: 190px;
  margin-bottom: 10px;
`;

const Cta = styled.a`
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.43px;
  font-weight: 600;
  color: ${colors.white};
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  padding: 0.5rem 0;
  font-size: 18px;
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
    background: ${colors.white};
		transition: width .4s ease;
	}

  &:hover {
		&:before {
			width: 97.8%;
			background: ${colors.white};
      transition: width .4s ease;
		}

		&:after {
			width: 97.8%;
      background: 0 0;
			transition: all 0s ease;
		}
	}
`;

export { Container, Cta, CtaText, CtaWrap, Icon, IconLink, Icons, Inner, LinkBlock, Logo, Logos, Social, Text };