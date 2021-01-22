/* eslint-disable react/prop-types */
import React from 'react';
// import { Link } from 'react-router-dom';
import './project_card.style.scss';

const Card = ({ link, image, title, desc, githubLink }) => (
  <div className="card">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img className="card-image" src={image} alt={`${title} project`} loading="lazy" />
      <h4 className="card-title">{title}</h4>
      <h5 className="card-desc">{desc}</h5>
    </a>
    <div>
      <a
        type="button"
        className="buttonCode"
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {' '}
        code for: {title}
      </a>
    </div>
  </div>
);

export default Card;
