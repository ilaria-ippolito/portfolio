import React from 'react';
import styled from 'styled-components';
import ProcessStep from './ProcessStep';
import { HighlightedHeading, SectionTitle } from './SharedStyles';

const Section = styled.section`
  margin-bottom: 3rem;
`;

const StepsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectProcess = ({ steps = [] }) => (
  <Section>
    <HighlightedHeading>
      <SectionTitle>Process and Solution</SectionTitle>
    </HighlightedHeading>
    <StepsWrapper>
      {steps.map((step) => (
        <ProcessStep key={step.number} {...step} />
      ))}
    </StepsWrapper>
  </Section>
);

export default ProjectProcess;
