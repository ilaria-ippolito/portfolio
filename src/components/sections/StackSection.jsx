import React from 'react';
import styled from 'styled-components';
import { HighlightedHeading, SectionTitle } from '../SharedStyles';

const StackWrapper = styled.section`
  margin-top: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 2rem;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: transparent;
  border: 1px solid var(--color-neutral-300);
  padding: 0.8rem 1rem;
  border-radius: var(--radius-md);
  color: var(--color-neutral-700);
  min-width: 180px;
  max-width: 180px;
`;

const Icon = styled.img`
  width: 44px;
  height: 44px;
  object-fit: contain;
`;

const Label = styled.span`
  font-size: var(--type-body);
  font-weight: 600;
  color: var(--color-neutral-700);
`;

const tools = [
  { name: 'Figma', src: 'assets/img/icons/Figma.svg' },
  { name: 'HTML', src: 'assets/img/icons/HTML5.svg' },
  { name: 'CSS', src: 'assets/img/icons/CSS3.svg' },
  { name: 'Miro', src: 'assets/img/icons/Miro.svg' },
  { name: 'Maze', src: 'assets/img/icons/Maze.svg' },
  { name: 'WAVE', src: 'assets/img/icons/Wave.svg' },
  { name: 'Illustrator', src: 'assets/img/icons/Adobe_Illustrator.svg' },
  { name: 'Photoshop', src: 'assets/img/icons/Adobe_Photoshop.svg' },
];

const StackSection = ({ id }) => (
  <StackWrapper id={id}>
    <HighlightedHeading>
      <SectionTitle>Stack</SectionTitle>
    </HighlightedHeading>
    <Grid>
      {tools.map((t) => (
        <Item key={t.name}>
          <Icon src={t.src} alt={t.name} />
          <Label>{t.name}</Label>
        </Item>
      ))}
    </Grid>
  </StackWrapper>
);

export default StackSection;
