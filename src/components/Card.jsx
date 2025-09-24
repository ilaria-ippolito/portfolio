import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.a`
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 0.8rem;
  margin: 1rem;
  padding: 1rem;
  width: calc(33.33% - 2rem);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  transition: none;
  display: flex;
  flex-direction: column;
  height: 100%;
  color: inherit;
  /* hover disabled */
  @media (max-width: 1300px) {
    width: calc(50% - 2rem);
    padding: 0.9rem;
  }
  @media (max-width: 1024px) {
    width: 100%;
    margin: 1rem 0;
    padding: 0.8rem;
  }
`;

const CardImg = styled.img`
  margin-bottom: 1rem;
  width: 100%;
  height: 15rem;
  object-fit: cover;
  border-radius: 0.5rem 0.5rem 0 0;
  @media (max-width: 1300px) {
    height: 13rem;
  }
  @media (max-width: 1024px) {
    height: 12rem;
  }
`;

const CardTitle = styled.h4`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
  @media (max-width: 1300px) {
    font-size: 1.6rem;
  }
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  line-height: 1.4;
  height: 100%;
  @media (max-width: 1300px) {
    font-size: 1rem;
  }
  @media (max-width: 1024px) {
    font-size: 0.95rem;
  }
`;

const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
  margin-top: auto;
`;

const CardTag = styled.span`
  color: #f920ce;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.4rem 0.8rem;
  border-radius: 1rem;
  border: 1px solid #f920ce;
`;

const Card = ({ href, imgSrc, imgAlt, title, description, tags }) => (
  <CardWrapper href={href}>
    <CardImg src={imgSrc} alt={imgAlt} />
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
    <CardTags>
      {tags.map((tag, i) => (
        <CardTag key={i}>{tag}</CardTag>
      ))}
    </CardTags>
  </CardWrapper>
);

export default Card;
