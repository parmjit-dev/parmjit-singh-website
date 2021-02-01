/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './skills.style.scss';
const skillOptions = {
  languages: ['Python', 'PHP',   'Javascript', 'C#', 'C', 'Java - Android Studio', 'React Native'],
  frontend: [
    'React - Context API + Hooks & Redux',
    'Vue 3- Composition API + Vuex',
    'Experience With Angular',
    'JQuery',
    'CSS/SCSS',
  ],
  backend: [
    'Django',
    'Node.JS - Express framework',
    'GraphQL',
    'Laravel - with Laravel Websockets',
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
  const [skill, setSkill] = useState('languages');
  const handleChange = (e) => {
    setSkill(e.target.id);
  };
  const handleSelect = (e) => {
    setSkill(e.target.value);
  };

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  return (
    <div className="skills">
      {isTabletOrMobile ? (
        <select name="Skill" onChange={handleSelect}>
          <option value="languages" id="languages">
            Languages
          </option>
          <option value="frontend" id="frontend" onChange={handleChange}>
            Frontend
          </option>
          <option value="backend" id="backend" onChange={handleChange}>
            Backend
          </option>
          <option value="testing" id="testing" onChange={handleChange}>
            Testing
          </option>
          <option value="systems" id="systems" onChange={handleChange}>
            Systems
          </option>
        </select>
      ) : (
        <div className="skill_navbar">
          <span className="btn" id="languages" onClick={handleChange}>
            Languages
          </span>
          <span className="btn" id="frontend" onClick={handleChange}>
            Frontend
          </span>
          <span className="btn" id="backend" onClick={handleChange}>
            Backend
          </span>
          <span className="btn" id="testing" onClick={handleChange}>
            Testing
          </span>
          <span className="btn" id="systems" onClick={handleChange}>
            Systems
          </span>
        </div>
      )}
      {skill !== '' ? (
        <div>
          {skillOptions[skill].map((value, index) => (
            <h3 className="skill" key={`${value}:${index + 1}`}>
              {' '}
              {value}{' '}
            </h3>
          ))}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Skills;
