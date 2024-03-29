/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './skills.style.scss';

const skillOptions: Record<string, any> = {
  languages: ['Python', 'PHP', 'Javascript', 'TypeScript', 'Golang','Java', 'Scala', 'React Native'],
  frontend: [
    'React: Context API & Webhooks + Redux',
    'Vue 3: Composition API & Vuex',
    'JQuery',
    'CSS/SCSS',
    'Tailwind CSS',
  ],
  backend: [
    'Django',
    'Node.js: Express, Next.js',
    'GraphQL: Graphene & Apollo',
    'Hugo',
    'Play',
    'Laravel: with Laravel Websockets',
    'Yii2',
  ],
  databases: [
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'DynamoDB',
    'Redis',
    'Apache Kafka'
  ],
  testing: ['Jest', 'Codeception', 'Unittest', 'Postman', 'Opentelemetry', 'Jaeger'],
  systems: ['Docker', 'AWS CDK ', 'K8s','Heroku', 'Github', 'Linux - 7+ years as primary OS'],
};

const Skills = () => {
  const [skill, setSkill] = useState('languages');
  const handleChange = (e: any) => {
    setSkill(e.target.id);
  };
  const handleSelect = (e: any) => {
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
          <option value="databases" id="databases" onChange={handleChange}>
            Databases
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
          <span className="btn" id="databases" onClick={handleChange}>
            Databases
          </span>
          <span className="btn" id="testing" onClick={handleChange}>
            Testing
          </span>
          <span className="btn" id="systems" onClick={handleChange}>
            Systems
          </span>
        </div>
      )}
      <div>
        {skillOptions[skill].map((value: string, index: number) => (
          <h3 className="skill" key={`${value}:${index + 1}`}>
            {' '}
            {value}{' '}
          </h3>
        ))}
      </div>
      <div />
    </div>
  );
};

export default Skills;
