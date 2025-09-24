import React from 'react';
import styled from 'styled-components';

const HighlightedHeading = styled.div`
  position: relative;
  margin-bottom: 56px;
`;

const Section = ({ title, children, className = '' }) => (
  <section className={className}>
    <HighlightedHeading>
      <h3>{title}</h3>
    </HighlightedHeading>
    {children}
  </section>
);

export default Section;
