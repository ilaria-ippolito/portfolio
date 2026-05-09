import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import Layout from '../components/layout/Layout';
import ProjectHeader from '../components/ProjectHeader';
import ProjectOverview from '../components/ProjectOverview';
import ProjectProcess from '../components/ProjectProcess';
import {
  CheckMarkBullets,
  HighlightedHeading,
  PrimaryLinkButton,
  SectionTitle,
  SecondaryButton,
} from '../components/SharedStyles';
import { projectDetails } from '../data/projectDetailData';

const ProjectDetailsWrapper = styled.div``;

const CenteredHomeButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

const ProjectHero = styled.img`
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-neutral-300);
  display: block;
  width: 100%;
  max-height: 640px;
  object-fit: cover;
  object-position: center;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
`;

const ProjectContent = styled.div``;

const ProjectSection = styled.section`
  margin-bottom: 3rem;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(280px, 1fr);
  gap: 1.5rem;
  align-items: start;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

const TextContent = styled.div`
  p {
    margin: 0;
    max-width: 44rem;
    line-height: 1.75;
    color: var(--color-neutral-500);
  }
`;

const ImageContent = styled.div`
  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: var(--radius-md);
    border: 1px solid var(--color-neutral-300);
  }
`;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ProjectDetailPage = () => {
  const query = useQuery();
  const projectId = query.get('project') || 'ticketone';
  const selectedProject = projectDetails[projectId];

  if (!selectedProject) {
    return (
      <Layout>
        <ProjectDetailsWrapper>
          <h1>Case study not found</h1>
          <CenteredHomeButtonWrapper>
            <a href="/" style={{ textDecoration: 'none' }}>
              <SecondaryButton as="span">
                <ArrowLeft size={18} aria-hidden="true" />
                Back to home
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
    overviewAlt,
    challengeText,
    processSteps,
    results,
    resultsImage,
    resultsAlt,
    projectUrl,
    timeRange,
    coverImage,
    coverAlt,
  } = selectedProject;

  return (
    <Layout>
      <ProjectHero src={coverImage} alt={coverAlt} loading="lazy" />

      <ProjectDetailsWrapper>
        <ProjectHeader
          title={projectTitle}
          tags={projectTags}
          meta={meta}
          timeRange={timeRange}
          projectUrl={projectUrl}
        />

        <ProjectContent>
          <ProjectOverview
            overviewText={overviewText}
            overviewImage={overviewImage}
            overviewAlt={overviewAlt}
          />

          <ProjectSection>
            <HighlightedHeading>
              <SectionTitle>Challenge</SectionTitle>
            </HighlightedHeading>
            <TextContent>
              <p>{challengeText}</p>
            </TextContent>
          </ProjectSection>

          <ProjectProcess steps={processSteps} />

          <ProjectSection>
            <HighlightedHeading>
              <SectionTitle>Results</SectionTitle>
            </HighlightedHeading>
            <ContentGrid>
              <CheckMarkBullets color="var(--color-neutral-700)">
                {results.map((result) => (
                  <li key={result}>
                    <Check aria-hidden="true" />
                    <span>{result}</span>
                  </li>
                ))}
              </CheckMarkBullets>

              <ImageContent>
                <img src={resultsImage} alt={resultsAlt} loading="lazy" />
              </ImageContent>
            </ContentGrid>
          </ProjectSection>
        </ProjectContent>

        <CenteredHomeButtonWrapper>
          <a href="/" style={{ textDecoration: 'none' }}>
            <SecondaryButton as="span">
              <ArrowLeft size={18} aria-hidden="true" />
              Back to home
            </SecondaryButton>
          </a>
          {projectUrl ? (
            <PrimaryLinkButton
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${projectTitle} in Figma`}
            >
              Open in Figma
            </PrimaryLinkButton>
          ) : null}
        </CenteredHomeButtonWrapper>
      </ProjectDetailsWrapper>
    </Layout>
  );
};

export default ProjectDetailPage;
