

import React, { useState, useEffect } from 'react';
import { Menu, X } from './LucideIcons';
import { useLocation, useNavigate } from 'react-router-dom';

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
    <header className="header d-flex justify-content-between align-items-center mb-3">
      <div style={{ width: '100%', maxWidth: '1300px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
        <div className="logo d-inline">
          <span className="logo__title">ilaria.</span>
        </div>
        {/* Burger icon for mobile (React only) */}
        <button
          aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
          style={{ background: 'none', border: 'none', padding: 0, display: 'none' }}
          className="menu-toggle-btn"
        >
          {menuOpen ? <X size={32} color="#f920ce" /> : <Menu size={32} color="#f920ce" />}
        </button>
        <nav className={`navigation${menuOpen ? ' open' : ''}`}>
          <ul className="navigation__list">
            <li>
                <a
                  className="navigation__item"
                  href="#work-section"
                  onClick={e => {
                    e.preventDefault();
                    setMenuOpen(false);
                    if (location.pathname !== '/') {
                      navigate('/');
                      // Wait for navigation, then scroll
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
              <a
                className="navigation__item"
                href="/cv"
                onClick={() => setMenuOpen(false)}
              >
                chi sono.
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Mobile menu logic for showing/hiding nav and burger */}
      <style>{`
        @media only screen and (max-width: 600px) {
          .menu-toggle-btn {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }
        }
        @media only screen and (max-width: 600px) {
          .checkbox__label {
            display: flex !important;
            cursor: pointer;
            color: #f920ce;
            padding: 10px;
            z-index: 100;
          }
          .checkbox__input {
            display: none;
          }
          .logo__title {
            display: none;
          }
          .navigation {
            position: fixed;
            top: 0;
            right: ${menuOpen ? '0' : '-100%'};
            width: 100%;
            height: 100vh;
            background-color: #000000;
            transition: right 0.3s ease;
            margin-top: 5rem;
            z-index: 99;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .navigation__list {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5rem !important;
          }
          .navigation__item {
            font-size: 3rem !important;
            color: #f920ce;
            text-decoration: none;
            font-weight: 700;
            letter-spacing: 1px;
            padding: 1.5rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
