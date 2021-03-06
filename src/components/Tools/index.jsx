import React, { Fragment, useEffect, useState } from 'react';
import { AnchorTo, AreasContainer, Container, Description, Heading, Highlight, Image, ImageWrap, Inner, Link, TextWrap, Title, Wrap } from './ui';
import { Areas } from '../SVGs';
import { Button } from '../Button';
import toolsData from '../../data/tools';
import { breakpoints } from '../../ui';
import { withWindowSizeListener } from 'react-window-size-listener';
import useDocumentScrollThrottled from '../../utils/useDocumentScrollThrottled';

const Tools = ({ windowSize }) => {
  const tools = toolsData;

  const messageOne = (<Title>Lorem ipsum dolor sit amet <Highlight>consectetur adipisicing</Highlight></Title>);
  const messageTwo = (<Title>Lorem ipsum dolor <Highlight>sit</Highlight> amet <Highlight>consectetur</Highlight></Title>);
  const messageThree = (<Title>Lorem ipsum <Highlight>dolor</Highlight> sit</Title>);
  const messageFour = (<Title>Lorem ipsum dolor <Highlight>sit</Highlight></Title>);
  const messageFive = (<Title><Highlight>Lorem</Highlight>ipsum dolor sit amet</Title>);

  const [showAreas, setShowAreas] = useState(false);

  const threshold = windowSize.windowWidth > breakpoints.lg ? '-400px' : '-200px';

  useDocumentScrollThrottled(callbackData => {
    const { currentScrollTop } = callbackData;
    const moving = currentScrollTop / 50;
    const area = document.querySelector('.area');
    area.style.transform = `translateX(-${moving}%)`;
  });

  useEffect(() => {
    const registerObserver = () => {
      const tools = document.querySelector('.tools');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            console.log('show');
            setShowAreas(true);
          } else {
            console.log('hide');
            setShowAreas(false);
          }
        })
      }, {rootMargin: `${threshold} 0px`});

      observer.observe(tools);
    };

    registerObserver();

    const imageObserver = () => {
      const images = document.querySelectorAll('.image');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        })
      }, {rootMargin: `-50px 0px`});

      images.forEach(image => {
        observer.observe(image);
      });
    }

    imageObserver();

    const textObserver = () => {
      const textBlocks = document.querySelectorAll('.text');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        })
      });

      textBlocks.forEach(text => {
        observer.observe(text);
      });
    }

    textObserver();
  
  }, [threshold]);

  return (
    <Container id="tools" className="tools">
      <AreasContainer className="area" show={showAreas}>
        <Areas />
      </AreasContainer>
      <Heading>the tools</Heading>
      {tools.map((tool, index) => (
        <Inner key={index}>
          <Wrap layout={tool.layout}>
            {index === 4 &&<AnchorTo id="/"/>}
            <TextWrap layout={tool.layout} className="text">
              {index === 0 ? <Fragment>{messageOne}</Fragment> : index === 1 ? <Fragment>{messageTwo}</Fragment> : index === 2 ? <Fragment>{messageThree}</Fragment> : index === 3 ? <Fragment>{messageFour}</Fragment> : index === 4 ? <Fragment>{messageFive}</Fragment> : null}
              {tool.description && <Description>{tool.description}</Description>}
              {tool.linkUrl && (
                <Link href={tool.linkUrl} target="_blank" rel="noopener noreferrer">
                  <Button>{tool.link}</Button>
                </Link>
              )}
            </TextWrap>
            {tool.images.length > 0 && (
              <ImageWrap layout={tool.layout} className="image">
                {tool.images[0] && (
                  <Image layout={tool.layout}>
                    <img src={tool.images[0].src} alt={tool.images[0].src} />
                  </Image>
                )}
                {tool.images[1] && (
                  <Image layout={tool.layout}>
                    <img src={tool.images[1].src} alt={tool.images[1].src} />
                  </Image>
                )}
              </ImageWrap> 
            )} 
          </Wrap>
        </Inner>
      ))}
    </Container>
  );
};

export default withWindowSizeListener(Tools);