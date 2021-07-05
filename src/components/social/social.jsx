/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { useAlert } from 'react-alert';

const Social = () => {
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
    </div>
  );
};

export default Social;
