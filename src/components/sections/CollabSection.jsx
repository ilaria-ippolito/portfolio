import React from 'react';
import styled from 'styled-components';
import { Mail, Linkedin } from 'lucide-react';

const Section = styled.section`
  border-radius: var(--radius-lg);
  margin-top: 4.5rem;
  @media (max-width: 900px) {
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
  font-size: var(--type-body-sm);
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
        <Headline>Incontra la tua prossima UX/UI Designer</Headline>
        <Intro>
          Sono alla ricerca di una realtà aziendale dove poter crescere come professionista UX/UI, contribuendo con passione e competenze a progetti innovativi e di valore. 
          Mi rivolgo a recruiter, CEO e team leader che desiderano rafforzare il proprio team con una figura orientata all’utente, alla collaborazione e al miglioramento continuo.
        </Intro>
        <Intro>
          Se stai cercando una UX/UI Designer motivata, curiosa e pronta a mettersi in gioco in un contesto stimolante, sarò felice di conoscerti e valutare nuove opportunità di crescita insieme.
        </Intro>
      </Left>

      <Right>
        <NeonCard>
          <h4>Vuoi conoscermi meglio?</h4>
          <p>Se pensi che il mio profilo possa essere adatto alla tua azienda, scrivimi!</p>
          <p>Sono pronta a portare entusiasmo, competenze e voglia di crescere nel tuo team.</p>

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
              <IconLink href="mailto:ilariaippolito95@gmail.com" aria-label="Email">
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
