import React from 'react';
import styled from 'styled-components';
import { HighlightedHeading, SectionTitle } from './SharedStyles';

const Section = styled.section`
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 1fr);
  gap: 1.5rem;
  align-items: start;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

const Text = styled.div`
  p {
    margin: 0;
    line-height: 1.75;
    color: var(--color-neutral-500);
  }
`;

const Visual = styled.div`
  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: var(--radius-md);
    border: 1px solid var(--color-neutral-300);
  }
`;

const ProjectOverview = ({ overviewText, overviewImage, overviewAlt }) => (
  <Section>
    <HighlightedHeading>
      <SectionTitle>Overview</SectionTitle>
    </HighlightedHeading>

    <Grid>
      <Text>
        <p>{overviewText}</p>
      </Text>
      <Visual>
        {overviewImage ? <img src={overviewImage} alt={overviewAlt} loading="lazy" /> : null}
      </Visual>
    </Grid>
  </Section>
);

export default ProjectOverview;
