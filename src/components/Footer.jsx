import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const FooterWrapper = styled.footer`
  /* make footer full-bleed across the viewport even when inside a centered root */
  position: relative;
  width: 100%;
  box-sizing: border-box;
  background-color: #000;
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
  border-top: 1px solid rgba(255,255,255,0.04);
  color: rgba(249,32,206,0.9);
  font-size: 0.95rem;
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
  color: #f920ce;
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
  color: #f920ce;
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 1;
`;

const FooterCols = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
  align-items: flex-start;

  @media (max-width: 900px) {
    justify-content: center;
    gap: 1.25rem;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: flex-start;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

const ColTitle = styled.h4`
  margin: 0 0 0.5rem 0;
  color: #f920ce; /* use brand accent instead of yellow */
  font-size: 0.95rem;
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
  color: #9aa0a6;
  font-size: 0.95rem;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SocialLink = styled.a`
  margin-right: 10px;
  text-decoration: none;
  color: #f920ce;
  transition: none;
`;

const SocialImg = styled.img`
  width: 56px;
  height: 56px;
  max-width: 100%;
  display: block;
  vertical-align: middle;

  @media (max-width: 600px) {
    width: 44px;
    height: 44px;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: flex-start;
  margin-left: 0.75rem; /* space between icons and nav */
`;

const NavLink = styled.a`
  color: #9aa0a6;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
  &:hover {
    opacity: 0.9;
  }
`;

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FooterWrapper>
      <TopGrid>
        <FooterLeft>
          <BigText>design e strategia per prodotti digitali</BigText>
        </FooterLeft>

        <Col>
          <ColTitle>Scopri</ColTitle>
          <ColList>
            <ColItem><NavLink href="#work-section" onClick={(e) => handleScrollTo(e, 'work-section')}>Progetti</NavLink></ColItem>
            <ColItem><NavLink href="#stack-section" onClick={(e) => handleScrollTo(e, 'stack-section')}>Stack</NavLink></ColItem>
            <ColItem><NavLink href="#services-section" onClick={(e) => handleScrollTo(e, 'services-section')}>Servizi</NavLink></ColItem>
            <ColItem>
              <NavLink href="#about-section" onClick={(e) => handleScrollTo(e, 'about-section')}>About me</NavLink>
            </ColItem>
          </ColList>
        </Col>

        <Col>
          <ColTitle>Info & contatti</ColTitle>
          <ColList>
            <ColItem>
              <SocialIcons>
                <SocialLink href="https://www.linkedin.com/in/ilaria-ippolito-61928019a/" target="_blank" rel="noopener noreferrer">
                  <SocialImg src="/assets/img/linkedin logo.svg" alt="Linkedin" />
                </SocialLink>
                <SocialLink href="https://www.behance.net/ilariaippolito1" target="_blank" rel="noopener noreferrer">
                  <SocialImg src="/assets/img/behance logo.svg" alt="Behance" />
                </SocialLink>
              </SocialIcons>
            </ColItem>
          </ColList>
        </Col>
      </TopGrid>
      <BottomRow>
        © {new Date().getFullYear()} Ilaria Ippolito.
      </BottomRow>
    </FooterWrapper>
  );
};

export default Footer;
