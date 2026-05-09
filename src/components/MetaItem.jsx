import React from 'react';
import styled from 'styled-components';

const MetaItemContainer = styled.div`
  padding: 0.25rem 0;
`;

const MetaItemLabel = styled.dt`
  margin: 0 0 0.3rem;
  font-size: var(--type-label);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-neutral-500);
`;

const MetaItemValue = styled.dd`
  margin: 0;
  font-size: var(--type-body-sm);
  font-weight: 600;
  color: var(--color-neutral-700);
  line-height: 1.5;
`;

const MetaItem = ({ label, value }) => (
  <MetaItemContainer>
    <MetaItemLabel>{label}</MetaItemLabel>
    <MetaItemValue>{value}</MetaItemValue>
  </MetaItemContainer>
);

export default MetaItem;
