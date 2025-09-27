import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: 0.8rem;
  text-decoration: none;
  color: inherit;
  height: 100%;
  min-height: 20rem;

  /* main image as background (for zoom effect) */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(${(p) => p.img});
    background-size: cover;
    background-position: center;
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
    background: rgba(0,0,0,0.45);
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
  color: #fff;
`;

const Title = styled.h3`
  margin: 0 0 0.4rem 0;
  font-size: 2rem;
  line-height: 1.05;
`;

const DateRange = styled.span`
  display: block;
  margin-top: 0.25rem;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
`;

const Meta = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin-bottom: 0.25rem;
`;

const Tag = styled.span`
  font-size: 0.78rem;
  color: #fff;
  background: rgba(226, 96, 217, 0.85);
  padding: 0.22rem 0.6rem;
  border-radius: 0.8rem;
  line-height: 1;
  box-shadow: 0 1px 4px rgba(0,0,0,0.12);
`;

const FullBleedCard = ({ img, title, tags = [], tools = [], dateRange, href = '#' }) => {
  const chips = (tools && tools.length ? tools : tags).slice(0, 3);
  return (
    <Wrapper img={img} href={href}>
      <Content>
        {chips.length > 0 && (
          <Meta>
            {chips.map((t) => (
              <Tag key={t}>{t}</Tag>
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
