import Layout from '../components/layout/Layout';
import ProjectHeader from '../components/ProjectHeader';
import ProjectOverview from '../components/ProjectOverview';
import ProjectProcess from '../components/ProjectProcess';
import styled from 'styled-components';
import {
  HighlightedHeading,
  SectionTitle,
  SecondaryButton,
  CheckMarkBullets,
} from '../components/SharedStyles';
import { ArrowLeft, Check } from 'lucide-react';
import { projectDetails } from '../data/projectDetailData';
import { useLocation } from 'react-router-dom';

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
  object-position: center;
  overflow: hidden;
  margin-top: 7rem;
  margin-bottom: 3rem;

  ${(props) =>
    props.$projectId !== 'orizon' &&
    `
    @media (max-width: 700px) {
      object-position: right;
    }
  `}
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

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

const TextContent = styled.div`
  p {
    line-height: 1.6;
    max-width: 50%;

    @media (max-width: 700px) {
      max-width: 100%;
    }
  }

  ul {
    padding-left: 1.2rem;
    margin: 0;
    list-style-type: disc;

    @media (max-width: 700px) {
      max-width: 100%;
    }
  }

  li {
    margin-bottom: 0.75rem;
    line-height: 1.6;
    font-size: var(--type-body);

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ImageContent = styled.div`
  img {
    display: block;
    max-width: 100%;
    object-fit: contain;
    width: 100%;
    height: auto;
    border-radius: var(--radius-md);
  }
`;

const ResultItem = styled.div`
  margin-bottom: 1rem;
`;

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
              <SecondaryButton>
                <ArrowLeft size={20} />
                Torna alla home
              </SecondaryButton>
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
    projectUrl,
    timeRange,
    coverImage,
  } = selectedProject;

  return (
    <Layout>
      <ProjectHero src={coverImage} alt="" $projectId={projectId} loading="lazy" />
      <ProjectDetailsWrapper>
        <TitleRow>
          <ProjectHeader
            title={projectTitle}
            tags={projectTags}
            meta={meta}
            timeRange={timeRange}
            projectUrl={projectUrl}
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
              <CheckMarkBullets color="var(--color-neutral-700)">
                {results.map((b, i) => (
                  <li key={i}>
                    <Check />
                    <span>{b}</span>
                  </li>
                ))}
              </CheckMarkBullets>
              <ImageContent>
                <img src={resultsImage} alt="Results visual" loading="lazy" />
              </ImageContent>
            </ContentGrid>
          </ProjectSection>
        </ProjectContent>
        <CenteredHomeButtonWrapper>
          <a href="/">
            <SecondaryButton>
              <ArrowLeft size={20} />
              Torna alla home
            </SecondaryButton>
          </a>
        </CenteredHomeButtonWrapper>
      </ProjectDetailsWrapper>
    </Layout>
  );
};

export default ProjectDetailPage;
