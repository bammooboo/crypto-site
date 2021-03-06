import React, { useEffect } from 'react';
import { Container } from './ui';
import timelineData from '../../data/timeline';
import Block from '../Block';

const Timeline = () => {
  const timeline = timelineData;

  useEffect(() => {
    const registerObserver = () => {
      const cards = document.querySelectorAll('.card');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        })
      });

      cards.forEach(card => {
        observer.observe(card);
      });
    }

    registerObserver();
  }, []);

  return (
    <Container>
      {timeline.map((time, index) => (
        <Block time={time} key={index} />
      ))}
    </Container>
  );
};

export default Timeline;