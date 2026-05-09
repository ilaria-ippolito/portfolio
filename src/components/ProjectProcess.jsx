import React from 'react';
import styled from 'styled-components';
import ProcessStep from './ProcessStep';
import { HighlightedHeading, SectionTitle } from './SharedStyles';

const Section = styled.section`
  display: grid;
  gap: var(--project-section-gap, clamp(1.25rem, 2.2vw, 1.75rem));
`;

const StepsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--project-section-gap, clamp(1.25rem, 2.2vw, 1.75rem));

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

const ProcessTitle = styled(SectionTitle)`
  margin-bottom: 0;
`;

const ProjectProcess = ({ steps = [] }) => (
  <Section>
    <HighlightedHeading>
      <ProcessTitle>Process and Solution</ProcessTitle>
    </HighlightedHeading>
    <StepsWrapper>
      {steps.map((step) => (
        <ProcessStep key={step.number} {...step} />
      ))}
    </StepsWrapper>
  </Section>
);

export default ProjectProcess;
