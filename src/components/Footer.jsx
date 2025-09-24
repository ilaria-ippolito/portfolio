import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  /* make footer full-bleed across the viewport even when inside a centered root */
  position: relative;
  width: 100%;
  height: 72px;
  box-sizing: border-box;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
  /* responsive horizontal padding to avoid overflow */
  padding-inline: 16px;
  @media (min-width: 900px) {
    padding-inline: 60px;
  }
  padding-block: 0;
`;

const FooterLeft = styled.div`
  color: #f920ce;
  text-decoration: none;
  font-size: 1.2rem;
  letter-spacing: 1px;
`;

const FooterRight = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
`;

const SocialLink = styled.a`
  margin-right: 10px;
  text-decoration: none;
  color: #f920ce;
  transition: none;
`;

const SocialImg = styled.img`
  width: 48px;
  height: 48px;
  max-width: 100%;
  display: block;
  vertical-align: middle;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterLeft>Ilaria Ippolito.</FooterLeft>
    <FooterRight>
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
    </FooterRight>
  </FooterWrapper>
);

export default Footer;
