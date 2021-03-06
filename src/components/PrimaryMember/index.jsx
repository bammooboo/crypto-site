import React from 'react';
import { Telegram } from '../SVGs';
import { Bio, Container, Content, Icon, IconLink, ImageWrap, Name, Position } from './ui';

const PrimaryMember = ({ member }) => {
  const kwBio =
    <Bio>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, tenetur repellat? Dicta cum, distinctio in repellendus totam repudiandae placeat debitis excepturi officiis vel unde fuga commodi accusamus quibusdam sit ea, ipsam ullam delectus assumenda hic itaque provident numquam amet nulla. Repellat vel commodi corrupti facilis doloribus facere, maxime vitae quod expedita architecto modi fuga, laboriosam quae amet rerum at quos officiis? Facilis eius nulla ipsa officiis, nisi aliquid enim.</Bio>
  ;
  return (
    <Container>
      <ImageWrap>
        <img src={member.image} alt={member.name} />
      </ImageWrap>
      <Content>
        <Name>
          {member.name}
          {member.tgLink && (
            <IconLink href={member.tgLink} target="_blank" rel="noopener noreferrer">
              <Icon>
                <Telegram />
              </Icon>
            </IconLink>
          )}
        </Name>
        <Position>{member.position}</Position>
        {member.name === "" ? (
          kwBio
        ) : (
          <Bio>{member.bio}</Bio>
        )}
      </Content>
    </Container>
  );
}

export default PrimaryMember;