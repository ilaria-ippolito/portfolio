import React from 'react';

const Experience = ({ title, date, description }) => (
  <div className="experience">
    <h4>{title}</h4>
    <div className="body-large">{date}</div>
    <p className="body">{description}</p>
  </div>
);

export default Experience;
