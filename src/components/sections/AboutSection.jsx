import React from 'react';
import styled from 'styled-components';
import { SecondaryButton } from '../SharedStyles';
import { Download } from 'lucide-react';
import { HighlightedHeading, SectionTitle } from '../SharedStyles';

const Section = styled.section`
  color: var(--color-neutral-700);
  margin-top: 4.5rem;
  border-radius: var(--radius-lg);
  @media (max-width: 900px) {
    margin-top: 2.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 3rem;
  align-items: start;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  max-width: 760px;
`;

const Intro = styled.p`
  color: var(--color-neutral-600);
  margin: 0 0 0.75rem 0;
  font-size: var(--type-body-sm);
  line-height: 1.6;
`;

const Ctas = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: stretch;
`;

const StatCard = styled.div`
  border-radius: var(--radius-md);
  padding: 1.25rem 1.5rem;
  min-height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StatNumber = styled.div`
  font-weight: 700;
  font-size: var(--type-body-lg);
  margin-bottom: 0.25rem;
`;

const StatText = styled.div`
  font-size: var(--type-label);
  color: var(--color-neutral-100);
`;

const StatMuted = styled.div`
  font-size: var(--type-label);
  color: rgba(0, 0, 0, 0.7);
`;

const Neon = styled(StatCard)`
  background: var(--color-accent-500);
  border: 1px solid var(--color-neutral-700);
  color: var(--color-neutral-700);
  transition: transform 220ms ease;
  @media (min-width: 901px) {
    transform: translateY(-6px);
  }

  margin-left: 2.4rem;
  @media (min-width: 1200px) {
    margin-left: 3.2rem;
  }
  @media (max-width: 900px) {
    margin-left: 0;
    transform: none;
  }
`;

const Pink = styled(StatCard)`
  background: var(--color-primary-500);
  color: var(--color-neutral-100);
  border: 1px solid var(--color-neutral-700);
  margin-left: 2.4rem;
  transition:
    margin 220ms ease,
    transform 220ms ease;
  @media (min-width: 1200px) {
    margin-left: 3.2rem;
  }
  @media (max-width: 900px) {
    margin-left: 0;
    transform: none;
  }
`;

const Outlined = styled(StatCard)`
  background: var(--color-neutral-700);
  color: var(--color-neutral-50);
`;

const AboutSection = ({ id = 'about-section' }) => (
  <Section id={id}>
    <HighlightedHeading>
      <SectionTitle>Chi sono</SectionTitle>
    </HighlightedHeading>
    <Grid>
      <Left>
        <Intro>
          Sono una <strong>UX/UI Designer</strong> con un background in discipline dello
          <strong> spettacolo e comunicazione</strong>.
        </Intro>
        <Intro>
          Ho completato un master intensivo in UX/UI dalla durata di <strong>900 ore </strong>
          presso{' '}
          <a
            href="https://www.start2impact.it/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit' }}
          >
            <strong>Start2impact</strong>
          </a>{' '}
          , dove ho affinato le mie competenze su tutte le fasi di progettazione: dalla{' '}
          <strong>discovery</strong> al
          <strong> wireframing</strong>, fino alla <strong>prototipazione e test utenti</strong>.
        </Intro>
        <Intro>
          Sono alla ricerca di opportunità che mi permettano di applicare e sviluppare le mie
          competenze UX/UI, e di
          <strong> crescere come designer</strong>.
        </Intro>

        <Ctas>
          <a href="assets/documents/cv.pdf" download style={{ textDecoration: 'none' }}>
            <SecondaryButton as="span">
              CV completo
              <Download size={18} style={{ marginLeft: 8 }} />
            </SecondaryButton>
          </a>
        </Ctas>
      </Left>

      <Right>
        <Outlined>
          <StatNumber>Master</StatNumber>
          <StatText>UX/UI Design — Start2impact</StatText>
        </Outlined>

        <Neon>
          <StatNumber>Laurea</StatNumber>
          <StatMuted>
            Discipline dello Spettacolo e della Comunicazione — Università di Pisa
          </StatMuted>
        </Neon>

        <Outlined>
          <StatNumber>Diploma</StatNumber>
          <StatText>Illustrazione — Accademia d'Arte Bianca Cappello</StatText>
        </Outlined>
      </Right>
    </Grid>
  </Section>
);

export default AboutSection;
