import React from 'react';
import styled from 'styled-components';
import { TagSmall } from './SharedStyles';

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
  background: var(--color-neutral-0);
  border: 1px solid var(--color-border-soft);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  ${({ $interactive }) =>
    $interactive &&
    `
    &:hover,
    &:focus-visible {
      transform: translateY(-3px);
      border-color: var(--color-border-accent);
      box-shadow: var(--shadow-md);
    }
  `}
`;

const Image = styled.img`
  width: 100%;
  height: clamp(16rem, 30vw, 24rem);
  object-fit: cover;
  object-position: top center;
`;

const Body = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 0.9rem;
  padding: 1.35rem;
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Title = styled.h3`
  margin: 0;
  font-size: clamp(1.45rem, 2vw, 1.85rem);
  line-height: 1.15;
  color: var(--color-neutral-700);
`;

const Summary = styled.p`
  margin: 0;
  color: var(--color-neutral-500);
  line-height: 1.65;
`;

const FullBleedCard = ({ img, imageAlt, title, summary, tags = [], href }) => {
  const interactive = Boolean(href);

  return (
    <Wrapper
      as={interactive ? 'a' : 'article'}
      href={interactive ? href : undefined}
      aria-label={interactive ? `Open ${title} case study` : undefined}
      $interactive={interactive}
    >
      <Image src={img} alt={imageAlt} loading="lazy" />
      <Body>
        {tags.length > 0 && (
          <Header>
            {tags.map((tag) => (
              <TagSmall key={tag}>{tag}</TagSmall>
            ))}
          </Header>
        )}
        <div>
          <Title>{title}</Title>
        </div>
        {summary ? <Summary>{summary}</Summary> : null}
      </Body>
    </Wrapper>
  );
};

export default FullBleedCard;
