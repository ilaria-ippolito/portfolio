import React from 'react';
import styled from 'styled-components';
import { Mail, Linkedin } from 'lucide-react';

const Section = styled.section`
  // background: var(--color-neutral-700);
  border-radius: var(--radius-lg);
  padding: 4rem 5rem;
  margin-top: 4.5rem;
  @media (max-width: 900px) {
    padding: 3rem 2rem;
    margin-top: 2.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 500px;
  gap: 3rem;
  align-items: start;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  max-width: 760px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Headline = styled.h3`
  font-size: var(--type-title-lg);
  line-height: 1.15;
  margin: 0 0 1rem 0;
  color: var(--color-neutral-700);
  font-weight: 700;
`;

const Intro = styled.p`
  color: var(--color-neutral-700);
  margin: 0 0 0.75rem 0;
  font-size: var(--type-body);
  line-height: 1.6;
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NeonCard = styled.div`
  background: var(--color-accent-500);
  color: var(--color-neutral-700);
  border-radius: var(--radius-lg);
  padding: 2.25rem 2.25rem;
  width: 100%;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  @media (max-width: 900px) {
    width: 100%;
  }

  h4 {
    margin: 0;
    font-size: var(--type-title-md);
    font-weight: 700;
  }

  p {
    margin: 0;
    font-size: var(--type-body);
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
  border-radius: var(--radius-pill);
  background: var(--color-neutral-700);
  align-items: center;
  justify-content: center;
  text-decoration: none;

  img,
  svg {
    width: 22px;
    height: 22px;
    display: block;
  }
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
                href="https://www.linkedin.com/in/ilaria-ippolito/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin color="var(--color-accent-50)" size={20} />
              </IconLink>
              <IconLink href="mailto:info@example.com" aria-label="Email">
                <Mail color="var(--color-accent-50)" size={20} />
              </IconLink>
            </IconActions>
          </div>
        </NeonCard>
      </Right>
    </Grid>
  </Section>
);

export default CollabSection;
