import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.div`
  margin-bottom: 56px;
`;

const ExperienceTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 16px;
  position: relative;
`;

const ExperienceDate = styled.div`
  display: inline-block;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 1px;
  background-color: #000000;
  text-decoration: none;
  padding: 5px 20px;
  border-radius: 100px;
  margin-bottom: 16px;
`;

const ExperienceDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 0;
`;

const Experience = ({ title, date, description }) => (
  <ExperienceContainer>
    <ExperienceTitle>{title}</ExperienceTitle>
    <ExperienceDate>{date}</ExperienceDate>
    <ExperienceDescription>{description}</ExperienceDescription>
  </ExperienceContainer>
);

export default Experience;
