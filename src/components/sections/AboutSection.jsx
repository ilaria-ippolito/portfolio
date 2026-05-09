import React from 'react';
import styled from 'styled-components';
import { Download } from 'lucide-react';
import { HighlightedHeading, SectionTitle, SecondaryButton } from '../SharedStyles';

const Section = styled.section`
  color: var(--color-neutral-700);
  margin-top: var(--section-space);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(280px, 0.9fr);
  gap: 2rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  max-width: 48rem;
`;

const Intro = styled.p`
  margin: 0 0 1rem;
  font-size: var(--type-body);
  line-height: 1.75;
  color: var(--color-neutral-500);

  strong {
    color: var(--color-neutral-700);
  }
`;

const Ctas = styled.div`
  margin-top: 1.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const Right = styled.div`
  display: grid;
  gap: 1rem;
`;

const InfoCard = styled.div`
  border-radius: var(--radius-md);
  padding: 1.35rem 1.4rem;
  border: 1px solid
    ${({ $tone }) => ($tone === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'var(--color-border-soft)')};
  background:
    ${({ $tone }) =>
      $tone === 'dark'
        ? 'var(--color-neutral-900)'
        : $tone === 'soft'
          ? 'var(--color-primary-50)'
          : 'var(--color-neutral-0)'};
  color: ${({ $tone }) => ($tone === 'dark' ? 'var(--color-accent-50)' : 'var(--color-neutral-700)')};
  box-shadow: var(--shadow-sm);
`;

const InfoTitle = styled.h3`
  margin: 0 0 0.35rem;
  font-size: 1.05rem;
`;

const InfoText = styled.p`
  margin: 0;
  line-height: 1.65;
  color: ${({ $tone }) => ($tone === 'dark' ? 'rgba(255, 255, 255, 0.78)' : 'var(--color-neutral-500)')};
`;

const AboutSection = ({ id = 'about-section' }) => (
  <Section id={id}>
    <HighlightedHeading>
      <SectionTitle>About</SectionTitle>
    </HighlightedHeading>
    <Grid>
      <Left>
        <Intro>
          I'm a <strong>UX/UI Designer</strong> focused on <strong>B2B</strong> and
          <strong> Product Design</strong>, with a growing body of work across scalable web and
          mobile experiences.
        </Intro>
        <Intro>
          My background combines communication, visual culture, and an intensive UX/UI design
          program, which helps me turn complex requirements into interfaces that feel structured,
          intentional, and ready to evolve.
        </Intro>
        <Intro>
          I work in <strong>Figma</strong> across User Flows, high-fidelity UI, prototyping,
          Accessibility checks, and usability testing. I also enjoy collaborating closely with
          product managers and engineers to move ideas from exploration to implementation.
        </Intro>
        <Intro>
          I completed a UX/UI design program at{' '}
          <a href="https://www.start2impact.it/" target="_blank" rel="noopener noreferrer">
            Start2impact
          </a>{' '}
          after earlier studies in communication and visual disciplines.
        </Intro>

        <Ctas>
          <a
            href="/assets/documents/Ilaria_Ippolito_Resume.pdf"
            download
            aria-label="Download Ilaria Ippolito CV as PDF"
            style={{ textDecoration: 'none' }}
          >
            <SecondaryButton as="span">
              Download CV
              <Download size={18} aria-hidden="true" />
            </SecondaryButton>
          </a>
        </Ctas>
      </Left>

      <Right>
        <InfoCard $tone="dark">
          <InfoTitle>Focus</InfoTitle>
          <InfoText $tone="dark">
            B2B and product experiences for web and mobile, with special attention to structure,
            direction, and scalability.
          </InfoText>
        </InfoCard>

        <InfoCard $tone="soft">
          <InfoTitle>Strengths</InfoTitle>
          <InfoText>
            User Flows, Accessibility, Design System thinking, high-fidelity UI, prototyping,
            and usability testing.
          </InfoText>
        </InfoCard>

        <InfoCard>
          <InfoTitle>Collaboration</InfoTitle>
          <InfoText>
            Comfortable working with PMs and engineers through iteration, feedback, and handoff
            to keep product decisions grounded and buildable.
          </InfoText>
        </InfoCard>
      </Right>
    </Grid>
  </Section>
);

export default AboutSection;
