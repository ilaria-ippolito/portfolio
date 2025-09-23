import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="footer__left">Ilaria Ippolito.</div>
    <div className="footer__right">
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/ilaria-ippolito-61928019a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/img/linkedin logo.svg" alt="Linkedin" style={{ width: '20px', height: '20px' }} />
        </a>
        <a href="https://www.behance.net/ilariaippolito1" target="_blank" rel="noopener noreferrer">
          <img src="/assets/img/behance logo.svg" alt="Behance" style={{ width: '20px', height: '20px' }} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
