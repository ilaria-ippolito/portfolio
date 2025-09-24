import React from 'react';
import styled from 'styled-components';
import MetaItem from './MetaItem';

const HeaderWrapper = styled.header`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`;

const Tag = styled.span`
  padding: 0.4rem 0.8rem;
  border-radius: 1rem;
  background: #fff;
  border: 1px solid #f0f0f0;
  color: #e260d9;
  font-weight: 700;
  font-size: 0.9rem;
`;

const MetaGrid = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
`;

/**
 * ProjectHeader
 * - title: string
 * - tags: array of strings
 * - meta: array of { label, value }
 */
const ProjectHeader = ({ title, tags = [], meta = [] }) => (
  <HeaderWrapper>
    <Title>{title}</Title>
    <Tags>
      {tags.map((t, i) => (
        <Tag key={i}>{t}</Tag>
      ))}
    </Tags>

    <MetaGrid>
      {meta.map((m, i) => (
        <MetaItem key={i} label={m.label} value={m.value} />
      ))}
    </MetaGrid>
  </HeaderWrapper>
);

export default ProjectHeader;
