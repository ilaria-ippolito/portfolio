import React from 'react';
import styled from 'styled-components';
import FullBleedCard from '../FullBleedCard';
import SplitCard from '../SplitCard';
import { HighlightedHeading, SectionTitle } from '../SharedStyles';

const Section = styled.section`
  margin-top: var(--section-space);
`;

const Intro = styled.p`
  margin: 0 0 2rem;
  max-width: 42rem;
  color: var(--color-neutral-500);
  line-height: 1.7;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr;
  gap: 1.5rem;
  align-items: stretch;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const projects = [
  {
    component: FullBleedCard,
    img: 'assets/img/projects/ticketone/card_cover.webp',
    imageAlt: 'Preview of the TicketOne case study interface redesign',
    title: 'TicketOne Redesign',
    summary:
      'A product redesign focused on a smoother purchase flow, responsive UI, and accessibility improvements for a high-traffic entertainment platform.',
    tags: ['B2B', 'Responsive UI', 'Accessibility'],
    href: '/project-detail?project=ticketone',
  },
  {
    component: SplitCard,
    img: 'assets/img/projects/ivegan/card_cover.webp',
    imageAlt: 'Preview of the iVegan case study interface redesign',
    title: 'iVegan Redesign',
    summary:
      'An e-commerce UX redesign that simplified product discovery and supported more accessible, test-informed shopping flows.',
    tags: ['E-commerce UX', 'Usability Testing', 'Accessibility'],
    href: '/project-detail?project=ivegan',
  },
  {
    component: SplitCard,
    img: 'assets/img/projects/orizon/card_cover.webp',
    imageAlt: 'Preview of the Orizon brand identity project',
    title: 'Orizon Brand Identity',
    summary:
      'A visual identity project centered on a cohesive brand system, reusable assets, and digital consistency across touchpoints.',
    tags: ['Visual Identity', 'Brand System', 'UI Assets'],
    href: '/project-detail?project=orizon',
  },
];

const FeaturedProjects = ({ id }) => (
  <Section id={id}>
    <HighlightedHeading>
      <SectionTitle>Case studies</SectionTitle>
    </HighlightedHeading>
    <Intro>
      A selection of product, e-commerce, and brand work shaped around structure, interface
      quality, and thoughtful execution across digital touchpoints.
    </Intro>
    <Container>
      {projects.map((project) => {
        const ProjectCard = project.component;

        return <ProjectCard key={project.title} {...project} />;
      })}
    </Container>
  </Section>
);

export default FeaturedProjects;
