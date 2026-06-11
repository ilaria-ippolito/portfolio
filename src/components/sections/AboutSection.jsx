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
  grid-template-columns: minmax(0, 1.25fr) minmax(320px, 0.9fr);
  gap: 2rem;
  align-items: start;

  @media (max-width: 980px) {
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
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;

  @media (max-width: 980px) {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  }

  @media (max-width: 420px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const ToolCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  min-height: 116px;
  border-radius: var(--radius-md);
  padding: 0.9rem;
  border: 1px solid var(--color-border-soft);
  background: var(--color-neutral-0);
  box-shadow: var(--shadow-sm);
`;

const ToolIcon = styled.img`
  width: 34px;
  height: 34px;
  object-fit: contain;
`;

const ToolLabel = styled.span`
  margin: 0;
  color: var(--color-neutral-700);
  font-size: var(--type-body-sm);
  font-weight: 700;
  text-align: center;
`;

const tools = [
  { name: 'Figma', src: 'assets/img/icons/Figma.svg' },
  { name: 'Maze', src: 'assets/img/icons/Maze.svg' },
  { name: 'WAVE', src: 'assets/img/icons/Wave.svg' },
  { name: 'Miro', src: 'assets/img/icons/Miro.svg' },
  { name: 'Illustrator', src: 'assets/img/icons/Adobe_Illustrator.svg' },
  { name: 'Photoshop', src: 'assets/img/icons/Adobe_Photoshop.svg' },
  { name: 'HTML', src: 'assets/img/icons/HTML5.svg' },
  { name: 'CSS', src: 'assets/img/icons/CSS3.svg' },
];

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

      <Right aria-label="Design and prototyping tools">
        {tools.map((tool) => (
          <ToolCard key={tool.name}>
            <ToolIcon src={tool.src} alt="" loading="lazy" aria-hidden="true" />
            <ToolLabel>{tool.name}</ToolLabel>
          </ToolCard>
        ))}
      </Right>
    </Grid>
  </Section>
);

export default AboutSection;
