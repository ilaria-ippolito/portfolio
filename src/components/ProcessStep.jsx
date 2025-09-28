import React from 'react';
import styled from 'styled-components';

const ProcessStepContainer = styled.div`
  border-radius: var(--radius-md);
  border: 1px solid var(--color-neutral-300);
  padding: 1.5rem;
  transition: all 0.3s ease;
`;

const StepNumber = styled.span`
  display: inline-block;
  background-color: var(--color-primary-500);
  color: var(--color-accent-50);
  width: 36px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  border-radius: var(--radius-pill);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const StepTitle = styled.h3`
  margin-bottom: 0.75rem;
  font-weight: 600;
`;

const ProcessStep = ({ number, title, description }) => (
  <ProcessStepContainer>
    <StepNumber>{number}</StepNumber>
    <StepTitle>{title}</StepTitle>
    <p>{description}</p>
  </ProcessStepContainer>
);

export default ProcessStep;
