/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './skills.style.scss';
const skillOptions = {
  langauges: ['Python', 'Javascript', 'C#', 'C', 'Java - Android Studio', 'React Native'],
  frontend: [
    'React - Context API + Hooks & Redux',
    'Experience With Angular',
    'JQuery',
    'CSS/SCSS',
  ],
  backend: [
    'Django',
    'Node.JS - Express framework',
    'GraphQL',
    'Experience With PHP',
    'MongoDB',
    'Postgres',
    'MySQL',
  ],
  testing: ['Jest', 'Postman'],
  systems: [
    'Docker',
    'AWS - Lambda, S3, EC2',
    'Heroku',
    'Github',
    'Linux - 7+ years as primary OS',
  ],
};
const Skills = () => {
  const [skill, setSkill] = useState('');
  const handleChange = (e) => {
    setSkill(e.target.id);
  };
  return (
    <div className="skills">
      <div>
        <span class="btn" id="langauges" onClick={handleChange}>
          Languages
        </span>
        <span class="btn" id="frontend" onClick={handleChange}>
          Frontend
        </span>
        <span class="btn" id="backend" onClick={handleChange}>
          Backend
        </span>
        <span class="btn" id="testing" onClick={handleChange}>
          Testing
        </span>
        <span class="btn" id="systems" onClick={handleChange}>
          Systems
        </span>
      </div>
      {skill !== '' ? (
        <div>
          {skillOptions[skill].map((value) => (
            <h3> {value}</h3>
          ))}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Skills;
