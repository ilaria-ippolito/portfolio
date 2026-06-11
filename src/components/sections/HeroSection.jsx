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

const Summary = styled.p`
  margin: 1.5rem 0 0;
  max-width: 44rem;
  font-size: clamp(1rem, 1.8vw, 1.22rem);
  line-height: 1.75;
  color: var(--color-neutral-500);
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 1.75rem;
`;

const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;
  margin-top: 2rem;

  @media (max-width: 640px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const ActionLink = styled.a`
  display: flex;
  width: 100%;
  text-decoration: none;

  span {
    width: 100%;
  }
`;

const Hero = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Section>
      <Content>
        <Title>UX/UI designer for digital products that feel clear and ready to scale.</Title>
        <Summary>
          I design web and mobile experiences with strong structure, accessible patterns, and
          polished UI systems that help product teams move from concept to release with
          confidence.
        </Summary>

        <Tags aria-label="Core strengths">
          <TagSmall>B2B</TagSmall>
          <TagSmall>Product Design</TagSmall>
          <TagSmall>Web + Mobile</TagSmall>
          <TagSmall>Accessibility</TagSmall>
        </Tags>

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
