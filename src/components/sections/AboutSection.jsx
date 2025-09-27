import React from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../SharedStyles';

const Section = styled.section`
  background: #0b0b0b;
  color: #fff;
  padding: 4rem 5rem;
  margin-top: 4.5rem;
  @media (max-width: 900px) {
    padding: 3rem 2rem;
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
  font-size: 2.2rem;
  line-height: 1.15;
  margin: 0 0 1.25rem 0;
  color: #ffffff;
  font-weight: 700;
`;

const Intro = styled.p`
  color: #bfc6c9;
  margin: 0 0 0.75rem 0;
  font-size: 0.98rem;
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
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  color: #e6e6e6;
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

const StatCard = styled.div`
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  min-height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
`;

const StatNumber = styled.div`
  font-weight: 700;
  font-size: 1.15rem;
  margin-bottom: 0.25rem;
`;

const StatText = styled.div`
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.7);
`;

const StatMuted = styled.div`
  font-size: 0.86rem;
  color: rgba(0, 0, 0, 0.7);
`;

const StatMuted2 = styled.div`
  font-size: 0.86rem;
  color: #d6d6d6;
`;

const Neon = styled(StatCard)`
  background: #d8ff00; /* neon-ish */
  color: #0b0b0b;
  transition: transform 220ms ease;
  @media (min-width: 901px) {
    transform: translateY(-6px);
  }
`;

const Pink = styled(StatCard)`
  background: #f4b6f0;
  color: #0b0b0b;
  /* offset to the right to create a staggered look */
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
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #e6e6e6;
`;

const AboutSection = ({ id = 'about-section' }) => (
  <Section id={id}>
    <Grid>
      <Left>
        <Headline>Ilaria — aspirante UX/UI Designer</Headline>
        <Intro>
          Sono in formazione come UX/UI Designer e porto con me un percorso creativo che passa
          dall'illustrazione e dalla fotografia fino alla comunicazione. Ho una laurea triennale in
          Discipline dello Spettacolo e della Comunicazione e un diploma in illustrazione; più
          recentemente ho approfondito la fotografia.
        </Intro>
        <Intro>
          Attualmente sto frequentando un master in UX/UI presso{' '}
          <a
            href="https://www.start2impact.it/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit' }}
          >
            Start2impact
          </a>{' '}
          (in corso). Mi appassiona progettare esperienze utili e accessibili: dal discovery al
          wireframing, fino a prototipi testabili.
        </Intro>
        <Intro>
          Ho esperienza pratica in contesti amministrativi e come fotografa per eventi, e sto
          cercando ruoli che mi permettano di mettere in pratica le competenze UX appena acquisite e
          crescere come designer.
        </Intro>

        <Ctas>
          <a href="/documents/progetto-accessibilità.pdf" style={{ textDecoration: 'none' }}>
            <PrimaryButton as="span">CV completo</PrimaryButton>
          </a>
          <a href="#work-section">
            <SecondaryButton>Progetti</SecondaryButton>
          </a>
        </Ctas>
      </Left>

      <Right>
        <Neon>
          <StatNumber>Master</StatNumber>
          <StatMuted>UX/UI Design — Start2impact (in corso)</StatMuted>
        </Neon>

        <Pink>
          <StatNumber>Diploma</StatNumber>
          <StatMuted>Illustrazione — Accademia d'Arte Bianca Cappello</StatMuted>
        </Pink>

        <Outlined>
          <StatNumber>Laurea</StatNumber>

          <StatMuted2>
            Discipline dello Spettacolo e della Comunicazione — Università di Pisa
          </StatMuted2>
        </Outlined>
      </Right>
    </Grid>
  </Section>
);

export default AboutSection;
