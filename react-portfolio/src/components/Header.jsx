import React, { useState, useEffect } from 'react';
import { Menu, X } from './LucideIcons';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: #000;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderInner = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const LogoTitle = styled.a`
  padding-inline: 1rem;
  vertical-align: middle;
  color: #f920ce;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-decoration: none;
  cursor: pointer;
  &:focus {
    outline: 2px solid rgba(249, 32, 206, 0.15);
    outline-offset: 2px;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

const MenuToggleBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
  display: none;
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
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
    padding: 1.5rem;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: #f920ce;
    text-decoration: none;
    transition: none;
    box-sizing: border-box;
    display: inline-block;
  }
  @media (max-width: 600px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #000;
    /* slide in/out via transform to avoid relying on viewport calculations */
    transform: translateX(${({ open }) => (open ? '0' : '100%')});
    transition: transform 0.3s ease;
    margin-top: 5rem;
    z-index: 99;
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
      font-size: 2.4rem;
      padding: 1.2rem 0;
      text-align: center;
    }
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
    <HeaderWrapper>
      <HeaderInner>
        <div className="logo d-inline">
          <LogoTitle href="/" onClick={handleLogoClick}>
            ilaria.
          </LogoTitle>
        </div>
        <MenuToggleBtn
          aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X size={32} color="#f920ce" /> : <Menu size={32} color="#f920ce" />}
        </MenuToggleBtn>
        <StyledNav open={menuOpen}>
          <ul>
            <li>
              <a
                href="#work-section"
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  if (location.pathname !== '/') {
                    navigate('/');
                    setTimeout(() => {
                      const el = document.getElementById('work-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  } else {
                    const el = document.getElementById('work-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                lavori.
              </a>
            </li>
            <li>
              <a href="/cv" onClick={() => setMenuOpen(false)}>
                chi sono.
              </a>
            </li>
          </ul>
        </StyledNav>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
