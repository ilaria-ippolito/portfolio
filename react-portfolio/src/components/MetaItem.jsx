import React from 'react';

const MetaItem = ({ label, value }) => (
  <div className="meta-item">
    <h4>{label}</h4>
    <p>{value}</p>
  </div>
);

export default MetaItem;
