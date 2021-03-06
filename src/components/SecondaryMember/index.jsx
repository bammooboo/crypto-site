import React from 'react';
import { Telegram } from '../SVGs';
import { Bio, Container, Icon, IconLink, Name, Position } from './ui';

const SecondaryMember = ({ member }) => {
  return (
    <Container>
      <Name>
        {member.name}
        <IconLink href={member.tgLink} target="_blank" rel="noopener noreferrer">
          <Icon>
            <Telegram />
          </Icon>
        </IconLink>
      </Name>
      <Position>{member.position}</Position>
      <Bio>{member.bio}</Bio>
    </Container>
  );
};

export default SecondaryMember;