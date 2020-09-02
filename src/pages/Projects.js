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
      setOffestY(window.scrollY);
      return () => window.removeEventListener('scroll');
    });
  });

  return (
    <>
      {offsetY > 100 && <ScrollButton />}
      <main className="projects">
        <h1 className="projects__title">My projects</h1>

        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
        <h2>
          <a
            className="footer"
            href="https://github.com/HexiangLiu"
            target="__blank"
          >
            Click here to{' '}
          </a>
          checkout more on my github!
        </h2>
      </main>
    </>
  );
}
