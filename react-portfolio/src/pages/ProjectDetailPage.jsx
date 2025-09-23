// Styled-component for CTA button
const ProjectCtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #e260d9;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #da34cf;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(218, 52, 207, 0.2);
  }
  i {
    font-size: 1.1rem;
  }
`;
// Styled-component for horizontal padding
const CustomPaddingX = styled.section`
  padding: 0 5rem;
`;

import Header from '../components/Header';
import Footer from '../components/Footer';
import MetaItem from '../components/MetaItem';
import ProcessStep from '../components/ProcessStep';
import Section from '../components/Section';
import styled from 'styled-components';
// Styled-components for GoToHome (reuse from CvPage)
const GoToHome = styled.div`
  margin: 2rem 0 4rem 0;
  display: flex;
  align-items: center;
`;

const HomeButton = styled.button`
  background: none;
  border: 2px solid #f920ce;
  color: #f920ce;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 2rem;
  padding: 0.7rem 2.2rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #f920ce;
    color: #fff;
  }
`;

const ProjectDetailsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
`;

const ProjectHeader = styled.div`
  position: relative;
  margin-bottom: 3rem;
`;

const ProjectHero = styled.img`
  width: 100%;
  height: 450px;
  border-radius: 8px;
  object-fit: cover;
  overflow: hidden;
  margin-bottom: 3rem;
`;

const ProjectMeta = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const ProjectContent = styled.div``;

const ProjectSection = styled.div`
  margin-bottom: 4rem;
`;

const ProjectPdfLink = styled.a`
  display: inline-block;
`;

const HighlightedHeading = styled.div`
  margin-bottom: 2rem;
  display: inline-block;
`;

const SectionTitle = styled.h3`
  font-size: 2.5rem;
  color: #e5e5e5;
  font-weight: 700;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
  position: relative;
  display: inline-block;
  padding-left: 20px;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #000000;
  }
`;

const meta = [
  { label: 'Cliente:', value: 'Start2impact' },
  { label: 'Anno:', value: '2024' },
  { label: 'Ruolo:', value: 'UX/UI Designer' },
  { label: 'Strumenti:', value: 'Figma, HTML, CSS' },
];

const processSteps = [
  {
    number: 1,
    label: 'Ricerca e analisi',
    desc: 'Analisi del sito esistente, benchmark di competitor, raccolta di feedback dagli utenti.',
  },
  {
    number: 2,
    label: 'Wireframing',
    desc: 'Creazione di wireframe a bassa fedeltà per definire la nuova struttura del sito.',
  },
  {
    number: 3,
    label: 'Prototyping',
    desc: 'Sviluppo di prototipi interattivi ad alta fedeltà per testare la user experience.',
  },
  {
    number: 4,
    label: 'Sviluppo',
    desc: 'Implementazione del sito con HTML e CSS, ottimizzazione per l’accessibilità.',
  },
];

const results = [
  'Miglioramento dell’accessibilità e della navigazione per utenti con disabilità visive.',
  'Incremento del punteggio Lighthouse Accessibility da 60 a 100.',
  'Sito responsive e ottimizzato per dispositivi mobili.',
];


const ProjectDetailPage = () => (
  <ProjectDetailsWrapper>
    <Header />
    <main>
      <GoToHome>
        <a href="/">
          <HomeButton>← Torna alla home</HomeButton>
        </a>
      </GoToHome>
  <CustomPaddingX className="mb-5">
        <ProjectHeader>
          <ProjectHero
            src="assets/img/copertina-accessibilità.png"
            alt="Copertina progetto accessibilità"
          />
          <ProjectMeta>
            {meta.map((item, i) => (
              <MetaItem key={i} label={item.label} value={item.value} />
            ))}
          </ProjectMeta>
        </ProjectHeader>
        <ProjectContent>
          <ProjectSection>
            <HighlightedHeading>
              <SectionTitle>Processo.</SectionTitle>
            </HighlightedHeading>
            {processSteps.map((step, i) => (
              <ProcessStep key={i} {...step} />
            ))}
          </ProjectSection>
          <ProjectSection>
            <HighlightedHeading>
              <SectionTitle>Risultati.</SectionTitle>
            </HighlightedHeading>
            <ul>
              {results.map((result, i) => (
                <li key={i}>{result}</li>
              ))}
            </ul>
          </ProjectSection>
          <ProjectSection>
            <ProjectCtaButton
              href="assets/documents/progetto-accessibilità.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scarica il progetto completo (PDF)
            </ProjectCtaButton>
          </ProjectSection>
        </ProjectContent>
  </CustomPaddingX>
    </main>
    <Footer />
  </ProjectDetailsWrapper>
);

export default ProjectDetailPage;
