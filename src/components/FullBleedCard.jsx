import React from 'react';
import styled from 'styled-components';
import { TagSmall } from './SharedStyles';

const Wrapper = styled.a`
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-md);
  text-decoration: none;
  color: inherit;
  height: 100%;
  min-height: 20rem;

  /* main image as background (for zoom effect) */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(${(p) => p.$img});
    background-size: cover;
    background-position: top;
    z-index: 0;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
    transform: scale(1);
  }
  &:hover::before {
    transform: scale(1.08);
  }

  /* black overlay for text visibility */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    z-index: 1;
    pointer-events: none;
  }

  /* gradient overlay for extra contrast at the bottom */
  &::after {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.45) 0%,
      rgba(0, 0, 0, 0.55) 60%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }
`;

const Content = styled.div`
  position: absolute;
  z-index: 2;
  left: 2rem;
  top: 2rem;
  right: 2rem;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: var(--color-accent-50);
`;

const Title = styled.h3`
  margin: 0 0 0.4rem 0;
  font-size: var(--type-title-md);
  line-height: 1.05;
`;

const DateRange = styled.span`
  display: block;
  margin-top: 0.25rem;
  font-size: var(--type-body-sm);
  color: rgba(255, 255, 255, 0.9);
`;

const Meta = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin-bottom: 0.25rem;
`;

const FullBleedCard = ({ img, title, tags = [], tools = [], dateRange, href = '#' }) => {
  const chips = (tools && tools.length ? tools : tags).slice(0, 3);
  return (
    <Wrapper $img={img} href={href}>
      {/* Decorative background, but add a hidden img for lazy loading */}
      <img src={img} alt="" loading="lazy" style={{ display: 'none' }} />
      <Content>
        {chips.length > 0 && (
          <Meta>
            {chips.map((t) => (
              <TagSmall key={t}>{t}</TagSmall>
            ))}
          </Meta>
        )}

        {title && <Title>{title}</Title>}

        {dateRange && <DateRange>{dateRange}</DateRange>}
      </Content>
    </Wrapper>
  );
};

export default FullBleedCard;
