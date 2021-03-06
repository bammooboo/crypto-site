import React from 'react';
import { AnchorTo, Container, Title } from './ui';
import Timeline from '../Timeline';

const Roadmap = () => (
  <Container>
    <AnchorTo id="roadmap"></AnchorTo>
    <Title className="roadmap">Lorem ipsum</Title>
    <Timeline />
  </Container>
);

export default Roadmap;