import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import './project_card.style.scss';

type Props = {
  link: string,
  image: string,
  title: string,
  desc: string,
  githubLink: string,
}

const Card = ({ link, image, title, desc, githubLink }: Props) => {
  return (
    <div className="card">
      <a href={link === 'N/A' ? undefined : link} target="_blank" rel="noopener noreferrer">
        <img className="card-image" src={image} alt={`${title} project`} loading="lazy" />
        <h4 className="card-title">{title}</h4>
        <h5 className="card-desc">{desc}</h5>
      </a>
      {githubLink === 'N/A' ? (
        <div className='no_code_icon'/>
      ) : (
        <a type="button" href={githubLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="font_icon" icon={faCode} size="2x" />
        </a>
      )}
    </div>
  );
};

export default Card;
