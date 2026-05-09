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
  background: var(--color-neutral-0);
  border: 1px solid var(--color-border-soft);
  border-radius: var(--radius-lg);
  padding: 1.6rem;
  color: var(--color-neutral-700);
  box-shadow: var(--shadow-sm);
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
  border-radius: var(--radius-md);
  background: var(--color-icon-soft);
  color: var(--color-primary-700);
  flex-shrink: 0;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  color: var(--color-neutral-700);
`;

const Desc = styled.p`
  margin: 0;
  color: var(--color-neutral-500);
  font-size: var(--type-body-sm);
  line-height: 1.65;
`;

const skills = [
  {
    name: 'Product Design',
    icon: Route,
    desc: 'I define journeys, flows, and page structure so complex products feel easier to navigate and easier to extend.',
    bullets: ['User Flows', 'Information Architecture', 'Wireframes', 'Responsive patterns'],
  },
  {
    name: 'High-fidelity UI',
    icon: MonitorSmartphone,
    desc: 'I translate requirements into interface systems with clear hierarchy, reusable components, and responsive behavior.',
    bullets: ['UI components', 'Design System foundations', 'High-fidelity mockups', 'Interactive prototypes'],
  },
  {
    name: 'Accessibility',
    icon: Eye,
    desc: 'I bring accessibility into the design process through readable contrast, inclusive interactions, and stronger content structure.',
    bullets: ['WCAG-aware reviews', 'Contrast checks', 'Keyboard focus states', 'Accessible UI patterns'],
  },
  {
    name: 'Collaboration',
    icon: Users,
    desc: 'I work closely with product managers and engineers to align decisions, document intent, and support implementation.',
    bullets: ['Design handoff', 'Prototype walkthroughs', 'Shared feedback loops', 'Usability testing insights'],
  },
];

const ServicesSection = ({ id }) => (
  <SkillsWrapper id={id}>
    <HighlightedHeading>
      <SectionTitle>Skills</SectionTitle>
    </HighlightedHeading>
    <Intro>
      My strongest areas sit across product structure, interface systems, accessibility, and
      close collaboration with delivery teams.
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
            <CheckMarkBullets color="var(--color-neutral-500)">
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
