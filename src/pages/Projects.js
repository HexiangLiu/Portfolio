import React, { useContext, useState } from 'react';

import { MainContext } from '../context';
import Project from '../components/Project';

import './Projects.scss';

export default function Projects() {
  const projectData = useContext(MainContext);
  const [topic, setTopic] = useState('react');

  const projects = projectData.filter((project) => project.topic === topic);

  return (
    <>
      <main className="projects">
        <h1 className="projects__title">Take a look at my project</h1>
        <h2 className="projects__intro">
          <span className="projects__filter" onClick={() => setTopic('react')}>
            React
          </span>{' '}
          /{' '}
          <span className="projects__filter" onClick={() => setTopic('redux')}>
            React Redux
          </span>{' '}
          /{' '}
          <span className="projects__filter" onClick={() => setTopic('jQuery')}>
            jQuery
          </span>
        </h2>
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </main>
    </>
  );
}
