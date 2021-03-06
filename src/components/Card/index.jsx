import React from 'react';
import { Container, Description, ImageWrap, Title } from './ui';

const Card = ({ event, number }) => (
  <Container className="card">
    {event.title && <Title>{event.title}</Title>}
    {event.image &&
      <ImageWrap number={number}>
        <img src={event.image} alt={event.title} />
      </ImageWrap>
    }
    {event.desc && <Description>{event.desc}</Description>}
  </Container>
);

export default Card;