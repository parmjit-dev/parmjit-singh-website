/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope, faCode } from '@fortawesome/free-solid-svg-icons';
import './project_card.style.scss';

const Card = ({ link, image, title, desc, githubLink }) => (
  <div className="card">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img className="card-image" src={image} alt={`${title} project`} loading="lazy" />
      <h4 className="card-title">{title}</h4>
      <h5 className="card-desc">{desc}</h5>
      <a
        type="button"
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="font_icon" icon={faCode} size='2x' />
      </a>
    </a>
  </div>
);

export default Card;
