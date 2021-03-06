import styled, { css } from 'styled-components';
import { colors } from '../../ui';
import { Button } from '../Button';
import { HashLink } from 'react-router-hash-link';

const Animate = css`
  color: white;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;

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

  &.active {
    color: ${colors.white};

    &:before {
      width: 97.8%;
      background: ${colors.white};
    }
  }
`;


const Container = styled.nav`
  display: inline-flex;
  align-items: center;
`;

const List = styled.ul`
  list-style: none; 
  padding-left: 0;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  color: ${colors.white};
`;

const Item = styled.li`
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.43px;
  position: relative;

  &:not(:last-child) {
    margin-right: 24px;
  }
`;

const Link = styled(HashLink)`
  ${Animate}
`;

const LinkContainer = styled.a`
  text-decoration: none;
`;

const ButtonLink = styled(Button)`
`;

const ModalTrigger = styled.span`
  ${Animate}
`;

export { ButtonLink, Container, Item, Link, LinkContainer, List, ModalTrigger };