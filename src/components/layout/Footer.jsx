import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../../utils/scrollToSection';

const FooterWrapper = styled.footer`
  /* make footer full-bleed across the viewport even when inside a centered root */
  position: relative;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--color-neutral-700);
  overflow-x: hidden;
  /* responsive horizontal padding to avoid overflow */
  padding-inline: 16px;
  @media (min-width: 900px) {
    padding-inline: 60px;
  }
  /* increase vertical padding to make the footer taller */
  padding-block: 28px 18px;

  @media (max-width: 600px) {
    padding-block: 18px 12px;
  }
`;

const TopGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
  align-items: start;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    text-align: center;
    align-items: center;
  }
`;

const BottomRow = styled.div`
  width: 100%;
  margin-top: 48px;
  padding-top: 12px;
  color: var(--color-neutral-50);
  font-size: var(--type-label);
  text-align: center;
  @media (max-width: 900px) {
    margin-top: 36px;
  }
  @media (max-width: 600px) {
    margin-top: 28px;
    padding-top: 8px;
  }
`;

const FooterLeft = styled.div`
  max-width: 300px;
  color: var(--color-primary-500);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

const BigText = styled.span`
  color: var(--color-neutral-500);
  font-size: var(--type-title-md);
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 1;

  @media (max-width: 600px) {
    text-align: left;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: flex-start;
`;

const ColTitle = styled.h4`
  margin: 0 0 0.5rem 0;
  color: var(--color-primary-500); /* use brand accent instead of yellow */
  font-size: var(--type-body-sm);
  font-weight: 700;
`;

const ColList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ColItem = styled.li`
  color: var(--color-neutral-500);
  font-size: var(--type-body);
  display: flex;
  align-items: center;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SocialLink = styled.a`
  margin-right: 10px;
  text-decoration: none;
  color: var(--color-primary-500);
  transition: none;
`;

const SocialImg = styled.img`
  width: 36px;
  height: 36px;
  max-width: 100%;
  display: block;
  vertical-align: middle;
  object-fit: contain;
  padding: 0;
  margin: 0;
  background: none;

  @media (max-width: 600px) {
    width: 28px;
    height: 28px;
  }
`;

const NavLink = styled.a`
  color: var(--color-neutral-500);
  text-decoration: none;
  font-weight: 700;
  font-size: var(--type-body-sm);
  &:hover {
    opacity: 0.9;
  }
`;

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <FooterWrapper>
      <TopGrid>
        <FooterLeft>
          <BigText>Making Every Click Feels Just Right</BigText>
        </FooterLeft>

        <Col>
          <ColTitle>Scopri</ColTitle>
          <ColList>
            <ColItem>
              <NavLink
                href="#work-section"
                onClick={(e) =>
                  scrollToSection({ event: e, id: 'work-section', location, navigate })
                }
              >
                Progetti
              </NavLink>
            </ColItem>
            <ColItem>
              <NavLink
                href="#stack-section"
                onClick={(e) =>
                  scrollToSection({ event: e, id: 'stack-section', location, navigate })
                }
              >
                Stack
              </NavLink>
            </ColItem>
            <ColItem>
              <NavLink
                href="#services-section"
                onClick={(e) =>
                  scrollToSection({ event: e, id: 'services-section', location, navigate })
                }
              >
                Servizi
              </NavLink>
            </ColItem>
            <ColItem>
              <NavLink
                href="#about-section"
                onClick={(e) =>
                  scrollToSection({ event: e, id: 'about-section', location, navigate })
                }
              >
                Chi sono
              </NavLink>
            </ColItem>
          </ColList>
        </Col>

        <Col>
          <ColTitle>Contatti</ColTitle>
          <ColList>
            <ColItem>
              <SocialIcons>
                <SocialLink
                  href="https://www.linkedin.com/in/ilaria-ippolito-61928019a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialImg src="/assets/img/linkedin logo.svg" alt="Linkedin" />
                </SocialLink>
                <SocialLink
                  href="https://www.behance.net/ilariaippolito1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialImg src="/assets/img/behance logo.svg" alt="Behance" />
                </SocialLink>
              </SocialIcons>
            </ColItem>
          </ColList>
        </Col>
      </TopGrid>
      <BottomRow>
        © {new Date().getFullYear()} Tutti i diritti riservati - Ilaria Ippolito.
      </BottomRow>
    </FooterWrapper>
  );
};

export default Footer;
