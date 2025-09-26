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
  min-height: 18rem;

  /* main image as background */
  background-image: url(${(p) => p.img});
  background-size: cover;
  background-position: center;

  /* slightly blurred panel at the bottom to improve contrast for bottom-aligned text */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(${(p) => p.img});
    background-size: cover;
    background-position: center bottom;
    /* stronger blur for improved legibility behind text */
    filter: blur(10px) saturate(0.95);
    transform: scale(1.06);
    /* clip the blurred layer to the bottom portion */
    /* 60% here leaves the top 60% clear, bottom 40% is blurred */
    clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
    opacity: 0.95;
    z-index: 0;
  }

  /* vertical gradient overlay to further darken the bottom for text legibility */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.5) 100%);
    z-index: 1;
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
  color: rgba(255,255,255,0.9);
`;

const Meta = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin-bottom: 0.25rem;
`;

const Tag = styled.span`
  font-size: 0.72rem;
  color: #e260d9;
  background: rgba(226,96,217,0.06);
  border: 1px solid rgba(226,96,217,0.12);
  padding: 0.2rem 0.5rem;
  border-radius: 0.8rem;
  line-height: 1;
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
