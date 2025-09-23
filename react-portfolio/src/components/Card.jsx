import React from 'react';


const Card = ({ href, imgSrc, imgAlt, title, description, tags }) => (
  <a
    className="card flex flex-col h-full no-underline text-inherit hover:no-underline active:no-underline visited:no-underline focus:no-underline"
    href={href}
    style={{ color: 'inherit', textDecoration: 'none' }}
  >
    <img className="card__img" src={imgSrc} alt={imgAlt} />
    <h4 className="card__title">{title}</h4>
    <p className="card__description">{description}</p>
    <div className="card__tags mt-auto">
      {tags.map((tag, i) => (
        <span className="card__tag" key={i}>
          {tag}
        </span>
      ))}
    </div>
  </a>
);

export default Card;
