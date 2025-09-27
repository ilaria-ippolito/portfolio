import React from 'react';
import styled from 'styled-components';

const StyledSkill = styled.div`
  background: rgba(249, 32, 206, 0.08);
  color: #f920ce;
  border: 1.5px solid #f920ce;
  border-radius: 2.5rem;
  padding: 0.7rem 2.2rem;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
  transition:
    background 0.2s,
    color 0.2s;
  user-select: none;
  /* hover disabled */
`;

const Skill = ({ children }) => <StyledSkill>{children}</StyledSkill>;

export default Skill;
