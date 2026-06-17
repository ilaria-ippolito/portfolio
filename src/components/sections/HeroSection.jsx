import { PrimaryButton, SecondaryButton } from '../SharedStyles';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollToSection';

const Section = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
  min-height: calc(100vh - 9rem);
  padding: clamp(1rem, 3vw, 2.25rem) 0 var(--section-space);
`;

const Content = styled.div`
  max-width: 56rem;
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(2.85rem, 5.8vw, 5.4rem);
  line-height: 0.98;
  letter-spacing: -0.06em;
  color: var(--color-neutral-700);
`;

const Highlight = styled.span`
  color: var(--color-primary-500);
`;

const Summary = styled.p`
  margin: 1.5rem 0 0;
  max-width: 44rem;
  font-size: clamp(1rem, 1.8vw, 1.22rem);
  line-height: 1.75;
  color: var(--color-neutral-500);
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 2rem;

  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
  }
`;

const ActionLink = styled.a`
  display: flex;
  text-decoration: none;

  @media (max-width: 640px) {
    width: 100%;

    span {
      width: 100%;
    }
  }
`;

const Hero = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Section>
      <Content>
        <Title>
          Design that brings <Highlight>clarity</Highlight> to complex products.
        </Title>
        <Summary>
          I help product teams simplfy flows, shape, meaningfull experiences, and build UI
          systems that scale for users and teams.
        </Summary>

        <Actions>
          <ActionLink
            href="#projects-section"
            onClick={(event) =>
              scrollToSection({ event, id: 'projects-section', location, navigate })
            }
          >
            <PrimaryButton as="span">
              View case studies
              <ArrowRight size={18} aria-hidden="true" />
            </PrimaryButton>
          </ActionLink>
          <ActionLink
            href="/assets/documents/Ilaria_Ippolito_Resume.pdf"
            download
            aria-label="Download Ilaria Ippolito CV as PDF"
          >
            <SecondaryButton as="span">
              Download CV
              <Download size={18} aria-hidden="true" />
            </SecondaryButton>
          </ActionLink>
        </Actions>
      </Content>
    </Section>
  );
};

export default Hero;
