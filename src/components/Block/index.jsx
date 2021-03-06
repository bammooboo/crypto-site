import React from 'react';
import { Container, Events, Title } from './ui';
import Card from '../Card';

const Block = ({ time }) => (
  <Container>
    <Title>{time.time}</Title>
    <Events>
      {time.events.map((event, index) => (
        <Card event={event} number={index} key={index} />
      ))}
    </Events>
  </Container>
);

export default Block;