import { PrimaryButton, SecondaryButton, TagSmall } from '../SharedStyles';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollToSection';

const Section = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
  min-height: calc(100vh - 9rem);
  padding: clamp(2.5rem, 8vw, 6rem) 0 var(--section-space);
`;

const Content = styled.div`
  max-width: 56rem;
`;

const Eyebrow = styled.p`
  margin: 0 0 1rem;
  font-size: var(--type-body-sm);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary-700);
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(3rem, 8vw, 6.25rem);
  line-height: 0.95;
  letter-spacing: -0.06em;
  color: var(--color-neutral-700);
`;

const Summary = styled.p`
  margin: 1.5rem 0 0;
  max-width: 44rem;
  font-size: clamp(1.05rem, 2vw, 1.3rem);
  line-height: 1.7;
  color: var(--color-neutral-500);
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 1.75rem;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 2rem;
`;

const Hero = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Section>
      <Content>
        <Eyebrow>Ilaria Ippolito</Eyebrow>
        <Title>UX/UI Designer for clear, scalable digital products.</Title>
        <Summary>
          Focused on B2B and product design, I create web and mobile experiences with strong
          User Flows, Accessibility, Design System thinking, high-fidelity UI, prototyping,
          usability testing, and collaboration with product and engineering teams.
        </Summary>

        <Tags aria-label="Core strengths">
          <TagSmall>B2B</TagSmall>
          <TagSmall>Product Design</TagSmall>
          <TagSmall>Web + Mobile</TagSmall>
          <TagSmall>Accessibility</TagSmall>
        </Tags>

        <Actions>
          <a
            href="#projects-section"
            onClick={(event) =>
              scrollToSection({ event, id: 'projects-section', location, navigate })
            }
            style={{ textDecoration: 'none' }}
          >
            <PrimaryButton as="span">
              View case studies
              <ArrowRight size={18} aria-hidden="true" />
            </PrimaryButton>
          </a>
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
        </Actions>
      </Content>
    </Section>
  );
};

export default Hero;
