import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  align-items: start;
`;

const Text = styled.div`
  p {
    line-height: 1.6;
  }
`;

const Visual = styled.div`
  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: var(--radius-md);
  }
`;

/**
 * ProjectOverview
 * - overviewText: string
 * - overviewImage: string (src)
 */
const ProjectOverview = ({ overviewText, overviewImage }) => (
  <Section>
    <h3 style={{ marginBottom: '2rem', fontSize: 'var(--type-title-md)' }}>Overview</h3>

    <Grid>
      <Text>
        <p>{overviewText}</p>
      </Text>
      <Visual>{overviewImage ? <img src={overviewImage} alt="Overview visual" /> : null}</Visual>
    </Grid>
  </Section>
);

export default ProjectOverview;
