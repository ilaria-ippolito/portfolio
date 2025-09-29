import React from 'react';
import styled from 'styled-components';
import ProcessStep from './ProcessStep';

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const StepsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem 2rem;
  margin-bottom: 4rem;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  > div {
    overflow: hidden;
    border-radius: var(--radius-md);
  }
  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

/**
 * ProjectProcess
 * - steps: [{ number, title, description }]
 * - images: array of src strings
 */
const ProjectProcess = ({ steps = [] }) => (
  <Section>
    <h3 style={{ marginBottom: '2rem', fontSize: 'var(--type-title-md)' }}>Processo e Soluzione</h3>
    <StepsWrapper>
      {steps.map((s, i) => (
        <ProcessStep key={i} {...s} />
      ))}
    </StepsWrapper>

    {/* <ImagesGrid>
      {images.map((src, i) => (
        <div key={i}>
          <img src={src} alt={`Project process ${i + 1}`} />
        </div>
      ))}
    </ImagesGrid> */}
  </Section>
);

export default ProjectProcess;
