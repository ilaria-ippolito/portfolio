import React from 'react';
import styled from 'styled-components';

const ProcessStepContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
`;

const StepNumber = styled.span`
  display: inline-block;
  background-color: #e260d9;
  color: #fff;
  width: 36px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  border-radius: 50%;
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
