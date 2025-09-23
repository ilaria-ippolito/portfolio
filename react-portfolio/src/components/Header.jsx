

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
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 2.5rem 0;
  margin: 0;
`;

const HeaderInner = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const LogoTitle = styled.span`
  vertical-align: middle;
  color: #f920ce;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
  transition: left 0.3s;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }
`;

const NavItem = styled.a`
  margin-right: 0;
  padding: 1.5rem;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #f920ce;
  text-decoration: none;
  transition: color 0.2s;
  &:hover, &:active {
    color: #1ff94b;
  }
  @media (max-width: 600px) {
    font-size: 3rem;
    color: #f920ce;
    padding: 1.5rem;
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

const StyledNav = styled(Nav)`
  @media (max-width: 600px) {
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? '0' : '-100%')};
    width: 100%;
    height: 100vh;
    background-color: #000;
    transition: right 0.3s ease;
    margin-top: 5rem;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

  return (
    <HeaderWrapper>
      <HeaderInner>
        <div className="logo d-inline">
          <LogoTitle>ilaria.</LogoTitle>
        </div>
        <MenuToggleBtn
          aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X size={32} color="#f920ce" /> : <Menu size={32} color="#f920ce" />}
        </MenuToggleBtn>
        <StyledNav open={menuOpen}>
          <NavList>
            <li>
              <NavItem
                href="#work-section"
                onClick={e => {
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
              </NavItem>
            </li>
            <li>
              <NavItem
                href="/cv"
                onClick={() => setMenuOpen(false)}
              >
                chi sono.
              </NavItem>
            </li>
          </NavList>
        </StyledNav>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
