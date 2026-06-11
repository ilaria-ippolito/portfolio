import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollToSection';
import { CustomPaddingX } from '../SharedStyles';

const HeaderWrapper = styled.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  background: ${({ $scrolled }) => ($scrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.78)')};
  backdrop-filter: blur(18px);
  border-bottom: 1px solid ${({ $scrolled }) => ($scrolled ? 'rgba(216, 222, 228, 0.95)' : 'transparent')};
  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
  box-shadow: ${({ $scrolled }) => ($scrolled ? '0 10px 28px rgba(47, 54, 61, 0.08)' : 'none')};

  @media (max-width: 760px) {
    ${({ $menuOpen }) =>
      $menuOpen &&
      `
        inset: 0;
        min-height: 100vh;
        min-height: 100dvh;
        background: #111315;
        backdrop-filter: none;
        border-bottom-color: transparent;
        box-shadow: none;
        overflow-y: auto;
      `}
  }
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  gap: 1rem;
`;

const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  color: var(--color-neutral-700);
  text-decoration: none;
  min-width: 0;

  @media (max-width: 760px) {
    color: ${({ $menuOpen }) => ($menuOpen ? 'var(--color-accent-50)' : 'var(--color-neutral-700)')};
  }
`;

const BrandText = styled.span`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
`;

const BrandName = styled.span`
  font-size: 0.98rem;
  font-weight: 700;
`;

const BrandRole = styled.span`
  font-size: var(--type-label);
  color: var(--color-neutral-500);
  letter-spacing: 0.04em;
  text-transform: uppercase;

  @media (max-width: 760px) {
    color: ${({ $menuOpen }) => ($menuOpen ? 'rgba(255, 255, 255, 0.72)' : 'var(--color-neutral-500)')};
  }
`;

const MenuToggleBtn = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  border: 1px solid var(--color-neutral-300);
  background: var(--color-neutral-0);
  color: var(--color-neutral-700);
  cursor: pointer;

  @media (max-width: 760px) {
    display: inline-flex;
    position: relative;
    z-index: 101;
    background: ${({ $menuOpen }) => ($menuOpen ? 'rgba(255, 255, 255, 0.06)' : 'var(--color-neutral-0)')};
    border-color: ${({ $menuOpen }) =>
      $menuOpen ? 'rgba(255, 255, 255, 0.14)' : 'var(--color-neutral-300)'};
    color: ${({ $menuOpen }) => ($menuOpen ? 'var(--color-accent-50)' : 'var(--color-neutral-700)')};
  }
`;

const StyledNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.35rem;
    margin: 0;
    padding: 0;
  }

  a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: 0.7rem 0.95rem;
    border-radius: 999px;
    color: var(--color-neutral-700);
    font-size: var(--type-body-sm);
    font-weight: 700;
    text-decoration: none;
    transition:
      background 0.18s ease,
      color 0.18s ease,
      transform 0.18s ease;
  }

  a:hover,
  a:focus-visible {
    background: var(--color-primary-50);
    color: var(--color-primary-700);
    transform: translateY(-1px);
  }

  @media (max-width: 760px) {
    position: absolute;
    inset: 0;
    z-index: 100;
    min-height: 100vh;
    min-height: 100dvh;
    padding: calc(6.5rem + env(safe-area-inset-top, 0px)) 1.5rem calc(2rem + env(safe-area-inset-bottom, 0px));
    background: #111315;
    overflow-y: auto;
    transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
    transition:
      transform 0.28s ease,
      opacity 0.28s ease;

    ul {
      flex-direction: column;
      align-items: stretch;
      gap: 1rem;
    }

    a {
      justify-content: center;
      width: 100%;
      min-height: 52px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: var(--color-accent-50);
      font-size: 1.05rem;
    }

    a:hover,
    a:focus-visible {
      background: var(--color-primary-500);
      color: var(--color-accent-50);
    }
  }
`;

const Overlay = styled.button`
  display: none;

  @media (max-width: 760px) {
    display: block;
    position: fixed;
    inset: 0;
    border: 0;
    background: transparent;
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
    transition: opacity 0.28s ease;
    z-index: 90;
  }
`;

const navItems = [
  { id: 'projects-section', label: 'Projects' },
  { id: 'skills-section', label: 'Skills' },
  { id: 'about-section', label: 'About' },
  { id: 'contact-section', label: 'Contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (event) => {
    event.preventDefault();
    setMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <HeaderWrapper $scrolled={scrolled} $menuOpen={menuOpen}>
      <CustomPaddingX>
        <HeaderInner>
          <Brand href="/" onClick={handleLogoClick} aria-label="Go to homepage" $menuOpen={menuOpen}>
            <BrandText>
              <BrandName>Ilaria Ippolito</BrandName>
              <BrandRole $menuOpen={menuOpen}>UX/UI Designer</BrandRole>
            </BrandText>
          </Brand>

          <Overlay
            type="button"
            aria-label="Close navigation"
            $open={menuOpen}
            onClick={() => setMenuOpen(false)}
          />

          <MenuToggleBtn
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setMenuOpen((open) => !open)}
            $menuOpen={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </MenuToggleBtn>

          <StyledNav $open={menuOpen} aria-label="Primary">
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(event) =>
                      scrollToSection({
                        event,
                        id: item.id,
                        setMenuOpen,
                        location,
                        navigate,
                      })
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </StyledNav>
        </HeaderInner>
      </CustomPaddingX>
    </HeaderWrapper>
  );
};

export default Header;
