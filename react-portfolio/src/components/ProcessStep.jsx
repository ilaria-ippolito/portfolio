import React from 'react';

const ProcessStep = ({ number, title, description }) => (
  <div className="process-step">
    <span className="step-number">{number}</span>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default ProcessStep;
