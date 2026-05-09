import React from 'react';
import styled from 'styled-components';
import { ArrowUpRight } from 'lucide-react';
import { TagSmall } from './SharedStyles';

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
  background: var(--color-neutral-0);
  border: 1px solid var(--color-neutral-300);
  border-radius: var(--radius-lg);
  overflow: hidden;
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
      border-color: rgba(167, 44, 161, 0.28);
      box-shadow: 0 18px 36px rgba(47, 54, 61, 0.08);
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
  gap: 1rem;
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

const MetaGrid = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem 1rem;
  margin: 0;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const MetaLabel = styled.dt`
  margin: 0;
  font-size: var(--type-label);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-neutral-500);
`;

const MetaValue = styled.dd`
  margin: 0;
  color: var(--color-neutral-700);
  font-size: var(--type-body-sm);
  line-height: 1.5;
`;

const Footer = styled.div`
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: var(--type-body-sm);
  font-weight: 700;
  color: var(--color-primary-700);
`;

const FullBleedCard = ({
  img,
  imageAlt,
  title,
  summary,
  tags = [],
  metaItems = [],
  href,
}) => {
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
        {metaItems.length > 0 && (
          <MetaGrid>
            {metaItems.map((item) => (
              <MetaItem key={item.label}>
                <MetaLabel>{item.label}</MetaLabel>
                <MetaValue>{item.value}</MetaValue>
              </MetaItem>
            ))}
          </MetaGrid>
        )}
        {interactive ? (
          <Footer>
            View case study
            <ArrowUpRight size={16} aria-hidden="true" />
          </Footer>
        ) : null}
      </Body>
    </Wrapper>
  );
};

export default FullBleedCard;
