import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  border-radius: 0.8rem;
  overflow: hidden;
  border: 1px solid #eee;
  height: 100%;
`;

const ImageSide = styled.div`
  position: relative;
  flex: 0 0 45%;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(${(p) => p.img});
    background-size: cover;
    background-position: center;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
    transform: scale(1);
    z-index: 0;
  }
  ${Wrapper}:hover &::before {
    transform: scale(1.08);
  }
`;

const InfoSide = styled.div`
  padding: 1rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  justify-content: flex-start;
  flex: 1 1 auto;
  background: #000;
  color: #fff;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.2;
  color: #fff;
`;

const Meta = styled.div`
  margin-top: 0.25rem;
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  font-size: 0.72rem;
  color: #e260d9;
  background: rgba(226, 96, 217, 0.06);
  border: 1px solid rgba(226, 96, 217, 0.12);
  padding: 0.2rem 0.5rem;
  border-radius: 0.8rem;
  line-height: 1;
`;

const DateRange = styled.span`
  font-size: 0.85rem;
  color: #e0e0e0;
  margin-top: 0.25rem;
`;

const SplitCard = ({ img, title, tags = [], tools = [], dateRange, href = '#' }) => {
  const chips = (tools && tools.length ? tools : tags).slice(0, 3);
  return (
    <Wrapper href={href}>
      <ImageSide img={img} />
      <InfoSide>
        {chips.length > 0 && (
          <Meta aria-hidden={false}>
            {chips.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </Meta>
        )}

        {title && <Title>{title}</Title>}

        {dateRange && <DateRange>{dateRange}</DateRange>}

        {/* description intentionally removed and not rendered */}
      </InfoSide>
    </Wrapper>
  );
};

export default SplitCard;
