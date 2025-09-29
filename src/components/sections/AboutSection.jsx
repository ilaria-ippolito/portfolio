import React from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../SharedStyles';
import { Download } from 'lucide-react';

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

const Headline = styled.h2`
  font-size: var(--type-title-lg);
  line-height: 1.15;
  margin: 0 0 1.25rem 0;
  color: var(--color-neutral-700);
  font-weight: 700;
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

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.65rem 1rem;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.04);
  color: var(--color-neutral-50);
  text-decoration: none;
  font-size: 0.95rem;
  border: 1px solid rgba(255, 255, 255, 0.04);
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: stretch;
`;

import { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0); }
`;

const StatCard = styled.div`
  border-radius: var(--radius-md);
  padding: 1.25rem 1.5rem;
  min-height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: var(--shadow-sm);
  animation: ${float} 2.2s ease-in-out infinite;
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

const StatMuted2 = styled.div`
  font-size: var(--type-label);
  color: var(--color-neutral-300);
`;

const Neon = styled(StatCard)`
  background: var(--color-accent-500);
  border: 2px solid var(--color-neutral-700);
  color: var(--color-neutral-700);
  transition: transform 220ms ease;
  @media (min-width: 901px) {
    transform: translateY(-6px);
  }
`;

const Pink = styled(StatCard)`
  background: var(--color-primary-500);
  color: var(--color-neutral-50);
  border: 2px solid var(--color-neutral-700);
  margin-left: 2.4rem;
  transition: margin 220ms ease, transform 220ms ease;
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
    <Grid>
      <Left>
        <Headline><strong>Ilaria</strong> — <strong>UX/UI Designer</strong></Headline>
        <Intro>
          Sono una <strong>UX/UI Designer</strong> e porto con me un percorso creativo che passa
          dall'<strong>illustrazione</strong> e dalla <strong>fotografia</strong> fino alla comunicazione. Ho una laurea triennale in
           Discipline dello Spettacolo e della Comunicazione e un diploma in illustrazione; più
          recentemente ho approfondito lo studio della fotografia.
        </Intro>
        <Intro>
          Ho da poco terminato un master intensivodella durata di <strong>900 ore</strong> in UX/UI presso{' '}
          <a
            href="https://www.start2impact.it/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit' }}
          >
            <strong>Start2impact</strong>
          </a>{' '}
          . Mi appassiona progettare esperienze utili e accessibili: dalla fase di <strong>discovery</strong> al
          <strong> wireframing</strong>, fino al <strong>prototipo</strong>.
        </Intro>
        <Intro>
          Ho esperienza in contesti amministrativi e come fotografa per eventi, e sto
          cercando ruoli che mi permettano di mettere in pratica le competenze UX e
          <strong> crescere come designer</strong>.
        </Intro>

        <Ctas>
          <a href="assets/documents/cv.pdf" download style={{ textDecoration: 'none' }}>
            <PrimaryButton as="span">
              CV completo
              <Download size={18} style={{ marginLeft: 8 }} />
            </PrimaryButton>
          </a>
        </Ctas>
      </Left>

      <Right>
        <Neon>
          <StatNumber>Master</StatNumber>
          <StatMuted>UX/UI Design — Start2impact</StatMuted>
        </Neon>

        <Pink>
          <StatNumber>Laurea</StatNumber>
          <StatText>Discipline dello Spettacolo e della Comunicazione — Università di Pisa</StatText>
        </Pink>

        <Outlined>
          <StatNumber>Diploma</StatNumber>
          <StatMuted2>
            Illustrazione — Accademia d'Arte Bianca Cappello
          </StatMuted2>
        </Outlined>
      </Right>
    </Grid>
  </Section>
);

export default AboutSection;
