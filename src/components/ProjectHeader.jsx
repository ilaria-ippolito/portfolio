import React from 'react';
import styled from 'styled-components';
import MetaItem from './MetaItem';
import { Tag, PrimaryLinkButton } from './SharedStyles';
import { ExternalLink } from 'lucide-react';

const HeaderWrapper = styled.header`
  margin-bottom: 2rem;
  width: 100%;
`;

const TitleRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 4rem;
  margin-bottom: 0.5rem;
  min-width: 0;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    justify-items: start;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.25rem;
  word-break: break-word;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
`;

const TimeRange = styled.div`
  color: var(--color-neutral-700);
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const MetaGrid = styled.div`
  background-color: var(--color-neutral-100);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 0.7rem;
  }
`;

/**
 * ProjectHeader
 * - title: string
 * - tags: array of strings
 * - meta: array of { label, value }
 */
const ProjectHeader = ({ title, tags = [], meta = [], timeRange, projectUrl }) => (
  <HeaderWrapper>
    <Tags>
      {tags.map((t, i) => (
        <Tag key={i}>{t}</Tag>
      ))}
    </Tags>
    <TitleRow>
      <Title style={{ minWidth: 0, overflowWrap: 'break-word' }}>{title}</Title>
      {projectUrl && (
        <PrimaryLinkButton as="a" href={projectUrl} target="_blank" rel="noopener noreferrer">
          <ExternalLink size={18} style={{ marginRight: '0.5rem' }} />
          Guarda su Figma
        </PrimaryLinkButton>
      )}
    </TitleRow>
    {timeRange && <TimeRange>{timeRange}</TimeRange>}
    <MetaGrid>
      {meta.map((m, i) => (
        <MetaItem key={i} label={m.label} value={m.value} />
      ))}
    </MetaGrid>
  </HeaderWrapper>
);

export default ProjectHeader;
