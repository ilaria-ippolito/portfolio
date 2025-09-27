import React from 'react';
import styled from 'styled-components';
import FullBleedCard from '../FullBleedCard';
import SplitCard from '../SplitCard';
import { HighlightedHeading, SectionTitle } from '../SharedStyles';


const Section = styled.section`
  margin-top: 3rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 1.5rem;
  align-items: stretch;
  grid-auto-rows: 1fr;
  grid-template-areas: 'full split1 split2';
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'full' 'split1' 'split2';
    grid-auto-rows: auto;
  }
`;

const AreaFull = styled.div`
  grid-area: full;
`;

const AreaSplit1 = styled.div`
  grid-area: split1;
`;

const AreaSplit2 = styled.div`
  grid-area: split2;
`;

const FeaturedProjects = ({ id }) => (
  <Section id={id}>
    <HighlightedHeading>
      <SectionTitle>I miei progetti</SectionTitle>
    </HighlightedHeading>
    <Container>
      <AreaFull>
        <FullBleedCard
          img="assets/img/copertina-progetto-grafica.jpg"
          title="Orizon — Brand Identity"
          tags={['Illustrator', 'Branding']}
          dateRange="Gen 2022 — Apr 2022"
          href="/project-detail?project=orizon"
        />
      </AreaFull>

      <AreaSplit1>
        <SplitCard
          img="assets/img/copertina-discovery.png"
          title="iVegan Discovery"
          tags={['User Research', 'IA']}
          dateRange="Mar 2021 — Jun 2021"
          href="/project-detail?project=ivegan_discovery"
        />
      </AreaSplit1>

      <AreaSplit2>
        <SplitCard
          img="assets/img/copertina-accessibilità.png"
          title="iVegan Accessibilità"
          tags={['WCAG', 'Audit']}
          dateRange="Nov 2020 — Feb 2021"
          href="/project-detail?project=ivegan_a11y"
        />
      </AreaSplit2>
    </Container>
  </Section>
);

export default FeaturedProjects;
