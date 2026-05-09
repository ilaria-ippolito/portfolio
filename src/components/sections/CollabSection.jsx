import React from 'react';
import styled from 'styled-components';
import { ArrowUpRight, Download, Linkedin, Mail } from 'lucide-react';
import { HighlightedHeading, PrimaryLinkButton, SectionTitle, SecondaryButton } from '../SharedStyles';

const Section = styled.section`
  margin-top: var(--section-space);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 430px);
  gap: 2rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  max-width: 45rem;
`;

const Headline = styled.h3`
  margin: 0 0 1rem;
  font-size: clamp(1.6rem, 3vw, 2.1rem);
  color: var(--color-neutral-700);
  line-height: 1.15;
`;

const Intro = styled.p`
  margin: 0 0 0.9rem;
  color: var(--color-neutral-500);
  line-height: 1.75;
`;

const ContactCard = styled.div`
  width: 100%;
  background: var(--color-neutral-900);
  color: var(--color-accent-50);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const CardTitle = styled.h3`
  margin: 0 0 0.6rem;
  font-size: 1.4rem;
`;

const CardText = styled.p`
  margin: 0 0 1.3rem;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.65;
`;

const Actions = styled.div`
  display: grid;
  gap: 0.75rem;
`;

const ContactButton = styled(PrimaryLinkButton)`
  justify-content: space-between;
  width: 100%;
`;

const SecondaryContactButton = styled(SecondaryButton)`
  width: 100%;
  justify-content: space-between;
  background: transparent;
  border-color: rgba(255, 255, 255, 0.15);
  color: var(--color-accent-50);

  &:hover,
  &:focus-visible {
    background: rgba(255, 255, 255, 0.08);
    color: var(--color-accent-50);
    border-color: rgba(255, 255, 255, 0.24);
  }
`;

const LinkRow = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 48px;
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 0.85rem 1rem;
  text-decoration: none;
  color: var(--color-accent-50);
  transition:
    border-color 0.18s ease,
    background 0.18s ease,
    transform 0.18s ease;

  &:hover,
  &:focus-visible {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(217, 70, 209, 0.45);
    transform: translateY(-1px);
  }
`;

const LinkLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  font-weight: 600;
`;

const CollabSection = ({ id = 'contact-section' }) => (
  <Section id={id}>
    <HighlightedHeading>
      <SectionTitle>Contact</SectionTitle>
    </HighlightedHeading>
    <Grid>
      <Left>
        <Headline>Open to product teams that care about clarity, usability, and craft.</Headline>
        <Intro>
          I'm interested in UX/UI and product design opportunities where I can contribute to
          scalable digital experiences, collaborate with multidisciplinary teams, and keep
          improving the quality of product decisions through design.
        </Intro>
        <Intro>
          If you'd like to discuss a role, a collaboration, or simply connect, you can reach me
          through email, LinkedIn, Behance, or my CV below.
        </Intro>
      </Left>

      <ContactCard>
        <CardTitle>Let's talk</CardTitle>
        <CardText>
          The fastest way to reach me is by email. You can also explore my profiles or download
          my CV for a quick overview of my background.
        </CardText>
        <Actions>
          <ContactButton href="mailto:ilariaippolito95@gmail.com" aria-label="Send an email to Ilaria">
            <LinkLabel>
              <Mail size={18} aria-hidden="true" />
              ilariaippolito95@gmail.com
            </LinkLabel>
            <ArrowUpRight size={16} aria-hidden="true" />
          </ContactButton>
          <LinkRow
            href="https://www.linkedin.com/in/ilaria-ippolito/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile"
          >
            <LinkLabel>
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </LinkLabel>
            <ArrowUpRight size={16} aria-hidden="true" />
          </LinkRow>
          <LinkRow
            href="https://www.behance.net/ilariaippolito1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Behance profile"
          >
            <LinkLabel>
              <span aria-hidden="true">Be</span>
              Behance
            </LinkLabel>
            <ArrowUpRight size={16} aria-hidden="true" />
          </LinkRow>
          <a
            href="/assets/documents/Ilaria_Ippolito_Resume.pdf"
            download
            aria-label="Download Ilaria Ippolito CV as PDF"
            style={{ textDecoration: 'none' }}
          >
            <SecondaryContactButton as="span">
              <LinkLabel>
                <Download size={18} aria-hidden="true" />
                Download CV
              </LinkLabel>
              <ArrowUpRight size={16} aria-hidden="true" />
            </SecondaryContactButton>
          </a>
        </Actions>
      </ContactCard>
    </Grid>
  </Section>
);

export default CollabSection;
