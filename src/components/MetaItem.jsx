import React from 'react';
import styled from 'styled-components';

const MetaItemContainer = styled.div`
  padding: 1rem 0;
`;

const MetaItemLabel = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-weight: 400;
  color: var(--color-neutral-500);
`;

const MetaItemValue = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;

const MetaItem = ({ label, value }) => (
  <MetaItemContainer>
    <MetaItemLabel>{label}</MetaItemLabel>
    <MetaItemValue>{value}</MetaItemValue>
  </MetaItemContainer>
);

export default MetaItem;
