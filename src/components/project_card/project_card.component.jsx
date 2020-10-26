/* eslint-disable react/prop-types */
import React from 'react';
// import { Link } from 'react-router-dom';
import './project_card.style.scss';

const Card = ({
  link, image, title, desc,
}) => (
  <div className="card">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img className="card-image" src={image} alt={`${title} project`} />
      <h4 className="card-title">
        {' '}
        {title}
      </h4>
      <h5 className="card-desc">
        {desc}
      </h5>
    </a>
  </div>
);

export default Card;
