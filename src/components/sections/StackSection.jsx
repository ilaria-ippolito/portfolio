import React from 'react';
import styled from 'styled-components';
import { HighlightedHeading, SectionTitle } from '../SharedStyles';

const StackWrapper = styled.section`
  margin-top: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem 2rem;
  align-items: center;
  margin-top: 1rem;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #fff;
  border: 1px solid #f1f1f1;
  padding: 0.8rem 1rem;
  border-radius: 0.8rem;
`;

const Icon = styled.img`
  width: 44px;
  height: 44px;
  object-fit: contain;
`;

const Label = styled.span`
  font-size: 1.05rem;
  font-weight: 600;
  color: #222;
`;

const tools = [
  { name: 'Figma', src: 'assets/img/icons/Figma.svg' },
  { name: 'HTML', src: 'assets/img/icons/HTML5.svg' },
  { name: 'CSS', src: 'assets/img/icons/CSS3.svg' },
  // { name: 'Miro', src: 'assets/img/icons/Miro.svg' },
  // { name: 'FigJam', src: 'assets/img/icons/FigJam.svg' },
  // { name: 'WAVE', src: 'assets/img/icons/WAVE.svg' },
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
