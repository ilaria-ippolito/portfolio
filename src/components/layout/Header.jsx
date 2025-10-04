import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, X, Panda } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollToSection';
import { CustomPaddingX } from '../SharedStyles';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 0;
  background: ${({ scrolled }) =>
    scrolled
      ? 'rgba(255,255,255,0.95)'
      : 'transparent'};
  box-shadow: ${({ scrolled }) =>
    scrolled
      ? '0 2px 16px 0 rgba(0,0,0,0.06)'
      : 'none'};
  transition: background 0.25s, box-shadow 0.25s;
`;

const HeaderInner = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  padding: 0.5rem 0;
`;

const LogoTitle = styled.a`
  padding-inline: 1rem;
  vertical-align: middle;
  color: var(--color-primary-500);
  font-size: var(--type-title-lg);
  font-weight: 700;
  letter-spacing: 1px;
  text-decoration: none;
  cursor: pointer;
  &:focus-visible {
    outline: 2px solid rgba(226, 96, 217, 0.15);
    outline-offset: 2px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

const MenuToggleBtn = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  display: none;
  position: static;
  z-index: 200;
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 1.2rem;
    right: 1.2rem;
    background: var(--color-neutral-700, rgba(0,0,0,0.85));
    border-radius: var(--radius-pill);
    width: 44px;
    height: 44px;
  }
`;

const StyledNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  a {
    margin-right: 0;
    padding: 1.2rem;
    font-size: var(--type-body);
    font-weight: 700;
    letter-spacing: 1px;
    color: var(--color-primary-500);
    text-decoration: none;
    box-sizing: border-box;
    display: inline-block;
    position: relative;
    transition: color 0.25s cubic-bezier(0.4,0,0.2,1);
  }
  a::after {
    content: '';
    position: absolute;
    left: 1.2rem;
    right: 1.2rem;
    bottom: 0.7rem;
    height: 2px;
    background: var(--color-primary-500);
    border-radius: 1px;
    transform: scaleX(0);
    transition: transform 0.25s cubic-bezier(0.4,0,0.2,1);
    opacity: 0.7;
    pointer-events: none;
  }
  a:hover,
  a:focus-visible {
    color: var(--color-primary-700);
  }
  a:hover::after,
  a:focus-visible::after {
    transform: scaleX(1);
  }
  @media (max-width: 600px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--color-neutral-700);
    transform: translateX(${({ open }) => (open ? '0' : '100%')});
    transition: transform 0.3s ease;
    z-index: 150;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    ul {
      flex-direction: column;
      align-items: stretch;
      gap: 2.5rem;
      width: 100%;
      padding: 0;
    }
    a {
      display: block;
      width: 100%;
      max-width: 100%;
      font-size: var(--type-title-md);
      padding: 1rem 0;
      text-align: center;
    }
  }
`;


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <HeaderWrapper scrolled={scrolled}>
      <CustomPaddingX>
        <HeaderInner>
          <div className="logo d-inline">
            <LogoTitle href="/" onClick={handleLogoClick}>
              <Panda size={26} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
            </LogoTitle>
          </div>
          <MenuToggleBtn
            aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? <X size={32} color="var(--color-primary-500)" /> : <Menu size={32} color="var(--color-primary-500)" />}
          </MenuToggleBtn>
          <StyledNav open={menuOpen}>
            <ul>
              <li>
                <a href="#work-section" onClick={(e) => scrollToSection({ event: e, id: 'work-section', setMenuOpen, location, navigate })}>
                  Progetti
                </a>
              </li>
              <li>
                <a href="#stack-section" onClick={(e) => scrollToSection({ event: e, id: 'stack-section', setMenuOpen, location, navigate })}>
                  Stack
                </a>
              </li>
              <li>
                <a href="#services-section" onClick={(e) => scrollToSection({ event: e, id: 'services-section', setMenuOpen, location, navigate })}>
                  Servizi
                </a>
              </li>
              <li>
                <a href="#about-section" onClick={(e) => scrollToSection({ event: e, id: 'about-section', setMenuOpen, location, navigate })}>
                  Chi sono
                </a>
              </li>
            </ul>
          </StyledNav>
        </HeaderInner>
      </CustomPaddingX>
    </HeaderWrapper>
  );
};

export default Header;
