import React from 'react';
import styled from 'styled-components';
import { HighlightedHeading, SectionTitle } from './SharedStyles';

const Section = styled.section`
  display: grid;
  gap: var(--project-section-gap, clamp(1.25rem, 2.2vw, 1.75rem));
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 1fr);
  gap: var(--project-section-gap, clamp(1.25rem, 2.2vw, 1.75rem));
  align-items: start;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

const OverviewTitle = styled(SectionTitle)`
  margin-bottom: 0;
`;

const Text = styled.div`
  max-width: 44rem;

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
      <OverviewTitle>Overview</OverviewTitle>
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
