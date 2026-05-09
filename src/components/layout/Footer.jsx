import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Download, Linkedin, Mail } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollToSection';

const FooterWrapper = styled.footer`
  background: var(--color-neutral-900);
  color: var(--color-accent-50);
  padding: 2.5rem 0 1.5rem;
`;

const FooterInner = styled.div`
  width: min(100%, var(--container-max));
  margin-inline: auto;
  padding-inline: clamp(1rem, 4vw, 3rem);
`;

const TopGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

const BrandBlock = styled.div`
  max-width: 28rem;
`;

const BrandTitle = styled.h2`
  margin: 0 0 0.85rem;
  font-size: clamp(1.5rem, 2vw, 2rem);
  line-height: 1.1;
`;

const BrandText = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const ColTitle = styled.h3`
  margin: 0;
  font-size: var(--type-label);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.68);
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

const LinkBase = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  min-height: 44px;
  width: fit-content;
  color: var(--color-accent-50);
  text-decoration: none;
  border-radius: 999px;
  transition:
    color 0.18s ease,
    transform 0.18s ease;

  &:hover,
  &:focus-visible {
    color: var(--color-primary-300);
    transform: translateY(-1px);
  }
`;

const FooterButton = styled(LinkBase)`
  padding: 0.7rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
`;

const NavLink = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  color: rgba(255, 255, 255, 0.86);
  text-decoration: none;
  border-radius: 10px;

  &:hover,
  &:focus-visible {
    color: var(--color-primary-300);
  }
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const BottomRow = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.66);
  font-size: var(--type-body-sm);
`;

const navItems = [
  { id: 'projects-section', label: 'Projects' },
  { id: 'skills-section', label: 'Skills' },
  { id: 'tools-section', label: 'Tools' },
  { id: 'about-section', label: 'About' },
  { id: 'contact-section', label: 'Contact' },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <FooterWrapper>
      <FooterInner>
        <TopGrid>
          <BrandBlock>
            <BrandTitle>UX/UI Designer focused on B2B and product design.</BrandTitle>
            <BrandText>
              I design scalable web and mobile experiences with attention to User Flows,
              Accessibility, Design Systems, and close collaboration with product and
              engineering teams.
            </BrandText>
          </BrandBlock>

          <Col>
            <ColTitle>Explore</ColTitle>
            <NavList>
              {navItems.map((item) => (
                <li key={item.id}>
                  <NavLink
                    href={`#${item.id}`}
                    onClick={(event) =>
                      scrollToSection({ event, id: item.id, location, navigate })
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </NavList>
          </Col>

          <Col>
            <ColTitle>Contact</ColTitle>
            <ContactList>
              <FooterButton href="mailto:ilariaippolito95@gmail.com" aria-label="Email Ilaria">
                <Mail size={18} />
                ilariaippolito95@gmail.com
              </FooterButton>
              <FooterButton
                href="https://www.linkedin.com/in/ilaria-ippolito-61928019a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
              >
                <Linkedin size={18} />
                LinkedIn
                <ArrowUpRight size={16} aria-hidden="true" />
              </FooterButton>
              <FooterButton
                href="https://www.behance.net/ilariaippolito1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Behance profile"
              >
                <span aria-hidden="true">Be</span>
                Behance
                <ArrowUpRight size={16} aria-hidden="true" />
              </FooterButton>
              <FooterButton
                href="/assets/documents/Ilaria_Ippolito_Resume.pdf"
                download
                aria-label="Download Ilaria Ippolito CV as PDF"
              >
                <Download size={18} />
                Download CV
              </FooterButton>
            </ContactList>
          </Col>
        </TopGrid>

        <BottomRow>
          (c) {new Date().getFullYear()} Ilaria Ippolito. All rights reserved.
        </BottomRow>
      </FooterInner>
    </FooterWrapper>
  );
};

export default Footer;
