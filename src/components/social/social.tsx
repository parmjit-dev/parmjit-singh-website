/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import resume from '../../static/Parmjit_Singh_Resume_Jul_2023.pdf';

import { faEnvelope, faHeart, faFile } from '@fortawesome/free-regular-svg-icons';
import { useAlert } from 'react-alert';

const Social = (props: { landing: Boolean }) => {
  const alert = useAlert();

  return (
    <div className="social-container">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Wolf-PSG?tab=repositories"
        className="github social"
      >
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/parmjit-gill-b139721b8/"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a>
      <a
        className="mail social"
        onClick={() => {
          navigator.clipboard.writeText('parmjit.singh.1199@gmail.com');
          alert.show('Email Copied');
        }}
      >
        <FontAwesomeIcon icon={faEnvelope} size="3x" />
      </a>
      {!props.landing ? (
        <a rel="noopener noreferrer" href="/" className="play social">
          <FontAwesomeIcon icon={faHome} size="3x" />
        </a>
      ) : (
        <a rel="noopener noreferrer" href="/playlist" className="play social">
          <FontAwesomeIcon icon={faHeart} size="3x" />
        </a>
      )}
      {!props.landing && (
        <a
          rel="noopener noreferrer"
          href={resume}
          download="Parmjit_Singh_Resume_Jul_2023.pdf"
          className="play social"
        >
          <FontAwesomeIcon icon={faFile} size="3x" />
        </a>
      )}
    </div>
  );
};

export default Social;
