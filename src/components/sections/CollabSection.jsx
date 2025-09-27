import React from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../SharedStyles';
import { Mail, Linkedin } from 'lucide-react';

const Section = styled.section`
  background: #0b0b0b;
  color: #fff;
  padding: 4rem 5rem;
  margin-top: 4.5rem;
  @media (max-width: 900px) {
    padding: 3rem 2rem;
    margin-top: 2.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 3rem;
  align-items: center;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  max-width: 760px;
`;

const Headline = styled.h3`
  font-size: 2.2rem;
  line-height: 1.15;
  margin: 0 0 1rem 0;
  color: #ffffff;
  font-weight: 700;
`;

const Intro = styled.p`
  color: #bfc6c9;
  margin: 0 0 0.75rem 0;
  font-size: 1rem;
  line-height: 1.6;
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NeonCard = styled.div`
  background: #d8ff00;
  color: #0b0b0b;
  border-radius: 16px;
  padding: 2.25rem 2.25rem;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  @media (max-width: 900px) {
    width: 100%;
  }

  h4 {
    margin: 0;
    font-size: 1.9rem;
    font-weight: 700;
  }

  p {
    margin: 0;
    font-size: 1.02rem;
    line-height: 1.6;
  }

  .actions {
    margin-top: 1rem;
  }
`;

const IconActions = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const IconLink = styled.a`
  display: inline-flex;
  width: 56px;
  height: 56px;
  border-radius: 999px;
  background: #0b0b0b;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: 2px solid rgba(0, 0, 0, 0.25);

  img,
  svg {
    width: 22px;
    height: 22px;
    display: block;
  }
`;

const MailSvg = styled.svg`
  width: 22px;
  height: 22px;
  display: block;
`;

const CollabSection = ({ id = 'collab-section' }) => (
  <Section id={id}>
    <Grid>
      <Left>
        <Headline>Parliamo del tuo progetto</Headline>
        <Intro>Offro supporto UX/UI per startup, team e progetti personali.</Intro>
        <Intro>
          Posso aiutarti con discovery, prototipi e test utenti — iniziamo con una breve
          chiacchierata.
        </Intro>
      </Left>

      <Right>
        <NeonCard>
          <h4>Vuoi collaborare con me?</h4>
          <p>Hai domande sui miei servizi o vuoi propormi una collaborazione?</p>
          <p>Conosciamoci e creiamo insieme qualcosa di fantastico.</p>

          <div className="actions">
            <IconActions>
              <IconLink
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin color="#fff" size={20} />
              </IconLink>
              <IconLink href="mailto:info@example.com" aria-label="Email">
                <Mail color="#fff" size={20} />
              </IconLink>
            </IconActions>
          </div>
        </NeonCard>
      </Right>
    </Grid>
  </Section>
);

export default CollabSection;
