import React, { useContext, useEffect, useState } from 'react';

import { MainContext } from '../context';
import Project from '../components/Project';
import ScrollButton from '../components/ScrollButton';

import './Projects.scss';

export default function Projects() {
  const projects = useContext(MainContext);

  const [offsetY, setOffestY] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log(window.scrollY);
      setOffestY(window.scrollY);
      return () => window.removeEventListener('scroll');
    });
  });

  return (
    <>
      {offsetY > 100 && <ScrollButton />}
      <main className="projects">
        <h1 className="projects__title">Take a look at my project</h1>

        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </main>
    </>
  );
}
