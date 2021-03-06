import React, { useState } from 'react';
import { BarsContainer, ButtonLink, Container, ExternalLink, LinesContainer, Link, LinkContainer, Text, TextWrap, Title, TitleBlock, VideoWrap } from './ui';
import { Bars, Lines } from '../SVGs';
import TextGroup from '../TextGroup';
import useDocumentScrollThrottled from '../../utils/useDocumentScrollThrottled';

const Hero = () => {
  const [animateBars, setAnimateBars] = useState(false);
  const [animateLines, setAnimateLines] = useState(false);

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolledBars = currentScrollTop > 0;

    setAnimateBars(isScrolledDown && isMinimumScrolledBars);

    if(currentScrollTop < 10) {
      setAnimateLines(false);
    } else {
      setAnimateLines(true);
    }
  });

  return (
    <Container id="home">
      <BarsContainer className="bars" animated={animateBars}>
        <Bars />
      </BarsContainer>
      <LinesContainer className="lines" animated={animateLines}>
        <Lines />
        <TextGroup />
      </LinesContainer>
      <VideoWrap>
        <iframe title="" src="" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      </VideoWrap>
      <TextWrap>
        <TitleBlock>
          <Title>Lorem</Title>
          <Title>ip<span>su</span>m</Title>
        </TitleBlock>
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum neque praesentium, illo quae voluptatem rerum!</Text>
        <Link to="/">Lorem, ipsum dolor.</Link>
        <ExternalLink href="/" target="_blank">Lorem ipsum dolor sit amet.</ExternalLink>
        <LinkContainer href="/" target="_blank" rel="noopener noreferrer">
          <ButtonLink>Lorem, ipsum.</ButtonLink>
        </LinkContainer>
      </TextWrap>
    </Container>
  );
};

export default Hero;