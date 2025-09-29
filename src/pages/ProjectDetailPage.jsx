import Layout from '../components/layout/Layout';
import ProjectHeader from '../components/ProjectHeader';
import ProjectOverview from '../components/ProjectOverview';
import ProjectProcess from '../components/ProjectProcess';
import styled from 'styled-components';
import {
  HighlightedHeading,
  SectionTitle,
  HomeButton,
  PrimaryLinkButton,
} from '../components/SharedStyles';
import { ArrowLeft } from 'lucide-react';
import { projectDetails } from '../data/projectDetailData';
const ProjectDetailsWrapper = styled.div``;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
`;

const CenteredHomeButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

const ProjectHero = styled.img`
  border-radius: var(--radius-md);
  border: 1px solid var(--color-neutral-300);
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
    border-radius: var(--radius-md);
  }
`;

const ResultItem = styled.div`
  margin-bottom: 1rem;
`;

import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ProjectDetailPage = () => {
  const query = useQuery();
  const projectId = query.get('project') || 'a11y';
  const selectedProject = projectDetails[projectId];

  if (!selectedProject) {
    return (
      <Layout>
        <ProjectDetailsWrapper>
          <h2>Progetto non trovato</h2>
        <CenteredHomeButtonWrapper>
          <a href="/">
            <HomeButton>
              <ArrowLeft size={20} />
              Torna alla home
            </HomeButton>
          </a>
        </CenteredHomeButtonWrapper>
        </ProjectDetailsWrapper>
      </Layout>
    );
  }

  const {
    projectTitle,
    projectTags,
    meta,
    overviewText,
    overviewImage,
    challengeText,
    processSteps,
    projectImages,
    results,
    resultsImage,
    behanceUrl,
    timeRange,
    coverImage,
  } = selectedProject;

  return (
    <Layout>
      {/* full-bleed hero */}
      <ProjectHero
        src={coverImage}
        alt=""
      />
      <ProjectDetailsWrapper>
        <TitleRow>
          <ProjectHeader
            title={projectTitle}
            tags={projectTags}
            meta={meta}
            timeRange={timeRange}
            behanceUrl={behanceUrl}
          />
        </TitleRow>
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
                {results.map((r, i) => (
                  <ResultItem key={i}>
                    <h3>{r.split(' ')[0]}</h3>
                    <p>{r}</p>
                  </ResultItem>
                ))}
              </TextContent>
              <ImageContent>
                <img src={resultsImage} alt="Results visual" />
              </ImageContent>
            </ContentGrid>
          </ProjectSection>
        </ProjectContent>
        <CenteredHomeButtonWrapper>
          <a href="/">
            <HomeButton>
              <ArrowLeft size={20} />
              Torna alla home
            </HomeButton>
          </a>
        </CenteredHomeButtonWrapper>
      </ProjectDetailsWrapper>
    </Layout>
  );
};

export default ProjectDetailPage;
