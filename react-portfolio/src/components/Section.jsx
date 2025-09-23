import React from 'react';

const Section = ({ title, children, className = '' }) => (
  <section className={className}>
    <div className="highlighted-heading">
      <h3>{title}</h3>
    </div>
    {children}
  </section>
);

export default Section;
