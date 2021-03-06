import React from 'react';
import Modal from '../Modal';
import { Container, PrimaryMembers, SecondaryMembers, Title } from './ui';
import PrimaryMember from '../PrimaryMember';
import SecondaryMember from '../SecondaryMember';
import primaryMembers from '../../data/primaryMembers';
import secondaryMembers from '../../data/secondaryMembers';

const Team = ({ closeModal, showModal }) => {
  return (
    <Modal show={showModal} close={closeModal}>
      <Container>
        <Title>Lorem ipsum</Title>
        <PrimaryMembers>
          {primaryMembers.map((member, index) => (
            <PrimaryMember member={member} key={index} />
          ))}
        </PrimaryMembers>
        <SecondaryMembers>
          {secondaryMembers.map((member, index) => (
            <SecondaryMember member={member} key={index} />
          ))}
        </SecondaryMembers>
      </Container>
    </Modal>
  );
};

export default Team;