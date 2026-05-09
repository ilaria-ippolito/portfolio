import React from 'react';
import styled from 'styled-components';
import { HighlightedHeading, SectionTitle } from '../SharedStyles';

const ToolsWrapper = styled.section`
  margin-top: var(--section-space);
`;

const Intro = styled.p`
  margin: 0 0 2rem;
  max-width: 40rem;
  color: var(--color-neutral-500);
  line-height: 1.7;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
  min-height: 156px;
  background: var(--color-neutral-0);
  border: 1px solid var(--color-neutral-300);
  border-radius: var(--radius-md);
  padding: 1rem;
  box-shadow: 0 10px 20px rgba(47, 54, 61, 0.03);
`;

const Icon = styled.img`
  width: 42px;
  height: 42px;
  object-fit: contain;
`;

const Label = styled.span`
  font-size: var(--type-body);
  font-weight: 700;
  text-align: center;
  color: var(--color-neutral-700);
`;

const tools = [
  { name: 'Figma', src: 'assets/img/icons/Figma.svg' },
  { name: 'Maze', src: 'assets/img/icons/Maze.svg' },
  { name: 'WAVE', src: 'assets/img/icons/Wave.svg' },
  { name: 'Miro', src: 'assets/img/icons/Miro.svg' },
  { name: 'Illustrator', src: 'assets/img/icons/Adobe_Illustrator.svg' },
  { name: 'Photoshop', src: 'assets/img/icons/Adobe_Photoshop.svg' },
  { name: 'HTML', src: 'assets/img/icons/HTML5.svg' },
  { name: 'CSS', src: 'assets/img/icons/CSS3.svg' },
];

const StackSection = ({ id }) => (
  <ToolsWrapper id={id}>
    <HighlightedHeading>
      <SectionTitle>Tools</SectionTitle>
    </HighlightedHeading>
    <Intro>
      The tools I use most for design exploration, prototyping, usability testing, and
      documenting interfaces for handoff.
    </Intro>
    <Grid>
      {tools.map((tool) => (
        <Item key={tool.name}>
          <Icon src={tool.src} alt={tool.name} loading="lazy" />
          <Label>{tool.name}</Label>
        </Item>
      ))}
    </Grid>
  </ToolsWrapper>
);

export default StackSection;
