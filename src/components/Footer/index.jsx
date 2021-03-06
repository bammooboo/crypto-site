import React from 'react';
import { Container, Cta, CtaText, CtaWrap, Icon, IconLink, Icons, Inner, LinkBlock, Logo, Logos, Social, Text } from './ui';

const Footer = () => (
  <Container>
    <Inner>
      <Logos>
        <Logo>
          <img src="" alt=""></img>
        </Logo>
        <Logo>
          <img src="" alt=""></img>
        </Logo>
        <Logo>
          <img src="" alt=""></img>
        </Logo>
        <Logo>
          <img src="" alt=""></img>
        </Logo>
        <Logo>
          <img src="" alt=""></img>
        </Logo>
      </Logos>
      <Social>
        <Text>Lorem ipsum dolor sit.</Text>
        <Icons>
          <IconLink href="/" target="_blank" rel="noopener noreferrer">
            <Icon>
              <img src="" alt="" />
            </Icon>
          </IconLink>
          <IconLink href="/" target="_blank" rel="noopener noreferrer">
            <Icon>
              <img src="" alt="" />
            </Icon>
          </IconLink>
          <IconLink href="/" target="_blank" rel="noopener noreferrer">
            <Icon>
              <img src="" alt="" />
            </Icon>
          </IconLink>
          <IconLink href="/" target="_blank" rel="noopener noreferrer">
            <Icon>
              <img src="" alt="" />
            </Icon>
          </IconLink>
          <IconLink href="/" target="_blank" rel="noopener noreferrer">
            <Icon>
              <img src="" alt="" />
            </Icon>
          </IconLink>
        </Icons>
      </Social>
    </Inner>
    <LinkBlock>
      <CtaWrap>
        <CtaText>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</CtaText>
        <Cta href="" target="_blank" rel="noopener noreferrer">Lorem, ipsum.</Cta>
      </CtaWrap>
    </LinkBlock>
  </Container>
);

export default Footer;