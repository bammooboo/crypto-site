import React from 'react';
import { Container, Line } from './ui';

export default ({ active, clicked }) => (
  <Container onClick={clicked} active={active}>
    <Line className='top' />
    <Line className='middle' />
    <Line className='bottom' />
  </Container>
);