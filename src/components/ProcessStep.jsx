import React from 'react';
import styled from 'styled-components';

const ProcessStepContainer = styled.div`
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border-soft);
  padding: 1.5rem;
  background: var(--color-neutral-0);
  box-shadow: var(--shadow-sm);
`;

const StepHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`;

const StepNumber = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary-700);
  color: var(--color-accent-50);
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 700;
`;

const StepTitle = styled.h3`
  margin: 0;
  font-weight: 700;
  color: var(--color-neutral-700);
`;

const ProcessStep = ({ number, title, description }) => (
  <ProcessStepContainer>
    <StepHeader>
      <StepNumber>{number}</StepNumber>
      <StepTitle>{title}</StepTitle>
    </StepHeader>
    <p style={{ margin: 0, lineHeight: 1.7, color: 'var(--color-neutral-500)' }}>{description}</p>
  </ProcessStepContainer>
);

export default ProcessStep;
