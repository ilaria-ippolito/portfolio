import Layout from '../components/layout/Layout';
import ProjectHeader from '../components/ProjectHeader';
import ProjectOverview from '../components/ProjectOverview';
import ProjectProcess from '../components/ProjectProcess';
import styled from 'styled-components';
import {
  HighlightedHeading,
  SectionTitle,
  GoToHome,
  HomeButton,
  PrimaryLinkButton,
} from '../components/SharedStyles';

const ProjectDetailsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectHero = styled.img`
  border-radius: 8px;
  border: 1px solid #ddd;
  display: block;
  width: 100%;
  max-width: 100%;
  max-height: 650px;
  height: 450px;
  object-fit: cover;
  overflow: hidden;
  margin-top: 7rem;
  margin-bottom: 3rem;
`;

const ProjectContent = styled.div``;

const ProjectSection = styled.div`
  margin-bottom: 4rem;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
`;

const TextContent = styled.div`
  p {
    line-height: 1.6;
  }
`;

const ImageContent = styled.div`
  img {
    display: block;
    max-width: 100%;
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

const ResultItem = styled.div`
  margin-bottom: 1rem;
`;

const ProjectDownload = styled.div`
  margin-top: 2rem;
`;

const meta = [
  { label: 'Durata', value: '3 mesi' },
  { label: 'Ruolo', value: 'Brand Designer' },
  { label: 'Cliente', value: 'Orizon Travel' },
  { label: 'Anno', value: '2024' },
];

const processSteps = [
  {
    number: 1,
    title: 'Ricerca e analisi',
    description:
      'Analisi del sito esistente, benchmark di competitor, raccolta di feedback dagli utenti.',
  },
  {
    number: 2,
    title: 'Wireframing',
    description: 'Creazione di wireframe a bassa fedeltà per definire la nuova struttura del sito.',
  },
  {
    number: 3,
    title: 'Prototyping',
    description:
      'Sviluppo di prototipi interattivi ad alta fedeltà per testare la user experience.',
  },
  {
    number: 4,
    title: 'Sviluppo',
    description: 'Implementazione del sito con HTML e CSS, ottimizzazione per l’accessibilità.',
  },
];

const results = [
  'Miglioramento dell’accessibilità e della navigazione per utenti con disabilità visive.',
  'Incremento del punteggio Lighthouse Accessibility da 60 a 100.',
  'Sito responsive e ottimizzato per dispositivi mobili.',
];

const projectTitle = 'Nome Progetto';
const projectTags = ['Branding', 'UI', 'Accessibilità'];
const overviewText =
  'Descrizione dettagliata del progetto e degli obiettivi. Qui viene raccontato il contesto, gli utenti target e cosa si voleva raggiungere con il progetto.';
const overviewImage = 'assets/img/a11y-overview.png';
const challengeText =
  'Descrizione delle sfide affrontate durante il progetto e delle restrizioni tecniche o di progetto.';
const projectImages = [
  'assets/img/a11y-project_1.png',
  'assets/img/a11y-project_2.png',
  'assets/img/a11y-project_3.png',
];

const ProjectDetailPage = () => (
  <Layout>
    {/* full-bleed hero */}
    <ProjectHero
      src="assets/img/copertina-accessibilità.png"
      alt="Copertina progetto accessibilità"
    />
    <ProjectDetailsWrapper>
      <ProjectHeader
        title={projectTitle}
        tags={projectTags}
        meta={meta}
        timeRange={'Feb - Mar 2024'}
      />
      <ProjectContent>
        <ProjectOverview overviewText={overviewText} overviewImage={overviewImage} />

        <ProjectSection>
          <HighlightedHeading>
            <SectionTitle>La Sfida</SectionTitle>
          </HighlightedHeading>
          <TextContent>
            <p className="challenge-content">{challengeText}</p>
          </TextContent>
        </ProjectSection>

        <ProjectProcess steps={processSteps} images={projectImages} />

        {/* Results */}
        <ProjectSection>
          <HighlightedHeading>
            <SectionTitle>Risultati</SectionTitle>
          </HighlightedHeading>
          <ContentGrid>
            <TextContent>
              <p className="results-content">Qui i risultati principali del progetto:</p>
              {results.map((r, i) => (
                <ResultItem key={i}>
                  <h3>{r.split(' ')[0]}</h3>
                  <p>{r}</p>
                </ResultItem>
              ))}
            </TextContent>
            <ImageContent>
              <img src="assets/img/a11y-result.png" alt="Results visual" />
            </ImageContent>
          </ContentGrid>
        </ProjectSection>

        <ProjectSection>
          <ProjectDownload>
            <PrimaryLinkButton
              href="assets/documents/progetto-accessibilità.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scarica il progetto completo (PDF)
            </PrimaryLinkButton>
          </ProjectDownload>
        </ProjectSection>
      </ProjectContent>
      <GoToHome>
        <a href="/">
          <HomeButton>← Torna alla home</HomeButton>
        </a>
      </GoToHome>
    </ProjectDetailsWrapper>
  </Layout>
);

export default ProjectDetailPage;
