import React, { useContext } from 'react';

import { MainContext } from '../context';
import Project from '../components/Project';

import './Projects.scss';

export default function Projects() {
  const projects = useContext(MainContext);

  return (
    <>
      <main className="projects">
        <h1 className="projects__title">Take a look at my project</h1>

        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </main>
    </>
  );
}
