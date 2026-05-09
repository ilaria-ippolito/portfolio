import React from 'react';
import styled from 'styled-components';
import { Check, Eye, MonitorSmartphone, Route, Users } from 'lucide-react';
import { HighlightedHeading, SectionTitle, CheckMarkBullets } from '../SharedStyles';

const SkillsWrapper = styled.section`
  margin-top: var(--section-space);
`;

const Intro = styled.p`
  margin: 0 0 2rem;
  max-width: 44rem;
  color: var(--color-neutral-500);
  line-height: 1.7;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 100%;
  background: var(--color-neutral-900);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  padding: 1.6rem;
  color: var(--color-accent-50);
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.95rem;
`;

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 16px;
  background: rgba(217, 70, 209, 0.12);
  color: var(--color-primary-300);
  flex-shrink: 0;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  color: var(--color-accent-50);
`;

const Desc = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: var(--type-body-sm);
  line-height: 1.65;
`;

const skills = [
  {
    name: 'Product Design',
    icon: Route,
    desc: 'I map user journeys and structure flows so product experiences feel clear, usable, and ready to scale across features and screens.',
    bullets: ['User Flows', 'Information Architecture', 'Wireframes', 'Responsive patterns'],
  },
  {
    name: 'High-fidelity UI',
    icon: MonitorSmartphone,
    desc: 'I turn product requirements into polished web and mobile interfaces with consistency, hierarchy, and reusable component thinking.',
    bullets: ['UI components', 'Design System foundations', 'High-fidelity mockups', 'Interactive prototypes'],
  },
  {
    name: 'Accessibility',
    icon: Eye,
    desc: 'Accessibility is part of how I design, from contrast and hierarchy to keyboard-friendly interaction patterns and clearer content structure.',
    bullets: ['WCAG-aware reviews', 'Contrast checks', 'Keyboard focus states', 'Accessible UI patterns'],
  },
  {
    name: 'Collaboration',
    icon: Users,
    desc: 'I enjoy working with product managers and engineers to refine requirements, document decisions, and move designs into implementation.',
    bullets: ['Design handoff', 'Prototype walkthroughs', 'Shared feedback loops', 'Usability testing insights'],
  },
];

const ServicesSection = ({ id }) => (
  <SkillsWrapper id={id}>
    <HighlightedHeading>
      <SectionTitle>Skills</SectionTitle>
    </HighlightedHeading>
    <Intro>
      My strongest areas sit at the intersection of product thinking, interface design,
      accessibility, and team collaboration.
    </Intro>
    <Grid>
      {skills.map((skill) => {
        const IconComp = skill.icon;

        return (
          <Card key={skill.name}>
            <CardHeader>
              <IconWrapper>
                <IconComp size={22} aria-hidden="true" />
              </IconWrapper>
              <Title>{skill.name}</Title>
            </CardHeader>
            <Desc>{skill.desc}</Desc>
            <CheckMarkBullets>
              {skill.bullets.map((bullet) => (
                <li key={bullet}>
                  <Check aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </CheckMarkBullets>
          </Card>
        );
      })}
    </Grid>
  </SkillsWrapper>
);

export default ServicesSection;
