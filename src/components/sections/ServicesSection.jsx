import React from 'react';
import styled from 'styled-components';
import { HighlightedHeading, SectionTitle } from '../SharedStyles';
import { Compass, Users, Eye, Monitor, Check } from 'lucide-react';

const ServicesWrapper = styled.section`
  margin-top: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #181818;
  border: 1px solid #222;
  border-radius: 1.1rem;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.08);
  align-items: flex-start;
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  min-width: 48px;
  min-height: 48px;
  max-width: 48px;
  max-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(226, 96, 217, 0.09);
  border-radius: 0.6rem;
  color: #e260d9;
  flex: 0 0 48px;

  /* Ensure SVG icons are constrained to the wrapper */
  svg {
    width: 22px;
    height: 22px;
    display: block;
  }
`;

const Title = styled.h4`
  font-size: 1.25rem;
  font-weight: 800;
  margin: 0;
  letter-spacing: -0.01em;
  color: #fff;
`;

const Desc = styled.p`
  margin: 0.2rem 0 0.2rem 0;
  color: #e0e0e0;
  font-size: 1.05rem;
  line-height: 1.6;
`;

const Bullets = styled.ul`
  margin: 0.7rem 0 0 0;
  padding: 0;
  color: #fff;
  font-size: 1rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
    margin: 0;
    line-height: 1.5;
  }

  svg {
    width: 18px;
    height: 18px;
    flex: 0 0 18px;
    color: #10b981; /* green check */
    margin-top: 2px;
  }
`;

const services = [
  {
    name: 'UX Strategy',
    icon: Compass,
    desc: 'Pianificazione e definizione degli obiettivi di prodotto e roadmap di UX.',
    bullets: [
      'Workshop con stakeholder',
      'Visione prodotto e obiettivi',
      'Experience strategy',
      'KPI e metriche di successo',
    ],
  },
  {
    name: 'User Research',
    icon: Users,
    desc: 'Ricerche qualitative e quantitative per comprendere utenti e bisogni.',
    bullets: [
      'Interviste utente',
      'Test di usabilità',
      'Survey e analytics',
      'Personas e user journeys',
    ],
  },
  {
    name: 'Accessibilità',
    icon: Eye,
    desc: 'Valutazioni e miglioramenti per l’accessibilità digitale (WCAG).',
    bullets: [
      'Audit WCAG',
      'Test con tecnologie assistive',
      'Linee guida e remediation',
      'Design inclusivo',
    ],
  },
  {
    name: 'User Interface & Prototyping',
    icon: Monitor,
    desc: 'Design di interfacce e prototipi interattivi ad alta fedeltà.',
    bullets: ['Wireframes', 'Mockup ad alta fedeltà', 'Prototipi interattivi', 'Design systems'],
  },
];

const ServicesSection = ({ id }) => (
  <ServicesWrapper id={id}>
    <HighlightedHeading>
      <SectionTitle>I mie servizi</SectionTitle>
    </HighlightedHeading>
    <Grid>
      {services.map((s) => {
        const IconComp = s.icon;
        return (
          <Card key={s.name}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.2rem', width: '100%' }}>
              <IconWrapper>
                <IconComp size={22} />
              </IconWrapper>
              <Title>{s.name}</Title>
            </div>
            <Desc>{s.desc}</Desc>
            <Bullets>
              {s.bullets.map((b) => (
                <li key={b}>
                  <Check />
                  <span>{b}</span>
                </li>
              ))}
            </Bullets>
          </Card>
        );
      })}
    </Grid>
  </ServicesWrapper>
);

export default ServicesSection;
