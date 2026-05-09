import React from 'react';
import styled from 'styled-components';
import { ExternalLink } from 'lucide-react';
import MetaItem from './MetaItem';
import { PrimaryLinkButton, Tag } from './SharedStyles';

const HeaderWrapper = styled.header`
  width: 100%;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TitleRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(2.1rem, 4vw, 3.4rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
  color: var(--color-neutral-700);
`;

const TimeRange = styled.p`
  margin: 0.8rem 0 0;
  color: var(--color-neutral-500);
  font-size: var(--type-body);
`;

const MetaGrid = styled.dl`
  background: var(--color-surface-soft);
  border: 1px solid var(--color-border-soft);
  border-radius: var(--radius-lg);
  padding: 1.35rem;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem 1.2rem;
  box-shadow: var(--shadow-sm);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectHeader = ({ title, tags = [], meta = [], timeRange, projectUrl }) => (
  <HeaderWrapper>
    {tags.length > 0 && (
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    )}

    <TitleRow>
      <div>
        <Title>{title}</Title>
        {timeRange ? <TimeRange>{timeRange}</TimeRange> : null}
      </div>

      {projectUrl ? (
        <PrimaryLinkButton
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${title} in Figma`}
        >
          <ExternalLink size={18} aria-hidden="true" />
          Open in Figma
        </PrimaryLinkButton>
      ) : null}
    </TitleRow>

    {meta.length > 0 && (
      <MetaGrid>
        {meta.map((item) => (
          <MetaItem key={item.label} label={item.label} value={item.value} />
        ))}
      </MetaGrid>
    )}
  </HeaderWrapper>
);

export default ProjectHeader;
