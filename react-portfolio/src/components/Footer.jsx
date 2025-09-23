import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  height: 72px;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  @media (max-width: 600px) {
    padding: 0 2rem;
  }
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
  &:hover, &:active {
    color: #1ff94b;
  }
`;

const SocialImg = styled.img`
  width: 48px;
  height: 48px;
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
